// BEGIN (write your solution here)
const isPrime = (n) => {
if (n < 2) {
  return false;
}
for (let a = 2; a < n; a += 1) {
  if (n % a === 0) {
    return false;
    }
}
return true;

}
// END

export default isPrime;
