/*
 */
exports.prepend = function(input, prepend) {

    var items = [];
    try {
        // iterate over input items
        for (var i in input){
            // ensure that input is an array, if not treat it as a single element array
            items.push(prepend + input[i]);
        }
    } catch (e){
        console.log(e);
    }

    return items;
};
