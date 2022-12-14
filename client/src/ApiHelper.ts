// export const API_ENDPOINT = 'http://localhost:3000'
export const API_ENDPOINT = 'https://haicue-pikachu-api.fly.dev';
const BASE_HEADERS = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const handleResponse = async (response: Response) => {
  const json = await response.json();

  if (!response.ok) {
    throw Error(json.error);
  } else {
    return json;
  }
};

export const getData = async (endpoint: string) => {
  const url = `${API_ENDPOINT}${endpoint}`;
  const response = await fetch(url, {...BASE_HEADERS, method: 'GET'});
  return handleResponse(response);
};

export const postData = async (endpoint: string, payload: unknown) => {
  const url = `${API_ENDPOINT}${endpoint}`;
  const response = await fetch(url, {
    ...BASE_HEADERS,
    method: 'POST',
    body: JSON.stringify(payload),
  });
  return handleResponse(response);
};

export const deleteData = async (endpoint: string) => {
  const url = `${API_ENDPOINT}${endpoint}`;
  const response = await fetch(url, {
    ...BASE_HEADERS,
    method: 'DELETE',
  });
	return handleResponse(response);
};

export const putData = async (endpoint: string, payload?: unknown) => {
  const url = `${API_ENDPOINT}${endpoint}`;
  const response = await fetch(url, {
    ...BASE_HEADERS,
    method: 'PUT',
		body: JSON.stringify(payload),
  });
  return handleResponse(response);
};
