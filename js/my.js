
 let canvas = document.querySelector('#charlesCanvas');
 canvas.width = canvas.parentElement.width;
 canvas.height = canvas.parentElement.height;
 let ctx = canvas.getContext('2d');
 addEventListener('resize',()=>{
	canvas.width = canvas.parentElement.width;
	canvas.height = canvas.parentElement.height;
 })
 let ball_array = [];
 let ball_amount = 100;
 let color = [];
 //get mouse position on mouse move event on canvas
 let mouse_position = {
	 x : null,
	 y : null
 }
 canvas.addEventListener('mousemove',function(e){
	mouse_position.x = e.offsetX;
	mouse_position.y = e.offsetY;
 })

 class Ball{
	 constructor(){
		this.radius = 1;
		this.x = (canvas.width - 2*this.radius)*Math.random() + this.radius;
		this.y = (canvas.height - 2*this.radius)*Math.random() + this.radius;
		this.speed = {
			x : 1,
			y: 1
		};
	 }
	 draw(){
		 ctx.beginPath();
		 ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
		 ctx.fillStyle = 'white';
		 ctx.fill();
		 ctx.stroke();
	 }

	 update(){
		 this.draw();
		 if(this.x > canvas.width || this.x < 0)
		 {
			 this.speed.x *= -1;
		 }
		 if(this.y > canvas.height|| this.y < 0)
		 {
			 this.speed.y *= -1;
		 }

		 this.x += this.speed.x;
		 this.y += this.speed.y;
	 }
 }

 function load_balls(){
	 for(let i=0; i < ball_amount; i++){
		 ball_array.push(new Ball());
	 }
 }
 load_balls();
 function animate(){
	// ctx.clearRect(0, 0, canvas.width, canvas.height);
	for(el of ball_array){
		el.update();
	}
	requestAnimationFrame(animate);
 }
 setTimeout(()=>{
    animate();
 },0);
     