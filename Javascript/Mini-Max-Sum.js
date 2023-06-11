function miniMaxSum(arr) {
    // Write your code here
    Array.prototype.max = function() {
        return Math.max.apply(null,this)
    }
    Array.prototype.min = function() {
        return Math.min.apply(null,this)
    }
    let minMax = []
    let sum = 0
    for(let i = 0; i < arr.length; i++){ 
        for(let j = 0; j < arr.length; j++){
            if(i === j ) continue
            sum += arr[j]
            
        }
        minMax.push(sum)
        sum = 0
    }

    console.log(minMax.min()+ ' '+minMax.max())

}

let result = miniMaxSum([1 ,3,5,7,9])
