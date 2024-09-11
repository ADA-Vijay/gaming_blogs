
export async function fetchFromAPI(endpoint, options = {}) {
    const ApiUrl = "https://gameblogs.us23.cdn-alpha.com/wp-json/wp/v2/";
  
    try {
      const response = await fetch(ApiUrl + endpoint, options);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${endpoint}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
      return [];
    }
  }
  