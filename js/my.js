 let canvas = document.querySelector('#charlesCanvas');
 canvas.width = innerWidth;
 canvas.height = 100;

 let ctx = canvas.getContext('2d');

 let color = ['#BF547B','#4EB4BF','#90BF7A','#F2B749','#D9B777','#D9CAC1'];

 addEventListener('resize',()=>{
	canvas.width = innerWidth;
 	canvas.height = 100;
 })

 let bubbles_array = [];
 let bubbles_amount = 250;

 //get mouse position on mouse move event on canvas
 let mouse_position = {
	 x : null,
	 y : null,
	 //this for increase the distance of mouse action on bubbles
	 radius : 25
 }

 canvas.addEventListener('mousemove',function(e){
	mouse_position.x = e.offsetX;
	mouse_position.y = e.offsetY;
 })

 class Bubble{
	 constructor(){
		this.radius = 1.7;
		this.x = (canvas.width - 2*this.radius)*Math.random() + this.radius;
		this.y = (canvas.height - 2*this.radius)*Math.random() + this.radius;
		this.color = color[Math.floor(color.length * Math.random())];
		//we want the bubble to get back to its origin size
		// once it's far enough from mouse
		this.baseSize = this.radius
		//velocity on axis
		this.speed = {
			x : Math.random() - 0.5,
			y: Math.random() - 0.5
		};
		//bubble will go to different direction to fill footer space at the start
		this.direction = {
			x : Math.random() * 2 * Math.PI,
			y : Math.random() * 2 * Math.PI
		}
	 }
	 draw(){
		 ctx.beginPath();
		 ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
		 ctx.fillStyle = this.color;
		 ctx.fill();
		 ctx.stroke();
	 }
	 //make the bubble growing then get back to its base size
	 ifMouseCloseEnough(){
		let dx = this.x - mouse_position.x;
		let dy = this.y - mouse_position.y;
		//distance from mouse
		let distanceToBubble = dx*dx + dy*dy;
		let isClose = false;
		//bubble size won't be more than...
		let maxBubbleSize = 10;

		if(Math.sqrt(distanceToBubble) < this.radius + mouse_position.radius){
			isClose = true;
		}
		else{
			this.radius = this.baseSize
			isClose = false;
		}
		
		if(isClose && this.radius < maxBubbleSize){
			this.radius += 1;
		}

	 }

	 update(){
		 this.draw();
		 this.ifMouseCloseEnough();
		 if(this.x > canvas.width || this.x < 0)
		 {
			 this.speed.x *= -1;
		 }
		 if(this.y > canvas.height|| this.y < 0)
		 {
			 this.speed.y *= -1;
		 }
		 //give bubbles diffente direction then make them move
		 this.x += this.speed.x*Math.cos(this.direction.x);
		 this.y += this.speed.y*Math.sin(this.direction.y);
	 }

	 
 }

 function load_bubbles(){
	 for(let i = 0; i < bubbles_amount; i++){
		 bubbles_array.push(new Bubble());
	 }
	
 }

 load_bubbles();

 function animate(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for(let el of bubbles_array){
		el.update();
	}

	setTimeout(()=>{
		requestAnimationFrame(animate);
	},0)
	
 }
 animate();
     