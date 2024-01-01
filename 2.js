(() => {
  console.log("Loading User Details..");
})();

const Greetings = (firstName, lastName) => {
  let fullName = `${firstName} ${lastName}`;
  let greeting = `Hello ${fullName}`;
  console.log(greeting);
};

Greetings("v", "s");
