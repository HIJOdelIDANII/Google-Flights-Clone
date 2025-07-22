import axios from "axios";
export interface CommonGetRequestOptions {
  urlEndpoint: string;
  params: object;
  version: string;
}
const commonOptions = (options: CommonGetRequestOptions) => {
  return {
    method: "GET",
    url: `https://sky-scrapper.p.rapidapi.com/api/${options.version}/flights/${options.urlEndpoint}`,
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
    },
    params: { ...options.params },
  };
};

export async function commonGetRequest(options: CommonGetRequestOptions) {
  try {
    const requestBody = commonOptions(options);
    const response = await axios.request(requestBody);
    return response.data;
  } catch (error) {
    throw error;
  }
}
