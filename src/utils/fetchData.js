export async function fetchFromAPI(endpoint, options = {}) {
  const ApiUrl = "https://darkgreen-pigeon-940641.hostingersite.com/wp-json/wp/v2/";

  try {
    const response = await fetch(ApiUrl + endpoint, options);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${endpoint}`);
    }
    const data = await response.json(); // Store the JSON data in a variable
    console.log("Fetched data:", data); // Log the data instead of `response.json()`
    return data; // Return the parsed JSON data
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return [];
  }
}
