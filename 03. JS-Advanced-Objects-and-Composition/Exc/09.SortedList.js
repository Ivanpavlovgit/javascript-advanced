{
    function solve() {
        let list = [];

        return {
            add(element) {
                list.push(element);
                this.size++;
                list.sort((a, b) => a - b);
            },
            remove(index) {
                if (index >= 0 || index < list.length) {
                    list.splice(index, 1);
                    this.size--;
                    list.sort((a, b) => a - b);
                }
            },
            get(index) {
                if (index >= 0 || index < list.length) {
                    return list[index];

                }
            },
            size: 0
        };
    }

    let listi = solve();
    console.log(typeof listi);
    listi.add(5);
    listi.add(6);
    listi.add(7);
    console.log(listi.get(1));
    listi.remove(1);
    console.log(listi.get(1));
}

//expected output - 60