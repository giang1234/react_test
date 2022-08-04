const usernameRule: any = [
  {
    required: true,
    message: "Please input your email!"
  },
  {
    pattern: new RegExp(/^[a-z0-9\._\-]+[@][a-z0-9_\-]+([.][a-z0-9_\-]+)+[a-z]{1,4}$/i),
    message: "Please enter the correct format!"
  }
];

const passwordRule: any = [
  {
    required: true,
    message: "Please input your password!"
  }
];

export { usernameRule, passwordRule };