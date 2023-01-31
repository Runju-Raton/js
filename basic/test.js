user_status='1';
user_id='101';

value=user_status+''+user_id;
// console.log(value)
us_status = value[0];
us_id = value.slice(1)

console.log("User status: "+us_status)
console.log("User id: "+us_id)