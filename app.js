const len_section=document.getElementsByClassName("section").length;
for(i=1;i<len_section+1;i++){
    let val="#section"+i;
    let sel=document.querySelector(val);
    let selvel=sel.textContent;
    let eel=document.createElement('LI');
    eel.setAttribute('id',val+"li");
    eel.textContent=selvel;
    let vel=document.getElementById("list");
    eel.style.color="white";
    vel.appendChild(eel);

}
let get_class=document.getElementById("list");
get_class.addEventListener('click',function(event){
    let attr=event.target.getAttributeNode("id").value;
    const scro=attr.slice(0,9);
    const attr1=document.querySelector(scro);
    attr1.scrollIntoView({behavior:'smooth'});
    }

);
function checkIfSectionInView() {
    let isInViewport = function(elem) {
        let bounding = elem.getBoundingClientRect();
        return (
        bounding.top <= 100 &&
        bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    for (i = 1; i < len_section + 1; i++) {
    let sectionInFullView = document.getElementById("section" + i);
    window.addEventListener("scroll",function(event) {
        if (isInViewport(sectionInFullView)) {
        sectionInFullView.classList.add("your-active-class");
        sectionInFullView.style.backgroundColor="black";
        } else {
        sectionInFullView.classList.remove("your-active-class");
        sectionInFullView.style.backgroundColor="Transparent";
        }
        },
        false
        );
        }
        }
const func=()=>{
    const scrolling = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrolling>0){
        window.scrollTo({top:0,left:0,behavior:'smooth'});
    }
}
function btn_add(){
    for(i=1;i<len_section+1;i++){
        let section_btn=document.getElementById('section'+i);
        let add_btn=document.createElement('SPAN');
        add_btn.textContent="Return to top";
        add_btn.style.color="white";
        add_btn.style.fontSize="20px";
        add_btn.style.paddingLeft="40px";
        section_btn.appendChild(add_btn);
        add_btn.onclick=func;
    }
}
checkIfSectionInView();
btn_add();