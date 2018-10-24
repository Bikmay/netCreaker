
function preText() {
    console.log('ti');
    let t = document.getElementById("search1");
    console.log(t);
    if(t.innerText === ""){
        console.log('lol');
        t.value='blyat';
        t.style.color='#cbcbcb';
    }

}