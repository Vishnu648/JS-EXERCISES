let details = {
  name: "namesss",
  age: 22,
  qualification: "qualification",
};

// Create a deep copy of details
let newb = JSON.parse(JSON.stringify(details));

// Modify the name property in the newb object
Object.assign(newb, { name: "vishnu" });

console.log(details);
console.log();
console.log(newb);
