// BEGIN (write your solution here)
const smallestDivisor = (n) => {
if ( n < 1) {
  return NaN;
  }
   if (n === 1) {
    return n;
    } 
    let counter = 2
        while (n % counter !== 0) {
         counter = counter + 1 ;
        }
        return counter;
}
// END

export default smallestDivisor;
