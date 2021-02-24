{
    let myArr = [0, 12, 15, 26, 32, 35];
    let otherArr = [2, 1, 4, 5, 0];
    let output = 0;
    for (const num of myArr) {
        output += num / myArr.length;
    }
    let max = myArr.reduce((acc, c) => Math.max(acc, c));

    let number = myArr.reduce((acc, c) => acc + c, 0);
    let average = myArr.reduce((acc, c, i, a) => acc + c / a.length, 0);
    console.log(max);
    console.log(output);
    console.log(average);

    console.log(number / myArr.length);
    console.log(number);
    console.log(myArr);
    let nameArr = ['pesho', 'Pesho', 'asho', 'mesho'];
    let toSliceArr = ['banan', 'manan', 'krastavica', 'pica', 'domat'];

    let banana = toSliceArr.slice(0, 1);

    nameArr.sort((a, b) => a.localeCompare(b));

    myArr.sort((n, n2) => n.valueOf() - n2.valueOf());

}