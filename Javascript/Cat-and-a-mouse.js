// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    let a = x
   let b = y
   let r = null
if( b > z && a <z) {
   for(let i =1; i <=z;i++){
       if(b == z && a ==z){
           r = "Mouse C"
           break
       }
       if(b == z){
            r = 'Cat B'
            break
       }
        if(a== z){
           r = "Cat A"
           break
       }
       b--
       a++

   }
}else if( a<= z&& b <= z){
   for(let i=1; i <= z; i++){
       if( a == z && b ==z){
           r = "Mouse C"
           break
       }
       if(a == z) {
           r  = 'Cat A'
           break
       }
       if(b == z) {
           r  = 'Cat B'
           break
       }
       a++
       b++
   }
}else if( a > z && b <z) {
   for(let i =1; i <=z;i++){
       if(b == z && a ==z){
           r = "Mouse C"
           break
       }
       if(b == z){
            r = 'Cat B'
            break
       }
        if(a== z){
           r = "Cat A"
           break
       }
       a--
       b++

   }
}else{
   for(let i =1; i <=i;i++){
       if(b == z && a ==z){
           r = "Mouse C"
           break
       }
       if(b == z){
            r = 'Cat B'
            break
       }
        if(a== z){
           r = "Cat A"
           break
       }
       a--
       b--

   }
}
   
   return r

}