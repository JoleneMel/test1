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
  
    const cleanedStr = stringWithAlphaNumeric(str);
    //Make string either lower or uppercase, lowercase is what we will use 
    const lowerCaseStr = stringLowerCased(cleanedStr);
    //reverse the string 
    const reversedStr = stringReversed(lowerCaseStr);
    //return the comparison of reversed string = to lowercase cleaned up version 
    return lowerCaseStr == reversedStr;
  }
  
  palindrome("eye");