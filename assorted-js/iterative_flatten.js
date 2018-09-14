var input = [1, {a: 2}, [3], [[4, 5], 6], 7];
function flatten(input) {
    var i, placeHolder = [input], lastIndex = [-1], out = [];
    while (placeHolder.length) {
        input = placeHolder.pop();
        i = lastIndex.pop() + 1;
        for (; i < input.length; ++i) {
            if (Array.isArray(input[i])) {
                placeHolder.push(input);
                lastIndex.push(i);
                input = input[i];
                i = -1;
            } else out.push(input[i]);
        }
    }
    return out;
}
flatten(input);