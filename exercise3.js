function concatArrays(...arrays) {
    let joinArrays = [];
    for (i of arrays){
        joinArrays = joinArrays.concat(i);
    }

    console.log(joinArrays);
}

concatArrays([1,2 ,3], [4, 5, 6], [7, 8, 9]);

////////////////////////////////////////////////////////////////
