(() => {
    //Transform Methods
    //Filter method is used to make new arrays out of data that 
    //Passes the "test" or rather the constraints of what 
    //We are looking for
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

    //filter
    //create a new array containing only the even numbers
    let result = set3.filter((val) => {
        return val % 2 === 0;
    });
    console.log (result);

    //above is an arrow function and bellow is a shorthand arrow function

    //create a new array containing only the exam
    //score records for people who scored 95 or higher
    result = examScores.filter(scoreRecord => scoreRecord.result > 95);
    console.log(result);
})();