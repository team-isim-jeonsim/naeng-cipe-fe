export interface JoinRequest {
  email: string;
  password: string;
  passwordCheck: string;
  nickname: string;
}

export interface LoginRequest extends Pick<JoinRequest, 'email' | 'password'> {}

export interface TokenError {
  message: string;
  code: number;
}
