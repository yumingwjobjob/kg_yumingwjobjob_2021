var mapping = {
    '0':'Zero',
    '1':'One',
    '2':'Two',
    '3':'Three',
    '4':'Four',
    '5':'Five',
    '6':'Six',
    '7':'Seven',
    '8':'Eight',
    '9':'Nine'
};

var inputArr = process.argv.slice(2);
var transformedArr = inputArr.map(transformToNumStr);
console.log(transformedArr.join(','));

function transformToNumStr(s) {
    var transfromedString = '';
    [...s].forEach(c => transfromedString += mapping[c]);
    return transfromedString;
}

