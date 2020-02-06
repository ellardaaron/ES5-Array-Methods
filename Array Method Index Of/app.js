(() => {
    //Search Methods
    let friends = ['James', 'Jason', 'Jacqueline', 'Jack', 'Josie'];
    let responseTimes = [0.7, 12.3, 4.5, 7, 10, 11.17, 12.3, 14];

    //indexOf: what is the index of 'Jack' in the friends array?
    //What about Jim?

    let answer = friends.indexOf('Jack');
    console.log(answer);
    
    answer = friends.indexOf('Jim');
    console.log(answer);
    //Because Jim is not in the array the console displays -1
})();