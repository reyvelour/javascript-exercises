const removeFromArray = function(cats, ...args) {
   let dogs = [];
   
    for (cat of cats) {
        if (!args.includes(cat)) {
            dogs.push(cat)
        } 
    } return dogs;
};

// [3,4,5,1], [1,2]

// Do not edit below this line
module.exports = removeFromArray;
