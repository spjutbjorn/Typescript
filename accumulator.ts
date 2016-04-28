 function makeAccumulator() {
    var sum = 0;
    return {
        clear: function () {sum = 0; },
        add: function (value: number) { sum += value; },
        result: function (){ return sum; }
    };
}

