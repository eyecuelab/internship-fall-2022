// const credentials: RequestCredentials = 'include';
// export const API_ENDPOINT = 'https://haicue-api.fly.dev';

export const API_ENDPOINT = 'http://localhost:3000';
const BASE_HEADERS = {
  headers: {
    'Content-Type': 'application/json',
  },
  // credentials: credentials
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
  console.log(handleResponse(response));
}

export const putData = async (endpoint: string) => {
	const url = `${API_ENDPOINT}${endpoint}`;
	const response = await fetch(url, {
	  ...BASE_HEADERS,
	  method: 'PUT',
	});
	return handleResponse(response);
  };

