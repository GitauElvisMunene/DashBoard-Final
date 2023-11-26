const BASE_URL = 'http://localhost:8080';

export const signIn = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log(data)

    if (response.ok) {
      // Handle successful login
      return data;
    } else {
      // Handle login error
      throw new Error(data.error);
    }
  } catch (error) {
    // Handle fetch error
    console.error('Error during login:', error.message);
    throw error;
  }
};
