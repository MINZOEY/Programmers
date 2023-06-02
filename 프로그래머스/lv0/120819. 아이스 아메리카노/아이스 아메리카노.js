function solution(money) {
    let iceA = 5500;
    
    let cup = Math.floor(money / iceA);
    let changeM = money % iceA;
    let maxA =  [cup, changeM];
    
    return maxA;
  }    
