import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEY = "smart_mandi_token";

// MOCK LOGIN (we will connect backend later)
export const loginUser = async (phone: string, password: string) => {
  if (phone && password) {
    const fakeToken = "token_" + Date.now();

    await AsyncStorage.setItem(TOKEN_KEY, fakeToken);

    return { success: true, token: fakeToken };
  }

  return { success: false };
};

export const logoutUser = async () => {
  await AsyncStorage.removeItem(TOKEN_KEY);
};

export const getToken = async () => {
  return await AsyncStorage.getItem(TOKEN_KEY);
};

export const isLoggedIn = async () => {
  const token = await getToken();
  return token !== null;
};