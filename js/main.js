var ingredients = {
    1: {
        amount: "1/2",
        amountDesc: "cup",
        food: "bittersweet chocolate chips"
    },
    2 : {
        amount: "6",
        amountDesc: "tablespoons",
        food: "heavy whipping cream, divided"
    },
    
    3: {
        amount: "3/4",
        amountDesc: "cup",
        food: "mascarpone cheese"
    },
    
    4: {
        amount: "3",
        amountDesc: "tablespoons",
        food: "amaretto"
    },
    
    5: {
        amount: "8 1/2",
        amountDesc: "inch-thick",
        food: "angel food cake slices"
    },
    
    6: {
        amount: "2",
        amountDesc: "tablespoons",
        food: "sugar"
    },
    
    7: {
        amount: "24 1/3",
        amountDesc: "inch-thick",
        food : "diagonal banana slices (from about 3 bananas)"
    },
    
    8: {
        amount: "1/3",
        amountDesc: "cup",
        food: "sliced almonds, toasted"
    }    
    
};

function getFood(obj){
    for (let index = 0; index < obj.length; index++) {
        
        console.log(obj[index].food);        
    }
}