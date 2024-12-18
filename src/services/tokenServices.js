import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage';

let token = null;

// Set Token
export async function setToken(newToken) {
  try {
    if (newToken !== null) {
      token = newToken;
      await RNSecureStorage.setItem('token', newToken, { accessible: ACCESSIBLE.WHEN_UNLOCKED });
    } else {
      await RNSecureStorage.removeItem('token');
      token = null;
    }
  } catch (error) {
    console.error('Error in setToken:', error);
  }
}

// Get Token
export async function getToken() {
  if (token !== null) {
    return token; // Return the in-memory token if it exists
  }

  try {
    if (await RNSecureStorage.exist('token')) {
      token = await RNSecureStorage.getItem('token');
      return token; // Return the token from secure storage
    }
  } catch (error) {
    console.error('Error in getToken:', error);
  }
  return null; // Explicitly return null if no token is found
}

// Remove Token
export async function removeToken() {
  try {
    if (token !== null) {
      await RNSecureStorage.removeItem('token'); // Remove from secure storage
      token = null; // Clear in-memory token
      console.log('Token removed.');
    } else {
      console.log('No token to remove.');
    }
  } catch (error) {
    console.error('Error in removeToken:', error);
  }
}
