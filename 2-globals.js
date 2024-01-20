// GLOBALS - NO WINDOW
// global variables can be accessed froma any where in the application

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (Common JS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log("Directory Name", __dirname)

setInterval(() => {
    console.log('Hello NodeJS') // calls this function every 1 sec
},1000) 
