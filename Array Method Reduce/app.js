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
    
    //reduce
    //compute the sum of the values in set3.
    let answer = set3.reduce((acc, val) => {
        return acc + val;
    });
    // if you want the accumulator to start at a different
    //position then put the number between the } and )
    console.log(answer);
    //compute the sum of the values in set 4
    answer = set4.reduce((acc,val) => acc + val);
    console.log(answer);

    //compute the product of all the values in set 3
    answer = set3.reduce((acc,val) => acc *val);
    console.log(answer);
    //compute the product of all the values in set 4
    answer = set4.reduce((acc, val) => {
        return acc * val;
    });
    console.log(answer);
   
    //compute the average of all the values in set3
    answer = set3.reduce((acc,val,i,arr) => {
        acc += val;
        if (i < arr.length - 1) { //the last item in a array is arr.length -1 so as long as the index is less than that it will execute what is bellow
            return acc;
        } else{ //this means we are on the last because of the original if statement
            return acc / arr.length;
        }
    });
    console.log(answer);
})();