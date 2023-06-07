function solution(num_list) {
    var answer = [0, 0]
    for(i=0; i < num_list.length; i++){
        if(num_list[i] % 2 === 0){
           answer[0] = answer[0]+1;
        }else{
        answer[1] = answer[1]+1;
        }
    }

    return answer;
}