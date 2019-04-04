function run() {

    var array = [0, 1];

    for (i = 0; i < 10; i++) {

        console.log(array[i]);
        var combined = array[0] + array[1];

        array[0] = array[1];
        array[1] = combined;
        array.push(combined);
    }
}

run();