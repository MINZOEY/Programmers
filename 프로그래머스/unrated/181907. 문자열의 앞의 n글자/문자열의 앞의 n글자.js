function solution(my_string, n) {
    var answer = '';
    for(let i=0; i<n; i=i+1){
        answer+=my_string[i]
    }
    return answer;
}