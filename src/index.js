module.exports = function check(str, bracketsConfig) {
  stringArray = str.split("");
  for (let i = 0; i < stringArray.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (
        stringArray[i] === bracketsConfig[j][0] &&
        stringArray[i + 1] === bracketsConfig[j][1]
      ) {
        stringArray.splice(i, 2);
        i -= 2;
      }
    }
  }
  return stringArray.length === 0 ? true : false
}
