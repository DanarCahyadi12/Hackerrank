
function jumpingOnClouds(c) {
    // Write your code here
    // Write your code here
    let m = 0
    for(let i = 0 ; i < c.length-1; ){
        if(c[i+2] == 0 && c[i+1] == 0){
            i+=2
            m++
            
        }else{
            
            if(c[i+1] == 1){
                i+=2
                m++
            }else{
                i++
                m++
            }
            
        }
    }

    return m

}
