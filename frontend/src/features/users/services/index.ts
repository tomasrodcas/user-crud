import { config } from "../../../config";
import { User } from "../models";

const usersApiV1Url = config.API_BASE_URL + "/v1/users";

export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch(usersApiV1Url);
  if (!response.ok) throw new Error("Failed to fetch users");
  return response.json();
};

export const addUser = async (user: User): Promise<User> => {
  const response = await fetch(usersApiV1Url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  if (!response.ok) throw new Error("Failed to create user");
  return response.json();
};

export const deleteUser = async (id: string): Promise<boolean> => {
  const response = await fetch(`${usersApiV1Url}/${id}`, { method: "DELETE" });
  if (!response.ok) throw new Error("Failed to delete user");
  return response.json();
};

export const featchUserById = async (id: string): Promise<User> => {
  const response = await fetch(`${usersApiV1Url}/${id}`);
  if (!response.ok) throw new Error("Failed to fetch user");
  return response.json();
};

export const updateUser = async (user: User): Promise<User> => {
  const response = await fetch(`${usersApiV1Url}/${user.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  if (!response.ok) throw new Error("Failed to update user");
  return response.json();
};
