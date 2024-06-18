function applyMode(mode){
    let icon;
if(mode==="light") {
        icon="🌞";
}else{
    icon="🌚";
}
document.querySelector("#toggle").textContent=icon
document.body.classList=mode
}

function handleModeToggle(){
    const mode=localStorage.getItem("mode") ||"dark"
    let nextMode;
    if(mode==="light"){
        nextMode="dark"
    }else{
        nextMode="light"
    }
    applyMode(nextMode)
    localStorage.setItem("mode",nextMode)
}






document.querySelector("#toggle").addEventListener("click",handleModeToggle)