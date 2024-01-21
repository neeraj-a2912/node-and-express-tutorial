setInterval(() => {
  console.log("hello world");
}, 2000);
console.log("I will runfast"); // this line will be executed first because setInterval is async
