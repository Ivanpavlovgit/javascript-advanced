{
    function solve(inputArray) {
       let result=[];

        for (let i = 0; i < inputArray.length; i+=2) {
            result[result.length]=inputArray[i];
        }
       return result.join(' ').trim();
    }
    console.log(solve(['20', '30', '40', '50', '60']));
}

