// const credentials: RequestCredentials = 'include';

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
	try {
  	const response = await fetch(url, { ...BASE_HEADERS, method: 'GET' });
		if(!response.ok) {
			throw Error(response.statusText);
		}
		const jsonResponse = await response.json();
		return jsonResponse;
	} catch(error: any) {
		return error.message;
	}
  // const url = `${API_ENDPOINT}${endpoint}`;
  // const response = await fetch(url, { ...BASE_HEADERS, method: 'GET' });
  // return await handleResponse(response);
};

export const postData = async (endpoint: string, payload: unknown) => {
  const url = `${API_ENDPOINT}${endpoint}`;
  const response = await fetch(url, {
    ...BASE_HEADERS,
    method: 'POST',
    body: JSON.stringify(payload),
  });
  return await handleResponse(response);
};
