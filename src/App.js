// create a constant
const youtuber = 'thapa technical';
// export 
export default youtuber;    //exported as an object
const favprog = 'React js';

// default can only be assigned to one

function myName(){
    let name = 'vinod';
    return name;
}

function myNames(){
    let names = 'vinod thapa';
    return names;
}

export {favprog, myName, myNames};   //export as variables