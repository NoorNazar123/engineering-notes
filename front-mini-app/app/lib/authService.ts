import type { User } from "@/app/types/user";

const API_URL = "http://127.0.0.1:8000";

type LoginCredentials = {
  username: string;
  password: string;
};

type LoginResponse = {
  access_token: string;
  token_type: string;
};

type SignupData = {
  username: string;
  password: string;
  bio: string;
  profile_image: File;
};

export async function loginUser(
  credentials: LoginCredentials
): Promise<LoginResponse> {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const error = await response.json();

    throw new Error(error.detail || "Login failed");
  }

  return response.json();
}

export async function getUserById(
  userId: number,
  accessToken: string
): Promise<User> {
  const response = await fetch(`${API_URL}/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 401) {
    throw new Error("AUTH_TOKEN_INVALID");
  }

  if (!response.ok) {
    const error = await response.json();

    throw new Error(error.detail || "Failed to get user");
  }

  return response.json();
}

export function getUserIdFromToken(token: string): number {
  try {
    const parts = token.split(".");

    if (parts.length !== 3) {
      throw new Error("Invalid access token");
    }

    const payload = parts[1];

    const decodedPayload = JSON.parse(
      atob(payload.replace(/-/g, "+").replace(/_/g, "/"))
    );

    const userId = Number(decodedPayload.sub);

    if (!userId) {
      throw new Error("User ID not found in access token");
    }

    return userId;
  } catch {
    throw new Error("Invalid access token");
  }
}

export async function signupUser(data: SignupData): Promise<unknown> {
  const formData = new FormData();

  formData.append("username", data.username);
  formData.append("password", data.password);
  formData.append("bio", data.bio);
  formData.append("profile_image", data.profile_image);

  const response = await fetch(`${API_URL}/auth/signup`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json();

    throw new Error(error.detail || "Signup failed");
  }

  return response.json();
}
