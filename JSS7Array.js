//array :to store multiple values in single variables

//1-1 d
var info = [1,"ali","ali@gmail.com",6787978,true]; 

//First way too write array
//Print the whole array
document.write(info, "<br>");

//Second way too write array",
//Print the Array Index Wise
// document.write(info[0] , "<br>");
// document.write(info[1] , "<br>");
// document.write(info[2] , "<br>");
// document.write(info[3] , "<br>");
// document.write(info[4] , "<br>");

//Rewrite the Index 4 Value
// info[4] = "array class";//rewrite
// document.write(info[0] , "<br>");
// document.write(info[1] , "<br>");
// document.write(info[2] , "<br>");
// document.write(info[3] , "<br>");
// document.write(info[4] , "<br>");

//Print Length Of Array
// document.write("Length of array: " + info.length + "<br>");//array length

//Third way to print array by using for loop
// for(var o=0; o<info.length;o++)
// {
//     document.write(info[o], "<br>");
// }

//array methods
//1-pop
// info.pop();//last element delete from array
// document.write("Array Method 1 : Pop-> Last Element Delete From Array" + "<br>");
// document.write(info + "<br>");

//2-push
// info.push("todays class");//add element in last
// document.write("Array Method 2 : Push-> Add Element in the Last of Array" + "<br>");
// document.write(info + "<br>");

//3-shift
// info.shift();//Delete element from first
// document.write("Array Method 3 : Shift-> Delete Element from First index" + "<br>");
// document.write(info + "<br>");

//4-unshift
// info.unshift("Urooj");//Add Element in Array on First Index
// document.write("Array Method 4 : Unshift-> Add Element in Array on First Index" + "<br>");
// document.write(info);

//5-splice
// var info = [1,"ali","ali@gmail.com",6787978,true]; //Currently in the Array we Have this value
// info.splice(2,3,70,"kiran");//2 tells the starting index
                            // 3 tells, deleet three element from index no 2
                            // 70, "Kiran" means Add this in the Array
// document.write(info);
// After running this we have following elememt in Array: 1,ali,70,kiran

//6-Slice Method
var abc = ["Ali", "Ahmed", "Sara", "Nida", "Urroj"];
document.write("Before Slice: " + abc + "<br>");

// Slice Part 1
// var xyz = abc.slice(1,3); // It will print the array from Index 1 to Index 2, exclude the last index which is 3
// document.write("After Slice: " + xyz + "<br>");

// Slice Part 2
// var xyz = abc.slice(-3,-1); // It will print the array from Index -1 to Index -2, exclude the last index which is -3
// document.write("After Slice: " + xyz + "<br>");

// Slice Part 3
// var xyz = abc.slice(undefined,2); // As we did not define the starting index, so it will print from start till index 1, as index 2 is exluded
// document.write("After Slice: " + xyz + "<br>");


