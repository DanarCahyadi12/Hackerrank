function diagonalDifference(arr) {
    // Write your code here
    let dLeft = 0
    let dRight = 0
    let ind = 0
  for(let i = 0; i <= arr.length-1;i++){
    for(let n = 0; n <= arr[i].length-1;n++){
        if(n === ind){
            dLeft += arr[i][n]
            break
        }
    }
    ind++
}
ind = arr[0].length-1
for(let i = 0; i <= arr.length-1;i++){
    for(let n = arr[i].length-1; n >= 0 ;n--){
        if(n === ind){
            dRight += arr[i][n]
            break
        }
    }
    ind--
}
}
