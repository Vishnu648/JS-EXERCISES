const a = {
  Parent: {
    Student: {
      Name: "Virat",
      Age: 24,
      Rollno: 34,
      marks: [{ English: 85 }, { Science: 75 }],
    },
    MobileNos: ["1234567890", "9087654321"],
  },
};

const b = JSON.parse(JSON.stringify(a));

Object.assign(b, {
  Parent: {
    ...b.Parent,
    Student: {
      ...b.Parent.Student,
      Name: "Vishnu",
    },
  },
});


Object.assign(b, {
  Parent: {
    ...b.Parent,
    Student: {
      ...b.Parent.Student,
      Age: 22,
    },
  },
});


Object.assign(b, {
  Parent: {
    ...b.Parent,
    Student: {
      ...b.Parent.Student,
      Rollno: 42,
    },
  },
});

Object.assign(b, {
  Parent: {
    ...b.Parent,
    Student: {
      ...b.Parent.Student,
      marks: [{ Physics: 88 }, { Chemistry: 65 }],
    },
  },
});

Object.assign(b, {
  Parent: {
    Student: {
      ...b.Parent.Student,
    },
    MobileNos: ["2222222222", "8888888888"],
  },
});

console.log("Original Name:", a);
console.log("Modified Name:", b);
