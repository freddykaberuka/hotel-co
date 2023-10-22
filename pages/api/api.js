export const fetchHotels = async (page, pageSize) => {
  const response = await fetch(
    `https://63b44f0d9f50390584ad1c20.mockapi.io/api/v1/hotels?page=${page}&limit=${pageSize}`
  );
  const data = await response.json();
  return data;
};