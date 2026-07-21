/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n<=0) return false
    const power=Math.log(n)/Math.log(3);
    return Math.abs(power-Math.round(power))<1e-10;
};
console.log(isPowerOfThree(9)); 