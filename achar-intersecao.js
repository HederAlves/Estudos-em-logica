function FindIntersection(strArr) { 

  let arrPrimeiro = strArr[0].split(", ");
  let arrSegundo = strArr[1].split(", ");
  
  let result = [];
  
  for(let i = 0; i < arrPrimeiro.length; i++) {
    if(arrSegundo.indexOf(arrPrimeiro[i]) !== -1) {
      result.push(arrPrimeiro[i]);
    }
  }
  
  result = result.length > 0 ? result.join() : false;

  return result; 
