import { JoinRequest, LoginRequest } from '@/model/auth';
import { API_BASE_URL, TYPE_JSON, apiHeader } from '../config/fetchConfig';

const AUTH_URL = `${API_BASE_URL}/auth`;

export const loginMember = async (loginRequest: LoginRequest) => {
  console.log('AuthService - loginMember');

  try {
    const res = await fetch(`${AUTH_URL}/login`, {
      headers: apiHeader(TYPE_JSON),
      method: 'POST',
      body: JSON.stringify(loginRequest),
    });

    return res.json();
  } catch (err) {
    console.log(err);

    return err;
  }
};

export const addMember = async (joinRequest: JoinRequest) => {
  console.log('AuthService - addMember');

  try {
    const res = await fetch(`${AUTH_URL}/join`, {
      headers: apiHeader(TYPE_JSON),
      method: 'POST',
      body: JSON.stringify(joinRequest),
    });

    const data = await res.json();
    console.log(data);

    return data;
  } catch (err) {
    console.log(err);

    return err;
  }
};
