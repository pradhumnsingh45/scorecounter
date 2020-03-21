var p1=document.querySelector("#p1");
var p2=document.getElementById("p2");
var reset=document.getElementById("reset");
var number=document.getElementById("number");
var p1score=0;
var p2score=0;
var p1display=document.querySelector("#p1display");
var p2display=document.querySelector("#p2display");
var pladisplay=document.querySelector("#pladisplay");
var p=document.querySelector("p");
var gameover=false;
var winningscore=10;
p1.addEventListener("click",function(){
	if(!gameover){
	p1score++;
	if(p1score==winningscore){
		gameover=true;
	}

	p1display.textContent=p1score;
}
});
p2.addEventListener("click",function(){
	if(!gameover){
	p2score++;
	if(p2score==winningscore){
		gameover=true;
	}
	p2display.textContent=p2score;

}
});
reset.addEventListener("click",function () {
	p1score=0;
	p2score=0;
	p1display.textContent=0;
	p2display.textContent=0;
});
number.addEventListener("click",function(){
	pladisplay.textContent=number.value;

});