var age = [18,20,25,30,35];

var ageNew=age.filter(function(element,index){
    return element>20;
});
console.log(ageNew)
console.log(age)