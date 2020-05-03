
export enum EventType {
  Login,
  Logout
}

export class Event {
  type: EventType;
  data?: any;
}

export interface Response {
  authenticated: boolean;
  created?: string;
  expiration?: string;
  accessToken?: string;
  message: string;
  user?: any;
  roles?: any;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RecoverRequest {
  email: string;
}

export interface NewpassRequest {
  email: string;
  password: string;
  passwordConfirm: string;
  token: string;
}

export interface LoginResponse {
  username: string;
  token: string;
  expires: string;
}
