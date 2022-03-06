
function checkPalindrome(name){
  
    let lowerName = name.toLowerCase();
    let repAll = lowerName.replaceAll(' ','');
    let splitName = repAll.split('');
    let reverseName = splitName.reverse();
    let joinName = reverseName.join('')
    
  if(repAll === joinName){
    return true;
  }
  return false;
}

let isBool = checkPalindrome('Radar')
console.log(isBool);
