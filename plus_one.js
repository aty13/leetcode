/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let result = 0;
    result = BigInt(result);
    
    const getIncrements = length => {
        if (length == 1) return ['1'];
        const base = '1';
        const zeros = '0';
        const increments = [];
        
        for (let i = 0; i < length; i++) {
            const buffStr = `${base}${zeros.repeat(length - 1 - i)}`;
            const buffNum = parseInt(buffStr); 
            increments.push(buffNum);
        }
        return increments;
    }
    
    const increments = getIncrements(digits.length);
    console.log(increments);
    for (let i = 0; i < increments.length; i++) {
        result += BigInt(increments[i] * digits[i]);
    }
    console.log(result);
    result++;
    console.log(result);
    return Array.from(String(result), BigInt);
};