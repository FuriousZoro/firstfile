

function getdata() {
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;

    var show = document.getElementById("show").innerHTML = name + lastname + email;



}

function nmb() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;

    if (number1 > number2) {
        document.getElementById('greater').innerHTML = number1;
    }
    if (number2 > number1) {
        document.getElementById('greater').innerHTML = number2;
    }
}


function add() {
    let a = parseInt(document.getElementById("number1").value);
    let b = parseInt(document.getElementById("number2").value);
    let c = a + b;

    document.getElementById("see").innerHTML = c;
}




function go(){
    let

    let m1= parseInt(document.getElementById(m1).value);
    let m2= parseInt(document.getElementById(m2).value);
    let m3= parseInt(document.getElementById(m3).value);
    let m= m1 + m2 + m3 ;
    let p= m * 100 / 300;
    
    document.getElementById("t1").innerHTML=m;
   

   
}