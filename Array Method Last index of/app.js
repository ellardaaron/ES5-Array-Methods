(() => {
    //Search Methods
    let friends = ['James', 'Jason', 'Jacqueline', 'Jack', 'Josie'];
    let responseTimes = [0.7, 12.3, 4.5, 7, 10, 11.17, 12.3, 14];

    //lastIndexOf: what is the index of 12.3 in responseTimes?
    //Last index of 12.3?
    //lastIndexOf displays the array position the last time something appears in the array
    let answer = responseTimes.indexOf(12.3);
    console.log(answer);
    answer = responseTimes.lastIndexOf(12.3);
    console.log(answer);
})();