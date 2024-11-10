import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage';

let token = null;

export async function setToken(newToken) {
  if (newToken !== null) {
    // Store the token securely with rn-secure-storage
    const res = await RNSecureStorage.setItem("token", newToken, { accessible: ACCESSIBLE.WHEN_UNLOCKED });
    token = newToken; // Update the in-memory token variable
    console.log(res)
  } else {
    // Remove the token from RNSecureStorage if newToken is null
    await RNSecureStorage.removeItem("token");
    token = null;
  }
}

export async function getToken() {
  if (token !== null) {
    return token; // Return the in-memory token if it exists
  }
  try {
    const exist = await RNSecureStorage.exist("token"); // Check if the item exist
    if (exist) {
      // Retrieve token from RNSecureStorage if not in memory
      token = await RNSecureStorage.getItem("token");
    } else {
      console.log("Item does not exist.");
    }
  } catch (error) {
    console.error("Error:", error);
  }

}


export async function removeToken() {
  try {
    const exist = await RNSecureStorage.exist("token"); // Check if the item exist
    if (exist) {
      const result = await RNSecureStorage.removeItem("token"); // Remove the item if it exists
      token = null;
      console.log("Item removed:", result);
    } else {
      console.log("Item does not exist.");
    }
  } catch (error) {
    console.error("Error:", error);
  }


}
