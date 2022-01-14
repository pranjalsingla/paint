canvas= document.getElementById("my_canvas");
ctx= canvas.getContext("2d");

var last_x, last_y;
color="black"
width_line= 2;
screen_width=screen.width;
new_width=screen.width-75;
new_height=screen.height-300;

if(screen_width<992){
    document.getElementById("my_canvas").width=new_width;
    document.getElementById("my_canvas").height=new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)
  {
        last_x=  e.touches[0].clientX - canvas.offsetLeft;
    last_y=  e.touches[0].clientY-  canvas.offsetTop;
}
    


canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e)
{
    current_x= e.touches[0].clientX - canvas.offsetLeft;
    current_y=e.touches[0].clientY - canvas.offsetTop;
    console.log(current_x, current_y);

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_line;
    console.log(last_x, last_y);
    ctx.moveTo(last_x,last_y);

    console.log(current_x, current_y);

    ctx.lineTo(current_x, current_y);
    ctx.stroke;

    last_x=current_x;
    last_y=current_y;
}

