
function staircase(n) {
    // Write your code here
    let output= ''
    for(let i =1; i <= n; i++){
        for(let j = n; j > i; j--){
            output += ' '
        }
        for(let k = 1; k <= i; k++){
            output += '#'
        }
        if(i < n){
        output+='\n'
        }
    }
console.log(output)
}
