import axios from 'axios';

export const usersAPI = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    return response;
  } catch (error) {
    return false;
  }
};

export const postsAPI = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );
    return response;
  } catch (error) {
    return false;
  }
};
