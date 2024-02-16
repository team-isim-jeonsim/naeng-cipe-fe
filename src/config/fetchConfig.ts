export const CLIENT_BASE_URL = process.env.NEXT_PUBLIC_CLIENT_URL;
export const API_BASE_URL = process.env.API_URL;
export const TYPE_JSON = 'json';
export const TYPE_FORM = 'form';

type ContentType = 'json' | 'form';

const contentTypes = {
  json: 'application/json',
  form: 'multipart/form-data',
};

export const clientHeader = (contentType: ContentType) => {
  return {
    'Content-Type': contentTypes[contentType],
  };
};

export const apiHeader = (contentType: ContentType, accessToken?: string) => {
  return {
    'Content-Type': contentTypes[contentType],
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  };
};
