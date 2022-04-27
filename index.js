function palindrome(str) {
    //Remove all non-alphanumeric characters (think there is a regular expression for that)
    function stringWithAlphaNumeric(str) {
      //within this we will be replacing all the non-alphanumeric characters with nothing
      //utilizing the regex .replace();
      //replace takes 2 parameters 1. string/regex, 2.replacement 
      //^ = not, a-z and 0-9 is alphanumerical and g= global and i=ignore case
      return str.replace(/[^a-z0-9]/gi, "");
      //Another way to do this is by using (/[\W_]/gi, "");
      //We need to include _ so it takes that as well.
    }
  
    function stringLowerCased(str) {
        //using ES6 to return the string in lowercase
        return str.toLowerCase();
      }

     //loop through the string and using ES6 => to make a function 
    //loop backwards, to reconsturct the str 
    const stringReversed = (str) => {
    //make an empty string 
    let result = "";
    //for loop example, starting at the END of the string not the beginning 
    for(let i = str.length-1; )

  }
    const cleanedStr = stringWithAlphaNumeric(str);
    //Make string either lower or uppercase, lowercase is what we will use 
    const lowerCaseStr = stringLowerCased(cleanedStr);
    //reverse the string 
    const reversedStr = stringReversed(lowerCaseStr);
    //return the comparison of reversed string = to lowercase cleaned up version 
    return lowerCaseStr == reversedStr;
  }
  
  palindrome("eye");