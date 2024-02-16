const msg = [
    "think again",
    "give me a chace",
    "I beg you",
    "you have no heart",
    "say yes please",
    "Pleeeeeease"
];
const image = [
    "/images/kitten-000017380158_Smaller.jpg",
    "/images/93iuffshbit21.jpg" ,
    "/images/e76d0010df219e6697e91cae634c356c.jpg",
    "/images/crying_cat.jpg",
    "/images/e7f.jpg",
    "/images/OIP.1FjCq9vfJ1XI26zJil3VngAAAA.jpeg"
];

let x=0;
let width=100;
let height=50;
let fontSize=40;

    const img = document.createElement('img');
    const p = document.createElement('p');
    const boxKely = document.querySelector(".box-kely");
    const answerBtn = document.querySelector(".answer-btn");

function sayingNo() {
    img.src = image[x];
    p.innerText = msg[x];
    if (x >= image.length-1) {
        x = 0;
    }
    
    document.querySelector(".btn.yes").style.height= `${height}px`;
    document.querySelector(".btn.yes").style.width= `${width}px`;
    document.querySelector(".btn.yes").style.fontSize= `${fontSize}px`;
    document.querySelector(".box-kely").appendChild(img);
    document.querySelector(".box-kely").appendChild(p);
     
}

function sayingYes(){
        img.src = "/images/happy-cat.jpg";
        p.innerText="Owh cute, I love you";

    width=100;
    height=50;
    fontSize=40;

    document.querySelector(".btn.yes").style.height= `${height}px`;
    document.querySelector(".btn.yes").style.width= `${width}px`;
    document.querySelector(".btn.yes").style.fontSize= `${fontSize}px`;

    document.querySelector(".box-kely").appendChild(img);
    document.querySelector(".box-kely").appendChild(p);

    answerBtn.innerHTML=" ";
    
    
}

const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(a){
        let types = a.currentTarget.classList;
            if(types.contains("yes")){
                sayingYes();

            }else if(types.contains("no")){
                sayingNo();
                x++;
                width+=80;
                height+=80;
                fontSize+=47;
            }
    })
})
