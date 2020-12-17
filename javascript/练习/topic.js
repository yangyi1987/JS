// 写一个方法去掉字符串中的空格 

function stringTrim(str) {
 return str.split("").filter(item => { 
   if(item !== " "&& item !== "") {
     return item;
   }
 }).join("")
}

