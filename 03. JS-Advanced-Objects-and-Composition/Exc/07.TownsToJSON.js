
function parseTownsToJSON(towns) {
    let townsArr = [];
    for (let town of towns.slice(1)) {
        let [empty,townName, lat, lng] =
            town.split(/\s*\|\s*/);
        let townObj = { Town: townName, Latitude:
                Number( Number(lat).toFixed(2)), Longitude:Number( Number(lng).toFixed(2))};
        townsArr.push(townObj);
    }
    return JSON.stringify(townsArr);
}

console.log(parseTownsToJSON(
    ['| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |']
));
//expected output -
// [{"Town":"Sofia",
//   "Latitude":42.7,
//   "Longitude":23.32
// },
// {"Town":"Beijing",
//  "Latitude":39.91,
//  "Longitude":116.36
// }]