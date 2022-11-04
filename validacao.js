function CodelandUsernameValidation(str) { 

  return /^[A-Za-z]{1}[A-Za-z0-9_]{2,25}[A-Za-z0-9]{1}$/.test(str).toString()
  return str; 

}
   
console.log(CodelandUsernameValidation(readline()));