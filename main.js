var imageLoader = document.getElementById('imageLoader'),
    canvas = document.getElementById('imageCanvas'),
    ctx = canvas.getContext('2d'),
    uploadBtn = document.getElementById("btn-upload");
    downBtn = document.getElementById('btn-download'),
    colors = ["#FF9933", "#FFFFFF", "#138808", "#000080"];
imageLoader.addEventListener('change', handleImage, false);
uploadBtn.addEventListener('click', function (e) {
  imageLoader.click();
});
downBtn.addEventListener('click', function (e) {
    var dataURL = canvas.toDataURL('image/png');
    downBtn.href = dataURL;
});

function handleImage(e){
    canvas.style.display = 'block';
    downBtn.style.display = 'block';
    uploadBtn.style.display = 'none';
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
            canvas.width = img.width;
            canvas.height = img.height;
            draw(img, img.width, img.height)
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}
function draw(img, w, h){
    ctx.drawImage(img, 0, 0);
    for(var i = 0; i<5; i++){
        lineHeight = h / 4;
        ctx.fillStyle = colors[i];
        ctx.globalAlpha = 0.4;
        ctx.fillRect(0,lineHeight * i,w,lineHeight);
    }
}
