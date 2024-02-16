import { CLIENT_BASE_URL, clientHeader } from '@/config/fetchConfig';
import { JoinRequest } from '@/model/auth';

export const joinFetcher = async (joinRequest: JoinRequest) => {
  const res = await fetch(`${CLIENT_BASE_URL}/auth/join`, {
    headers: clientHeader('json'),
    method: 'POST',
    body: JSON.stringify(joinRequest),
  });

  return res.json();
};
