/*
 */
exports.prepend = function(input, prepend, callback) {

    var items = [];
    // ensure that input is an array, if not treat it as a single element array
    if (!input instanceof Array) {
        input = [input];
    }

    try {
        for (var i in input){
            items.push(prepend + input[i]);
        }
    } catch (e){
        console.log(e);
    }
    callback(items);
};
