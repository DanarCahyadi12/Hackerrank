

function gradingStudents(grades) {
    // Write your code here
      
    let resGrade= []
    for(let i = 0; i <= grades.length-1;i++){
       
        for(let mul  = 0; mul <= mul; mul+=5){
            if(grades[i] < 38){
                resGrade.push(grades[i])
                break
            } 
            if(mul >= grades[i]){
                let check = mul - grades[i]
                if(check < 3){
                   resGrade.push(mul)
                }else if(check >= 3){
                    resGrade.push(grades[i])
                }
                break
            }
        }
    }
    
    
    return resGrade

}
