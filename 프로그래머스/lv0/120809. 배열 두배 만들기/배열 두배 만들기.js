function solution(numbers) {
    var answer = [];
    for(let i=0; i<numbers.length; i=i+1){
        answer.push(numbers[i]*2);
    }
    return answer;
}