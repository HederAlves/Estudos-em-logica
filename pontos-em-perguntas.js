function QuestionsMarks(str) { 
  var arr = str.match(/[0-9]|[?]+/gi).join("");
  var nums = arr.match(/[0-9]|[?]{3,}/gi);
  for(var i = 0; i < nums.length; i++){
      if(/[?]+/.test(nums[i+1])){
         if(parseInt(nums[i]) + parseInt(nums[i+2]) === 10){
             return true;
         }
      }
  }
  return false;
}
   