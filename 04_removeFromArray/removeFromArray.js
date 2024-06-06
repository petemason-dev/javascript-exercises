const removeFromArray = function (inputArray, ...toRemove) {
  return inputArray.filter((item) => !toRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
