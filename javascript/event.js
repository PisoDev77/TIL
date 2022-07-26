const $div = document.createElement("div");
const $span = document.createElement("span");
const $button = document.createElement("button");
const $link = document.createElement("a");

const $ul = document.createElement("ul");

const $input = document.createElement("input");
/*
        $div.innerText = "DIV";
        $span.innerText = "SPAN";
        $button.innerText = "Button";

        $link.href = "https://www.google.com";
        $link.target = "_blank";
        $link.innerText = "구글 링크";

        $div.appendChild($span);
        $span.appendChild($button);


        document.querySelector("body").appendChild($div);
    */
/*
    for(let i = 0 ;i< 20;i++){
        const $li = document.createElement("li");
        $li.innerText = `${i + 1} 번 이벤트`
        $ul.appendChild($li);

        
    }
    $ul.addEventListener("click", (event)=> {
       console.log(event.target.innerText); 
    });
    document.querySelector("body").appendChild($ul);

    */


function debounce(callback, wait){
    let timeout;

    //호출시 반환
    return function (...args){
        const context = this;

        //타이머 취소
        clearTimeout(timeout);
        timeout = setTimeout(()=>callback.apply(context, args), wait);
    };
}
    
function setHtml(){

    $input.type = "text";
    let i = 0;

    $input.addEventListener("keyup",debounce((e)=>{
       console.log(e.target.value);
    }, 500));

    document.querySelector("body").appendChild($input);
}
function init(){
    
    setHtml();

    /*
    $div.addEventListener("click", (event)=>{
        console.log("CLICK FROM $DIV")
    },{
        capture: true,
    });

    $span.addEventListener("click", (event)=>{
        console.log("CLICK FROM $span")
    },{
        capture: true,
    });

    $button.addEventListener("click", (event)=>{
        console.log("CLICK FROM $button")
    },{
        capture: true,
    });
    */
    
}


init();

