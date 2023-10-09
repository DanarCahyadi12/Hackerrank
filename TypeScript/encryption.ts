function encryption(s: string): string {
    // Write your code here
    let encrypted : string = ''

    let gridString  : string  | string[] = '' 
    const lengthString : number = s.length
    let root : number = Math.sqrt(lengthString)
    let row : number = 0
    let col : number = 0
    if(Number.isInteger(root)) {
        row = root
        col = root

    }else{
        row = Math.floor(root)
        col = row + 1
    }
    console.log("row : ",row, "col : ",col)
    if((row * col ) >= lengthString) {

        for(let i = 0; i < lengthString; i++) {
            if(i % col === 0 && i !== 0) gridString += " "
        gridString += s[i]
    }
    gridString = gridString.split(' ')
    for(let i = 0 ; i < col; i++) {
        for(let j = 0;j < row; j++ ) {
            let char =  gridString[j][i]
            if(char) encrypted += char
            
        }
        encrypted += ' '
    }
}else{
    let min = Math.min(row,col) + 1
    if(col < row) col = min
    else row = min

    for(let i = 0; i < lengthString; i++) {
        if(i % col === 0 && i !== 0) gridString += " "
        gridString += s[i]
    }
    gridString = gridString.split(' ')
    for(let i = 0 ; i < col; i++) {
        for(let j = 0;j < row; j++ ) {
            let char =  gridString[j][i]
            if(char) encrypted += char
            
        }
        encrypted += ' '
    }

}

    return encrypted

}

console.log(encryption("wclwfoznbmyycxvaxagjhtexdkwjqhlojykopldsxesbbnezqmixfpujbssrbfhlgubvfhpfliimvmnny"))

