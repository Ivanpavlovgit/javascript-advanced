function solve(piesArr, startFlavour,endFlavour) {


    return piesArr.slice(piesArr.indexOf(startFlavour),piesArr.indexOf(endFlavour)+1);
}

console.log(solve(['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));
//expected output -
// ['Key Lime Pie',
//  'Cherry Pie',
//  'Lemon Meringue Pie']