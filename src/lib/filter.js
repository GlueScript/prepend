/*
 */
exports.prepend = function(input, prepend) {

    var items = [];
    // ensure that input is an array, if not treat it as a single element array
    try {
        // iterate over input items
        input.foreach(function(element, index, array){
            // don't prepend string if element already begins with it
            items.push(prepend + element);
        });
    } catch (e){
        console.log(e);
    }

    return items;
};
