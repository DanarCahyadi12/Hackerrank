
function plusMinus(arr) {
    // Write your code here
    let isNum
    let neg = []
    let pos = []
    let z  = []
    for(let i = 0 ; i < arr.length; i++){
        isNum = Math.sign(arr[i])
        if(isNum === 1){
            pos.push(arr[i])
        }else if(isNum  === -1){
            neg.push(arr[i])
        }else if(isNum === 0){
            z.push(arr[i])
        }
    }
    
    let negOut = (neg.length / arr.length).toFixed(6)
    let posOut = (pos.length / arr.length).toFixed(6)
    let zOut = (z.length / arr.length).toFixed(6)

    console.log(posOut)
    console.log(negOut)
    console.log(zOut)

}