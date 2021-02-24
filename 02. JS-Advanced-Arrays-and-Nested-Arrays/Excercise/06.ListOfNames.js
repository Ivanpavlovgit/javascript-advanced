{
    function solve(names) {


        return names.sort((a, b) => a.localeCompare(b)).forEach((name) => console.log(`${names.indexOf(name) + 1}.${name}`));
    }

    solve(["John", "Bob", "Christina", "Ema"]);
}
//expected output -
// 1.Bob
// 2.Christina
// 3.Ema
// 4.John