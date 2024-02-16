export interface MemberResponse {
  id: number;
  email: string;
  nickname: string;
  createdDate: string;
  updatedDate: string;
}

export interface SessionUser extends MemberResponse {
  accessToken: string;
}
