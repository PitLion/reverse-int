module.exports = function reverse (n) {
    let strOfNumber = String(Math.abs(n));
    let strOfNumberArray =  strOfNumber.split('');
    let reverseArray = strOfNumberArray.reverse();
    let reverseStrOfNumber = reverseArray.join('');
    return Number(reverseStrOfNumber);
  }
