function solve(area, vol, dataAsJSON) {
//parse input
// perform opps
// return arr
    const figures = JSON.parse(dataAsJSON);
    const result = [];

    for (const figure of figures) {
        const output = {
            area: area.call(figure),
            volume: vol.call(figure)
        };
        result.push(output);
    }
    return result;
}

function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}

const ex1 = `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`;
console.log(solve(area, vol, ex1));
