{
    function solve(problem, delimiter) {
        return problem.join(delimiter);
    }

    console.log(solve(['One',
            'Two',
            'Three',
            'Four',
            'Five'],
        '-'
    ));
}
//expected output - One-Two-Three-Four-Five