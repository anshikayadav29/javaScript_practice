const user = {
  profile: {}
};

const { profile: { phone = "Not Available" } } = user;

console.log(phone);
