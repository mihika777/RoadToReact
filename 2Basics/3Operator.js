// + - * / %
var num1 = 7;
var num2 = 6;

console.log(num1 + num2);

var answer = num1 > num2;

console.log(answer);


//D = (L-S)/L *100

//a + ((b*c) /d) *e 

var sellingPrice = 199;
var listingPrice = 799;


var discountPercent = ((  listingPrice   - sellingPrice) / listingPrice ) * 100 ;

console.log("Discount percentage is :" + discountPercent);

displayDiscountPercentage = Math.round(discountPercent); // Library 

console.log(displayDiscountPercentage + "% off");

var result = listingPrice > sellingPrice;

console.log(result);

console.log(typeof result); // typeof prints the DATA TYPE OF RESULT(can gifure out the datatype,which u r hodli), nt the value 

