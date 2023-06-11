function squares(a, b) {
    // Write your code here

    let sq = []

    for(let i=a; i <= b; i++){
        if(Number.isInteger(Math.sqrt(i))){
            sq.push(i)
        }
    }
return sq.length
}