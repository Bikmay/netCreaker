
function preText() {

    let t = document.getElementById("search1");


    if(t.value === ""){
        console.log('null');
        t.value='Например, Петров';
        t.style.color='#cbcbcb';
    }

}

function clear_input() {


    let t = document.getElementById("search1");

    console.log('2');
    t.style.color='black';
    t.value='';
}


function preText1() {

    let t = document.getElementById("search2");


    if(t.value === ""){
        console.log('null');
        t.value='Например, Баширов';
        t.style.color='#cbcbcb';
    }

}

function clear_input1() {
    let t = document.getElementById("search2");

    t.style.color='black';
    t.value='';
}

function script() {
    let t = document.getElementById("search1");
    let t1 = document.getElementById("search2");

    t.value='Например, Петров';
    t.style.color='#cbcbcb';

    t1.value='Например, Баширов';
    t1.style.color='#cbcbcb';

}