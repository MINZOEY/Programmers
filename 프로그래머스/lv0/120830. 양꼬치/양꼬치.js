function solution(n, k) {
    var answer = 0;
    let nw = 12000;
    let kw = 2000;
    answer = (n*nw) + (k*kw) - ((Math.floor(n/10))*kw);
    return answer;
}