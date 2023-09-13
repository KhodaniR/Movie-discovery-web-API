import axios from 'axios';

const apiKey = 'YOUR_TMDB_API_KEY';
const apiUrl = 'https://api.themoviedb.org/3';

export const fetchTopMovies = async () => {
  try {
    const response = await axios.get(`${apiUrl}/movie/popular`, {
      params: {
        api_key: apiKey,
        language: 'en-US', // You can change the language if needed
        page: 1, // The page number (adjust as needed)
      },
    });

    // Check if the response is successful
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Failed to fetch top movies');
    }
  } catch (error) {
    console.error('Error fetching top movies:', error);
    throw error;
  }
};
