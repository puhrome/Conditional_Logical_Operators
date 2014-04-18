/**
 * Logical Operators Created by Phirom Yim on 4/17/14.
 */
//compare 2 true or false values
//only compare pairs
//in between booleans or in between comparisions

//and &&
// requires both pair to be true
var budget = 300;
var iPhone = 199.99;
// var paycheck = 200;
var wonLottery = true;
//&& requires both conditions be true
if(iPhone < budget && paycheck > 300){
    console.log("Buy Phone!!!")
}else{
    console.log("No phone for you!")
}
//or ||
//use boolean for || use strict equal ===
if(iPhone < budget || wonLottery === true){
    console.log("Buy Phone!!!")
}else{
    console.log("No phone for you!")


//exclusive or xor ^

//not !