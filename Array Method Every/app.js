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

    //every
    //Is every value in set1 even?
    let answer = set1.every((value) => {
        return value % 2 ===0;
    });
    console.log(answer);
    
    //Is every set value in set 2 even?
    answer = set2.every(val => val % 2 ===0);
    console.log(answer);

    //Was every order paid with card?
    answer = orders.every(order => order.method === 'card');
    console.log(answer);

    ///Was every order over $10?
    answer = orders.every(order => order.total > 10);
    console.log(answer);
})();