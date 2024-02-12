const msg = [
    "please",
    "is that your last world?",
    "say yes please",
    "I beg you",
    "you have no heart",
    "You are breaking my heart"
];
const image = [
    // "/images/93iuffshbit21.jpg",
    "/images/e76d0010df219e6697e91cae634c356c.jpg",
    "/images/e7f.jpg",
    "/images/crying_cat.jpg",
    "/images/kitten-000017380158_Smaller.jpg",
    "/images/OIP.1FjCq9vfJ1XI26zJil3VngAAAA.jpeg"
];

let x=0;

    const img = document.createElement('img');
    const p = document.createElement('p');
    const boxKely = document.querySelector(".box-kely");

function sayingNo(){
    for(let i=0;i<x;i++){
        img.src= image[i];
        p.innerText= msg[i];
    }
    document.querySelector(".box-kely").appendChild(img);
    document.querySelector(".box-kely").appendChild(p);    
}

function sayingYes(){
        img.src = "/images/happy-cat.jpg";
        p.innerText="Owh cute, I love you";

    document.querySelector(".box-kely").appendChild(img);
    document.querySelector(".box-kely").appendChild(p);    
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

            }
    })
})
