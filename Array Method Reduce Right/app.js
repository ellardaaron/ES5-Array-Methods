(() => {
    //Transform Methods

    let set3 = [12, 17, 22, 29, 31];
    let set4 = [1, 2, 3, 4];
    let examScores = [
        {
            name: 'John',
            result: 99
        },
        {
            name: 'Josie',
            result: 100
        },
        {
            name: 'James',
            result: 92
        }
    ];
    // reduceRight
    //compute the result of subtracting values in set 4, starting from the the right going to the left
    let answer = set4.reduceRight((acc, val) => {
        return acc - val;
    });
    console.log(answer);
    // compute the result of subtracting values in set4 from the right.


})();