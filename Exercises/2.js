(() => {
  console.log("Loading User Details..");
})();

const Greetings = (firstName, lastName) => {
  let fullName = `${firstName} ${lastName}`;
  let greeting = () => {
    console.log("Hello", fullName);
  };
  return greeting();
};

Greetings("v", "s");
