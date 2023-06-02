function solution(numbers) {
   let arr = numbers;  
   let reverseA =  arr.sort(function(a, b){
        return b- a;
    });
    let max = arr.slice(0, 2)
      return  max[0]*max[1];
  
}