import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const user = await signUpUser(firstName, lastName);
    const photo = await uploadPhoto(fileName);
    return {
      user,
      photo,
    };
  } catch (error) {
    return {
      user: null,
      photo: null,
    };
  }
}
