{
    function solve(heroesArr) {
        let result = [];
        for (const heroesArrElement of heroesArr) {
            let [name, level, items] = heroesArrElement.split(' / ');
            level = Number(level);
            items = items ? items.split(', ') : [];
            result.push({name, level, items});
        }
        return JSON.stringify(result);
    }

    console.log(solve(['Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara']
    ));
}
//expected output - [
// {"name":"Isacc","level":25,"items":["Apple","GravityGun"]},
// {"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},
// {"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}
// ]