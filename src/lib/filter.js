/**
 * prepend all items in input with prepend string
 */
exports.prepend = function(input, prepend, callback) {

    // test if input is an array, if not just prepend the single string
    if (input instanceof Array) {
        var result = [];
        for (var i in input){
            result.push(prepend + input[i]);
        }
    } else {
        var result = prepend + input;
    }

    callback(result);
};
