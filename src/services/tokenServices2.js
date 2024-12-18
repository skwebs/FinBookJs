import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage';

let token = null;

export async function setToken(newToken) {

  if (newToken !== null) {
    token = newToken;
    await RNSecureStorage.setItem('token', newToken, { accessible: ACCESSIBLE.WHEN_UNLOCKED });
  } else {
    await RNSecureStorage.removeItem('token');
  }
}



export async function getToken() {

  if (token !== null) {
    return token; // Return the in-memory token if it exists
  }

  try {
    if (await RNSecureStorage.exist('token')) {
      token = await RNSecureStorage.getItem('token');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}


export async function removeToken() {
  try {
    const exist = await RNSecureStorage.exist('token'); // Check if the item exist
    if (exist) {
      const result = await RNSecureStorage.removeItem('token'); // Remove the item if it exists
      token = null;
      console.log('Item removed:', result);
    } else {
      console.log('Item does not exist.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
