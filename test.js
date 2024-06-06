// function go() {
//     let m1 = parseInt(document.getElementById("m1").value);
//     let m2 = parseInt(document.getElementById("m2").value);
//     let m3 = parseInt(document.getElementById("m3").value);
//     let m11 = parseInt(document.getElementById("m11").value);
//     let m22 = parseInt(document.getElementById("m22").value);
//     let m33 = parseInt(document.getElementById("m33").value);
//     let m111 = parseInt(document.getElementById("m111").value);
//     let m222 = parseInt(document.getElementById("m222").value);
//     let m333 = parseInt(document.getElementById("m333").value);
//     let m = m1 + m2 + m3;
//     let mm = m11 + m22 + m33;
//     let mmm = m111 + m222 + m333;

//     document.getElementById("t1").innerHTML = m;
//     document.getElementById("tt1").innerHTML = mm;
//     document.getElementById("ttt1").innerHTML = mmm;



//     let p = (m / 300) * 100;
//     let pp = (mm / 300) * 100;
//     let ppp = (mmm / 300) * 100;

//     document.getElementById("p1").innerHTML = p + "%";
//     document.getElementById("pp1").innerHTML = pp + "%";
//     document.getElementById("ppp1").innerHTML = ppp + "%";

//     if (p > "80") {
//         document.getElementById("d1").innerHTML = "1st division"
//     } if (pp > "80") {
//         document.getElementById("d2").innerHTML = "1st division"
//     } if (ppp > "80") {
//         document.getElementById("d3").innerHTML = "1st division"
//     }
//     if ("80" < p > "60") {
//         document.getElementById("d1").innerHTML = "2nd division"
//     } if ("80" < pp > "60") {
//         document.getElementById("d2").innerHTML = "2nd division"
//     } if ("80" < ppp > "60") {
//         document.getElementById("d3").innerHTML = "2nd division"
//     } if ("60" > p) {
//         document.getElementById("d1").innerHTML = "Fail"
//     } if ("60" > pp) {
//         document.getElementById("d2").innerHTML = "Fail"
//     } if ("60" > ppp) {
//         document.getElementById("d3").innerHTML = "Fail"
//     }

//     document.getElementById("u1").innerHTML=()




// }
function table2() {
    let a = parseInt(document.getElementById("table").value);
    tab = "<ol >";

    for (let i = 1; i < 11; i++) {
        let b = (a * i);
        tab += "<li> " + b + "</li>";
    }

    tab += "</ol>";
    document.getElementById("table1").innerHTML = tab;
}

const students = [
    {

        id: 1,
        rollnumber: 21,
        age: 55,
        name: 'sagar',
        course: 'comp',

        city: 'kangra'
    },
    {

        id: 1,
        rollnumber: 21,
        age: 55,
        name: 'sagar',
        course: 'comp',

        city: 'dharamshala'
    },
    {

        id: 1,
        rollnumber: 21,
        age: 55,
        Name: 'sagar',
        course: 'comp',

        city: 'dharamshala'
    },
    {

        id: 1,
        rollnumber: 21,
        age: 55,
        name: 'sagar',
        course: 'comp',

        city: 'solan'
    }

]

function pop() {
    document.getElementById('form').style.display = 'block';

}
function hide() {
    document.getElementById('form').style.display = 'none';
}

function hidenav() {
    document.getElementById('nav').style.width = '0px';
    document.getElementById('nav').style.transition = '0.5s';
}
function shownav() {
    document.getElementById('nav').style.width = '250px';
}
