const BASE_URL = "https://zeerostock-assignment-a-ui-mq2r.vercel.app";

export const searchProducts = async (params) => {
  const query = new URLSearchParams(params).toString();
  
  const res = await fetch(`${BASE_URL}/search?${query}`);
  
  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  return res.json();
};