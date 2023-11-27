const BASE_URL = 'http://localhost:8080';

// Function to store authentication state (e.g., token) in local storage
const storeAuthenticationState = (token) => {
  localStorage.setItem('authToken', token);
};

// Function to check if the user is authenticated based on stored token
export const checkAuthentication = () => {
  const token = localStorage.getItem('authToken');
  return !!token; // Returns true if the token exists
};

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
    console.log(data);

    if (response.ok) {
      // Handle successful login
      storeAuthenticationState(data.token); // Store the authentication state (e.g., token)
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
