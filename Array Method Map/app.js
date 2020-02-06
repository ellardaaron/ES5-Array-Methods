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
    //map
    //create a new array with values that are double those of set 3
    let doubles = set3.map((val) =>{
        return val * 2;
    });
    console.log(doubles);

    //create a new array with values that are 10 greater than those of se4
    let add10 = set4.map(val => val + 10);
    console.log(add10);

    //create a new array with just the names of the people who took the exam
    let testTakers = examScores.map(scoreRecord => scoreRecord.name);
    console.log(testTakers);
})();