export interface JoinRequest {
  username: string;
  password: string;
  name: string;
  email: string;
  age: number;
}

export interface JoinResponse {
  id: number;
  username: string;
  name: string;
  email: string;
  age: number;
  status: string;
}


export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  userId: number;
  message: string;
}
