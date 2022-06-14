var age = [18,20,25,30,35];
var result = age.some(function(age){
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

var result2 = myArray.some(function(element){
    return element.hasRickshaw; //false
    // return element.hasBike; //true
});
console.log(result2)



