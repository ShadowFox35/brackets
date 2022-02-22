module.exports = function check(str, bracketsConfig) {
  let arr = [];
    for(let i = 0; i < str.length; i++){
      let test = bracketsConfig.find(elem => elem.includes(str[i]));
      if(str[i] == test[1] && (test[0] == arr[arr.length - 1])) arr.pop();
      else arr.push(str[i]);
    }
    return !arr.length;
}
