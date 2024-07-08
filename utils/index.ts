export async function fetchCars() {
  const headers = {
    "x-rapidapi-key": "d006a6df20mshf70394f5712d602p186f8fjsnbf83ecad92ab",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = await response.json();
  return result;
}
