const GLConfig = {
  CO: { type: "REQUIRED" },
  MAJ: { type: "NORMAL" },
  SET: { type: "NORMAL" },
  MIN: { type: "REQUIRED" },
};

const GLSegments = {
  CO: "",
  MAJ: "111",
  SET: "111",
  MIN: "000",
};

let validation = 0;

for (let i in GLSegments) {
  if (GLConfig[i].type == "REQUIRED") {
    if (
      GLSegments[i].length <= i.length &&
      GLSegments[i] != undefined &&
      GLSegments[i] != null &&
      GLSegments[i] != ""
    ) {
      validation = 1;
    }
  }
}

if (validation == 1) {
  console.log("-true");
} else {
  console.log("-false");
}
