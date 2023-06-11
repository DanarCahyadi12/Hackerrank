function superReducedString(s) {
    // Write your code here
    let spl = s.split('')
    let l = 1

    for(let i = 0 ; i < spl.length;){
        let j = i
        while(j < spl.length){
            j++
            if(spl[i] == spl[j]){
                l++
                spl.splice(i,l)
                i = 0
                l = 1
                break
            }  else {
                i++
                break
            } 
        }
    }
   if(spl.length == 0) return "Empty String"
   return spl.join('')

}
