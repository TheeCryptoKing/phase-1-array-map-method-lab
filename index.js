const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


//.string to go seperate and go through indiviual words, that or call them individually which seems tedeious 
//we can iterate an interation when we call an iteration?? is their another way im not thinking of
//capitializing we would need a fnction that can go through every seperate letter, through every letter kno where the start and end is and then capitalize the start and do the same for every element 
const titleCased = () => {  //use arrow function to 
    return tutorials.map(element => {
      const mySplitArray = element.split(" ")
      const Array3 = mySplitArray.map(
        newEl => newEl.charAt(0).toUpperCase() +  newEl.slice(1))
        //newEl.charAt(0).toUpperCase() takes 1st character from index and uppercase's it notice the syntax used to do this 
        // one fatal error was us using bracket notation with .charAt()
        // newEl.slice(1) returns rest of element after we alter character and no need to worry about rearranging everyhting or going threw every elment because it is already being done, next function will rejoin everything
        const finalResponse = Array3.join(' ')//.split and .join are polar opposites, .split seperates into different substrings that have different indexes. .join brings all strings together and a asepereated by their parameter
        return finalResponse
      })
}
// S/O to My boy Niraj
// cleaned up the code





