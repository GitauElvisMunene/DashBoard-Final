const BASE_URL = 'https://swms-7p8s.onrender.com'; 

// Function to store authentication state (e.g., token) in local storage
const storeAuthenticationState = (token) => {
  localStorage.setItem('authToken', token);
};

// Function to check if the user is authenticated based on stored token
export const checkAuthentication = () => {
  const token = localStorage.getItem('authToken');
  const isAuthenticated = !!token; // Returns true if the token exists
  console.log('Is Authenticated:', isAuthenticated);
  return isAuthenticated;
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
      console.log(response);
      // Handle successful login
      storeAuthenticationState(data.user); // Store the authentication state (e.g., token)
      console.log('User successfully signed in'); // Add this line
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
    removeAuthenticationState();
    console.log('User successfully signed out');
    // Redirect to sign-in page
    window.location.href = '/auth/signin'; // Adjust the path as needed
  } catch (error) {
    console.error('Error during sign out:', error.message);
    throw error;
  }
};