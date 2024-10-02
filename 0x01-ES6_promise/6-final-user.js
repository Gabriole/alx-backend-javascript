export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => {
    return results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,  // Keep the error as-is
    }));
  });
}
