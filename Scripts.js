var Main = {};

Main.Canvas = document.getElementById('myCanvas');
Main.Context = Main.Canvas.getContext('2d');
Main.SupermanImage = new Image();
Main.FlashImage = new Image();
Main.GreenLanternImage = new Image();
Main.GreenArrowImage = new Image();
Main.LeftImage = new Image();
Main.RightImage = new Image();
Main.BatmanImage = new Image();
Main.SupermanImage.src 		= "Superman.jpg";
Main.FlashImage.src 		= "Flash.jpg";
Main.GreenLanternImage.src 	= "GreenLantern.jpg";
Main.GreenArrowImage.src 	= "GreenArrow.png";
Main.BatmanImage.src 		= "Batman.jpg";
Main.LeftImage.src 			= "Left.jpg";
Main.RightImage.src 		= "Right.jpg";

Main.Box = function(x, y, w, h)
{
	this.X = x;
	this.Y = y;
	this.Width = w;
	this.Height = h;

	this.DrawAsImage = function(image)
	{
		Main.Context.drawImage(image, this.X, this.Y, this.Width, this.Height);
	}
}

Main.Boxes = [
	new Main.Box(30, 100, 100, 100),
	new Main.Box(150, 60, 300, 200),
	new Main.Box(470, 60, 300, 200),
	new Main.Box(790, 60, 300, 200),
	new Main.Box(1110, 60, 300, 200),
	new Main.Box(1430, 60, 300, 200),
	new Main.Box(1750, 100, 100, 100)
];

Main.Animate = function()
{
	Main.Context.clearRect(0, 0, Main.Canvas.width, Main.Canvas.height);
	Main.Boxes[0].DrawAsImage(Main.LeftImage)
	Main.Boxes[1].DrawAsImage(Main.FlashImage)
	Main.Boxes[2].DrawAsImage(Main.GreenLanternImage)
	Main.Boxes[3].DrawAsImage(Main.GreenArrowImage)
	Main.Boxes[4].DrawAsImage(Main.BatmanImage);
	Main.Boxes[5].DrawAsImage(Main.SupermanImage)
	Main.Boxes[6].DrawAsImage(Main.RightImage);
	requestAnimFrame(function() { Main.Animate(); });
}

window.requestAnimFrame = (function(callback)
{
	return window.requestAnimationFrame
	|| window.webkitRequestAnimationFrame
	|| window.mozRequestAnimationFrame
	|| window.oRequestAnimationFrame
	|| window.msRequestAnimationFrame
	|| function(callback) { window.setTimeout(callback, 1000 / 60); };
})();

$(document).ready(function()
{
	Main.Animate();
});