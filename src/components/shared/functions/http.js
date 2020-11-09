const BASE_URL = `http://${window.location.hostname}:8080`
const SLASH = '/'

const get = async (endpoint) => {
    const settings = {
      method: 'GET',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      }
    }
    try {
        const fetchResponse = await fetch(BASE_URL + SLASH + endpoint, settings)
        const response = await fetchResponse.json();
        return response;
    } catch (e) {
      return e;
    } 
}

const post = async (data, endpoint) => {
  const settings = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      }
  };
  try {
      const fetchResponse = await fetch(BASE_URL + SLASH + endpoint, settings);
      const response = await fetchResponse.text();
      return response;
  } catch (e) {
      return e;
  } 
}

export { get, post };