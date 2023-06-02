function solution(n) {
    var answer = 0;
    for(let i = 0; i<n+1; i=i+1){
       if (i%2=== 0){
           console.log(i)
           answer=answer+i;
           console.log(answer)
       }
    }
    return answer;
}