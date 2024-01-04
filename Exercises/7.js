const GLConfig = {
  CO: { type: "REQUIRED" },
  MAJ: { type: "NORMAL" },
  SET: { type: "NORMAL" },
  MIN: { type: "REQUIRED" },
};

const GLSegments = {
  CO: 's',
  MAJ: "111",
  SET: "111",
  MIN: "000",
};

let validation = 0;


for (let i in GLConfig) {
  if (GLConfig[i].type == "REQUIRED") {
    if (
      GLSegments[i].length <= i.length &&
      GLSegments[i] != "" &&
      GLSegments[i] != undefined &&
      GLSegments[i] != null
    ) {
      validation = 1;
    } else {
      validation = 0;
      break;
    }
  }
}

if (validation == 1) {
  console.log("true");
} else {
  console.log("false");
}
