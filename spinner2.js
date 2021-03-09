//create an array of elements
//loop through it 
//setTimeout and output each character
//check if this is the last one ==> add a new line character

const characters = [
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|  ",
  "\r/  ",
  "\r-  ",
];
const spinPipe = (characters) => {
  for (let i = 0; i < characters.length; i++) {
    setTimeout(() => {
      process.stdout.write(characters[i]);
      if (i === characters.length - 1) {
        process.stdout.write("\n");
      }
    }, i * 200);
  }
};

console.log(spinPipe(characters));
