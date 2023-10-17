function Addition () {
    var a= document.getElementById("t1").value;
    var b= document.getElementById("t2").value;
    var c= Number(a)+ Number(b);
    t3.value = c;
}
function soustraction () {
    var a= document.getElementById("t1").value;
    var b= document.getElementById("t2").value;
    var c= Number(a)- Number(b);
    t3.value = c;
}
function division () {
    var a= document.getElementById("t1").value;
    var b= document.getElementById("t2").value;
    var c= Number(a)/ Number(b);
    t3.value = c;
}

function multiplication () {
    var a= document.getElementById("t1").value;
    var b= document.getElementById("t2").value;
    var c= Number(a)* Number(b);
    t3.value = c;
}

function permute(){
    var a =document.getElementById("t1").value;
    var b =document.getElementById("t2").value;
    var c =document.getElementById("t1").value;
    document.getElementById("t1").value=b;
    document.getElementById("t2").value= c;
}


function parite(){
    var v;
    v = Number(document.getElementById("t3").value);
    if (v%2==0)
    t4.value = ("Pair")
else
t4.value = ("Impair")
}
