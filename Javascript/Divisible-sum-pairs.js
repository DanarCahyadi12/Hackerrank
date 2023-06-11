
function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let v = []
    const div = (a,n) =>{
        let res
        for(let i = 1; i <= a; i++){
            res = a / i
            if(res === n) break
        }
        return res
    }
    for(let i = 0 ; i < n;i++ ){
        for(let j=i; j < n;j++){
            if(j == i) continue
            if(ar[i] + ar[j] == k){
                v.push(true)
            }else{
               let  s = div(ar[i] + ar[j],k)
                s == k ? v.push(true) : ""
            }

        }
    
    }

return v.length
}