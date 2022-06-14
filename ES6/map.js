var age = [18,20,25,30,35];

var ageNew=age.map(function(element,index){
    return element*2;
});
console.log(ageNew)
console.log(age)