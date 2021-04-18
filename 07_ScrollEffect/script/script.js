const html = document.querySelector('html'),
      canvas = document.querySelector("#img_Scroll"),
      ctx = canvas.getContext("2d");

let currentFrame = index => ("./img/"+ index + ".jpg")

const frameCount = 100;

canvas.width = 1000;
canvas.height = 500;
let img = new Image();
img.src = currentFrame(1);
img.onload = () => (ctx.drawImage(img, 0, 0))

let updateImg = index => {
    img.src = currentFrame(index);
    ctx.drawImage(img, 0, 0);
}

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;  //현재 스크롤값
    let maxScrollTop =html.scrollHeight - window.innerHeight;  //안보이는 부분
    let scrollFrac = scrollTop/maxScrollTop; 
    let frameIndex = Math.min(frameCount - 1, Math.floor(scrollFrac * frameCount));
    //0부터 1까지였던 범위를 frameCount를 곱해줘서 0 부터 frameCount까지 뻥튀기 하는거지
    //그렇게 각각 값을 가져와서 이미지네임에 맞게 대입해서 이미지가 바뀜

    requestAnimationFrame( () => updateImg(frameIndex + 1))
})

