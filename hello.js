/*

 ----.
 _.'__    `.
 .--(#)(##)---/#\
 .' @          /###\
 :         ,   #####
 `-..__.-' _.-\###/
 `;_:    `"'
 .'"""""`.
 /,  Irving ,\
 //  很穷!  \\
 `-._______.-'
 ___`. | .'___
 (______|______)

*/

//api: http://nodeapi.ucdok.com/api/
var fs =require('fs');
//异步
fs.readFile("hello.js",function(error,data){
 console.log("Content of file: "+ data);
 });
//同步
var data =fs.readFileSync("hello.js");
console.log("Content of file: "+ data);