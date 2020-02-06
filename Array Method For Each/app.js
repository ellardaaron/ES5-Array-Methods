(() => {
    //Iteration Methods
    let set1 = [2, 7, 8, 12, 14];
    let set2 = [14, 52, 56, 24];
    let orders = [
        {
            total: 21.12,
            method: 'cash'
        },
        {
            total: 14.11,
            method: 'card'
        },
        {
            total: 16.15,
            method: 'card'
        }
    ];

    //For Each
    // Print out the details for every order
    orders.forEach((val) => {
        console.log(val);
    });

    //Or you can use shorthand:
    orders.forEach(order => console.log(order));
})();