function arrange(){
    var str1=document.getElementById("str1").value;
    var res=str1.split("").sort().join("");

    document.getElementById("result").value=res;
}
