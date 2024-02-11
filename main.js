const images = [
    '<p>please</p>'+'<img width=500px src="/images/93iuffshbit21.jpg" alt="">',
    '<p>is that your last world?</p>'+'<img width=500px src="/images/crying_cat.jpg" alt="">',
    '<p>you are breaking my heart </p>'+'<img width=500px src="images/e76d0010df219e6697e91cae634c356c.jpg" alt="">',
    '<p>say yes please</p>'+'<img width=500px src="images/e7f.jpg" alt="">',
    '<p>I beg you</p>'+'<img width=500px src="images/kitten-000017380158_Smaller.jpg" alt="">',
    '<p>you haveeno heart</p>'+'<img width=500px src="images/OIP.1FjCq9vfJ1XI26zJil3VngAAAA.jpeg" alt="">'
]

function sayingNo(){
    function getRandomImage(){
        return Math.floor(Math.random() * images.length);
    };
    const boxKely = document.querySelector(".box-kely");
    console.log(images[getRandomImage()])
    boxKely.innerHTML+= images[getRandomImage()];
}

const btns = document.querySelectorAll(".btn")
let x=0;

function sayingYes(){
    if(x==0){ 
        const boxKely = document.querySelector(".box-kely");
        boxKely.innerHTML+='<p>Yuppy</p>'+'<img width="500px" src="/images/happy-cat.jpg" alt="">';
        x=1;
    }
}

btns.forEach(function(btn){
    btn.addEventListener("click",function(a){
        let types = a.currentTarget.classList;
            if(types.contains("yes")){
                sayingYes(); 
            }else if(types.contains("no")){
                sayingNo();
            }
    })
})





