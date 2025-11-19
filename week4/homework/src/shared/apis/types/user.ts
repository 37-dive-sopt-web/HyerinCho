export interface UserResponse {
  id: number;
  username: string;
  name: string;
  email: string;
  age: number;
}

export interface UserRequest {
  name: string;
  email: string;
  age: number;
}

export interface userDeletePayload {
  success: true;
  code: string;
  message: string;
}
