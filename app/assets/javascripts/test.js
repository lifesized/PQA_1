// some Jquery code

 
   
 $(document).ready(function() 
 {
   //$("table tr").text("wanker");
   $("a").click(function() {
     //alert("Hello world!");
   });
 }
 
 );
   
var timestamp = Number(new Date()); // current time as number

//alert('shit');


var months = [ //create the months
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
], d, m, y, now, date; //vars to hold date, month, year, date object and output string
now = new Date(); //new date object
d = now.getDate(); //current date
m = now.getMonth(); // current month
y = now.getFullYear(); //current year

date = months[m] + ' ' + d + ' , ' + y; //concat date parts into output string 

// document.getElementById('yourIDHere').innerHTML = out_string; //set the html of the hmtl element to the output string