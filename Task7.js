function product(){
    var n1=parseInt(document.getElementById("num1").value);
    var n2=parseInt(document.getElementById("num2").value);
    var result=n1*n2;
    document.getElementById("result").value=result;
}

function quotient(){
    var n1=parseInt(document.getElementById("num1").value);
    var n2=parseInt(document.getElementById("num2").value);
    var result=n1/n2;
    document.getElementById("result").value=result;
 }

 function sum(){
     var n1=parseInt(document.getElementById("num1").value);
     var n2=parseInt(document.getElementById("num2").value);
     var result=n1+n2;
     document.getElementById("result").value=result;
 }

 function difference(){
    var n1=parseInt(document.getElementById("num1").value);
     var n2=parseInt(document.getElementById("num2").value);
     var result=n1-n2;
     document.getElementById("result").value=result;
 }