
function findDigits(n) {
    // Write your code here
      let ed = []
    let s = n.toString()
    let c = []
    for(let i = 0 ; i < s.length;i++){
        ed.push(parseInt(s[i]))
    }
    ed.forEach(val => {
        if(val !== 0 && parseInt(n.toString()) % val  == 0 ){
            c.push(val)
        }
    })
    return c.length
}
