function minimumDistances(a: number[]): number {
    let number : number[] = []
    for (let i = 0; i < a.length; i++) {
        for(let j =  i + 1; j < a.length; j++) { 
            if(a[i] === a[j]) {
                number.push(Math.abs(i - j))
                
            }
        }
    }

    
    let min  =  Math.min(...number)
    if(min === Infinity) return -1
    else return min



    

}


console.log(minimumDistances([7, 1, 3, 4, 1,1, 7]))