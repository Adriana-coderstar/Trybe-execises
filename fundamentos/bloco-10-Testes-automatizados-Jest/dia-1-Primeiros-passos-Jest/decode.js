const decode = (phrases2) => 
    phrases2
    .replace(/1/g,'a')
    .replace(/2/g,'e')
    .replace(/3/g,'i')
    .replace(/4/g,'o')
    .replace(/5/g,'u')


// console.log(decode('123'));
// console.log(decode('1n1'));


module.exports = decode;

