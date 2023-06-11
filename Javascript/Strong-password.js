
function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
  let l = 0
  let numbers = "0123456789"
  let  lower_case = "abcdefghijklmnopqrstuvwxyz"
  let  upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let  special_characters = "!@#$%^&*()-+"
  let pas = password
    if(password.length < 6){
        if(!pas.match(/[A-Z]/g)){
            l++
            pas+=upper_case[Math.floor(Math.random()* 0 ) + upper_case.length-1]
        }
        if(!pas.match(/[a-z]/g)){
            l++
            pas+=lower_case[Math.floor(Math.random()* 0 ) + lower_case.length-1]
        } 
        if(!pas.match(/[0-9]/g)){
            l++
            pas+=numbers[Math.floor(Math.random()* 0 ) + numbers.length-1]
        } 
        if(!pas.match(/[!@#$%^&*()-+]/g)){
            l++
            pas+=special_characters[Math.floor(Math.random()* 0 ) + special_characters.length-1]
        } 
        if(pas.length < 6){
            for(let i = 1 ; i <= 6-pas.length;i++){
                l++
            }
        }
    }else{
        if(!pas.match(/[A-Z]/g)) l++
        if(!pas.match(/[a-z]/g)) l++
        if(!pas.match(/[0-9]/g)) l++
        if(!pas.match(/[!@#$%^&*()+-]/g)) l++
    }
return l
}
