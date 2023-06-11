function libraryFine(d1, m1, y1, d2, m2, y2) {
    // Write your code here
        let returned = [d1,m1,y1]
    let due = [d2,m2,y2]
    let fine = 0
    for(let i = 0; i < returned.length;i++){
        if(returned[i] < due[i]){
            fine = 0
        }
    }
    if(returned[0] > due[0] && returned[1] == due[1] && returned[2] === due[2]) fine = 15 * (returned[0] - due[0])
    if(returned[1] > due[1] && returned[2] == due[2])  fine  = 500 *  (returned[1] - due[1])
    if(returned[2] > due[2]) fine = 10000

    return fine

}