const accountId=144553
let accountEmail="aloktripathy@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;

// accountId=2//not allowed
accountEmail="hc@hc.com"
accountPassword="21221111"
accountCity="bengaluru"
/*
prefer not to use  var beacuse of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
