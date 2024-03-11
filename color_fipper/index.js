const btn = document.getElementById("btn");
const bob = document.getElementById("box");
const txt = document.getElementById("txt");
const hel = document.getElementById("hel");

function create_col(){
    var str = "#";
    const hex = [0,1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F"];
    for(var i=0;i<6;i++){
        var number = Math.floor(Math.random() * hex.length);
        str +=hex[number];
    }
    return str;
}

btn.addEventListener("click",function(){
    let hexcol = create_col();
    document.getElementById("main").style.backgroundColor =hexcol;
    bob.style.backgroundColor = hexcol;
    hel.style.color = hexcol;
    txt.innerHTML = hexcol;
});