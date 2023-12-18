function SignInmodel() {
    document.getElementById('inmodal').style.display = "block";
}

function SignUPmodel() {
    document.getElementById('upmodal').style.display = "block";
}
function pen() {
    document.getElementById('pen').style.display = "block";
}
function close()  {

     document.getElementById('upmodal').style.display="none";
     document.getElementById('inmodal').style.display="none";
     document.getElementById('pen').style.display="none";

}

document.getElementById("lol").addEventListener('click',close);
document.getElementById("lo").addEventListener('click',close);
document.getElementById("pen1").addEventListener('click',close);

