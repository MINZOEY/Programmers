function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let ja = (denom1 * numer2) + (denom2 * numer1);
    let mo = denom1 * denom2;
    
    let minNumber;
    if(ja < mo){
        minNumber = ja;
    }else{
        minNumber = mo;
    }
    //나누어 떨어지는 것이 나머지가 0인것
    while(true){
        if(ja % minNumber === 0){
            if(mo % minNumber === 0){
                return[ja/minNumber, mo/minNumber]
            }
        }
        minNumber = minNumber - 1;
    }
}

//먼저 분모덧셈
//2. 분자분모의 최대공약수로 나누기
//2-1 분자분모중 작은수 찾기
//2-2 작은수로 분자분모로 나눠보기
//2-2-1 둘다 나눠지면 그 수가 최대 공약수
//2-2-2 안 나누워 떨어지면 -1해서 작은수로 줄이고 다시 2-2반복