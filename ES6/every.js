// Every item must fill condidtion
var age = [18,20,25,30,35];
var result = age.every(function(age){
    return age>18;
})
console.log(result)
console.log("======Object======");

var myArray =[{
    name: "Runju Raton",
    hasBike: true
},
{
    name: "Tasnim",
    hasCar: true
}];

var result2 = myArray.every(function(element){
    return element.hasRickshaw; //false
    // return element.hasBike; //true
});
console.log(result2)



