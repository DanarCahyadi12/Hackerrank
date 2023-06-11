function birthdayCakeCandles(candles) {
    // Write your code here
    let highCandles = []
    let high = 0
        // Write your code here
        Array.prototype.max = function() {
            return Math.max.apply(null,this)
        }

       high = candles.max()
        for(let i = 0; i <= candles.length-1;i++){
        if(candles[i] >= high) {
            highCandles.push(candles[i])
        }
    }
    return highCandles.length
   

}
