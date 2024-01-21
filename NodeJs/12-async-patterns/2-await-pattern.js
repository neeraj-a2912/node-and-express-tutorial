const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile("../content/first.txt");
    const second = await readFile("../content/second.txt");
    await writeFile(
      "../content/result-mind-grenade.txt",
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: "a" }
    );
  } catch (error) {
    console.log(error);
  }
};

start();

// readFile("../content/first.txt", "utf-8", (err, data) => {
//   if (err) {
//     return;
//   } else {
//     console.log(data);
//   }
// });

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("../content/first.txt")
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));
