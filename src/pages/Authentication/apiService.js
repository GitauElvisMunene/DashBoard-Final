const BASE_URL = 'https://swms-7p8s.onrender.com'; 

// Function to store authentication state (e.g., token) in local storage
const storeAuthenticationState = (token) => {
  localStorage.setItem('authToken', token);
};

// Function to check if the user is authenticated based on stored token
export const checkAuthentication = () => {
  const token = localStorage.getItem('authToken');
  return !!token; // Returns true if the token exists
};

// Function to remove authentication state (e.g., token) from local storage
const removeAuthenticationState = () => {
  localStorage.removeItem('authToken');
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

export const signOut = async () => {
  try {
    // You may need to send a request to your server to perform any necessary cleanup

    // For now, let's just remove the authentication state locally
    removeAuthenticationState();

    // You can perform additional cleanup or actions here if needed

    console.log('User successfully signed out');
  } catch (error) {
    console.error('Error during sign out:', error.message);
    throw error;
  }
};