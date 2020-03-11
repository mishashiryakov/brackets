module.exports = function check(str, bracketsConfig) {
  let left = [];
  let right = [];
  
  for (let arr of bracketsConfig) {
    left.push(arr[0]);
    right.push(arr[1]);
   }

  str = str.split('');

  
  for(let i = 0; i < str.length; i++) {
    if(str.length == 2) {
        i = 0;
        if(right.indexOf(str[i + 1]) == -1 && left.indexOf(str[i]) == -1) {
            break;
         }
        if(right.indexOf(str[i + 1]) == left.indexOf(str[i])) {
            str.splice(i, 2);
            break;
         }
      }

    if(right.indexOf(str[i + 1]) == left.indexOf(str[i])) {
      if(right.indexOf(str[i + 1]) == -1 && left.indexOf(str[i]) == -1) {
        continue;
      }
        str.splice(i , 2);
        i = 0;
        }
    }
  
  if(str.length == 0) {
      return true
    } else { return false}  

}
