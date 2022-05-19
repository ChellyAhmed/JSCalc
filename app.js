
function charWrite(btn){
    
    console.log(btn.innerHTML);
    displayed = document.getElementById("display").innerHTML;
    (displayed == 0 )&& (displayed = "") ;
    displayed = displayed.concat(btn.innerHTML);
    document.getElementById("display").innerHTML = displayed;
}

function allClear(){
    document.getElementById("display").innerHTML = 0;

}