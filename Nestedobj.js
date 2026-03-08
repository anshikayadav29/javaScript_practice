const user = {
  profile: {
    email: "john@gmail.com"
  }
};

const { profile: { email } } = user;

console.log(email);
