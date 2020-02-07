(() => {
    let set1 = [2, 7, 8, 12, 14];
    let set2 = [14, 52, 56, 24];
    let orders = [
        {
            total:21.12,
            method: 'cash'
        },
        {
            total:14.11,
            method: 'card'
        },
        {
            total: 16.15,
            method: 'card'
        }
    ];

    // are some values in set1 even?
    let answer = set1.some((val) => {
        if (val % 2 === 0) {
            return true;
        }
        return false;
    })
    console.log(answer);

    //a simpler way to accomplish this:

    answer = set1.some ((val) => {
        return val % 2 === 0;
    })
    console.log(answer);
    
    // are some values in set2 odd?
    answer = set2.some(val => val % 2 === 1);
    console.log(answer);
    
    // are some of the orders paid with cash?
    answer = orders.some(order => order.method === 'cash');
    console.log(answer);

})();