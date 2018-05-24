// http://jsonapi.org/format/
var recipeData = 

{
 "ingredients" : [
    {
        sort: "1",
        amount: "1/2 cup",
        ingredient: "bittersweet chocolate chips"
    },
    {
        sort: "2",
        amount: "6 tablespoons",
        ingredient: "heavy whipping cream, divided"
    },
    
    {
        sort: "3",
        amount: "3/4 cup",
        ingredient: "mascarpone cheese"
    },
    
    {
        sort: "4",
        amount: "3 tablespoons",
        ingredient: "amaretto"
    },
    
    {
        sort: "5",
        amount: "8 1/2 inch-thick",
        ingredient: "angel food cake slices"
    },
    
    {
        sort: "6",
        amount: "2 tablespoons",
        ingredient: "sugar"
    },
    
    {
        sort: "7",
        amount: "24",
        ingredient : "diagonal banana slices (from about 3 bananas)"
    },
    
    {
        sort: "8",
        amount: "1/3 cup",
        ingredient: "sliced almonds, toasted"
    }    
]};
    


function getingredient(obj){
    for (let index = 0; index < obj.length; index++) {
        
        console.log(obj[index].ingredient);        
    }
}