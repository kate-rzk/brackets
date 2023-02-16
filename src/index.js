module.exports = 
function check(str, bracketsConfig) {
  // '()', [['(', ')']] => true
  console.log('call with=' + str)
  if (str == null) return false;
  console.log('extract el')
  let el = str[0];
  console.log(el);
  let secondEl = bracketsConfig.find(item => item[0] == el);
  console.log(secondEl);
  if (secondEl == null) return false;
  let secondElIndex = str.lastIndexOf(secondEl[1]);
  console.log('lastIndex=' + secondElIndex)
  if (secondElIndex < 0) return false;
  
  let firstPart = str.slice(1, secondElIndex);
  console.log('1st:' + firstPart)
  if (firstPart != '') {
    console.log('sss')
    let firstResult = check(firstPart, bracketsConfig);
    if (firstResult == false) return false;
  }


  let secondPart = str.slice(secondElIndex + 1, str.length);
  if (secondPart != '') {
  return check(secondPart, bracketsConfig);
  } else return true;
}

// console.log(check('([])ef', 
// [
//  ['(', ')'], // bracketsConfig[0]
//  ['e', 'f']  // bracketsConfig[1]
// ]))
// console.log(check('((()))()',  [['(', ')']]))