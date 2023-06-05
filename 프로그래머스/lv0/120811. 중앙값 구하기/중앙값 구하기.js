function solution(array) {
array.sort((a, b) => a - b);
let answer = Math.floor(array.length/2);
    return array[answer];
    
}
