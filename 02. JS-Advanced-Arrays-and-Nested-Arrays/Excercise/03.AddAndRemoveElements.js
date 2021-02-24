{
    function solve(actions) {
        let num = 1;
        let result = [];
        for (const action of actions) {
            if (action === 'add') {
                result.push(num);
            } else if (action === 'remove') {
                result.pop();
            }
            num++;
        }
        if (result.length === 0) {
            return 'Empty';
        } else {
            return result.join('\n');
        }
    }

    console.log(solve(['add',
        'add',
        'add',
        'add']
    ));
}
//expected output -
// 1
// 2
// 3
// 4