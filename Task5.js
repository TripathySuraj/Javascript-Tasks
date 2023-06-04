function reverse(){
    var n=parseInt(document.getElementById("num1").value);
    var rev=parseInt(0);
    while(n>0){
        var rem=parseInt(n%10);
        rev=parseInt(rev*10+rem);
        n=parseInt(n/10);
    }

    document.getElementById("result").value=rev;






}