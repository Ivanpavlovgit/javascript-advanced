function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);
    let input = document.querySelector('#inputs>textarea');
    const outputRestaurant = document.querySelector('#bestRestaurant>p');
    const outputWorkers = document.querySelector('#workers>p');

    function onClick() {
        const arr = JSON.parse(input.value);
        let restaurants = [];
        arr.forEach((line) => {
            const tokens = line.split(' - ');
            const name = tokens[0];
            const workersArr = tokens[1].split(', ');
            let workers = [];

            for (let workerInfo of workersArr) {
                const workerTokens = workerInfo.split(' ');
                const salary = Number(workerTokens[1]);
                workers.push({
                    name: workerTokens[0],
                    salary
                })
            }
            if (restaurants[name]) {
                workers = workers.concat(restaurants[name].workers);
            }
            workers.sort((w1, w2) => w2.salary - w1.salary);

            const bestSalary = workers[0].salary;
            const averageSalary = workers.reduce((sum, currWorker) => sum + currWorker.salary, 0) / workers.length;
            restaurants[name] = {
                workers, averageSalary, bestSalary
            }
        });


        let bestRestaurantSalary = 0;
        let bestRestaurant;
        for (const name in restaurants) {
            if (restaurants[name].averageSalary > bestRestaurantSalary) {
                bestRestaurant = {
                    name,
                    workers: restaurants[name].workers,
                    bestSalary: restaurants[name].bestSalary,
                    averageSalary: restaurants[name].averageSalary
                }
                bestRestaurantSalary = restaurants[name].bestSalary;
            }
        }
        outputRestaurant.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurantSalary.toFixed(2)}`

        let workersResult = [];
        bestRestaurant.workers.forEach(worker =>{workersResult.push( `Name: ${worker.name} With Salary: ${worker.salary}`)});
        outputWorkers.textContent = workersResult.join(' ');
    }
}