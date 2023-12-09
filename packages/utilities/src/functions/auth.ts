import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getIdToken(idToken: string) {
  let token = await AsyncStorage.getItem('@idToken');

  return token ? token : null;
}

export async function getUser() {
  let user = await AsyncStorage.getItem('@user');

  return user ? JSON.parse(user) : null;
}

export async function setUser(user: any) {
  console.log('setUser', JSON.stringify(user.jwt));
  //TODO: set user to AsyncStorage
  await AsyncStorage.setItem('@idToken', user.jwt);
  await AsyncStorage.setItem('@user', JSON.stringify(user.user));
}

export async function logout() {
  await AsyncStorage.clear();
  return true;
}

export async function createUser(email: string, password: string) {}
