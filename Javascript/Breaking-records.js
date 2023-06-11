function breakingRecords(scores) {
    // Write your code here
     let hscore = []
    let lscore = []
    let bscore = []
    let wscore = []
    let currentScore = []
    let res = []
    Array.prototype.max = function (){
        return Math.max.apply(null,this)
    }
    Array.prototype.min = function (){
        return Math.min.apply(null,this)
    }
    scores.forEach((val,i) => {
        currentScore.push(val)
        hscore.push(currentScore.max())
        lscore.push(currentScore.min())
        
    });
    for(let i = 0 ; i < hscore.length; i++){
        if((hscore[i] < hscore[i+1])){
            bscore.push(i+1)
        }
        if(lscore[i] > lscore[i+1]){
            wscore.push(i+1)
        }
        
    }
    res.push(bscore.length,wscore.length)
    return res

}