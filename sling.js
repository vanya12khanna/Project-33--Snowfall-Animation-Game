class Sling{
    constructor(){
        var options = {

        }
        
        slingshotImg = loadImage("slingshot.png");
        this.x =  855;
        this.y = 110;
        this.width = 100;
        this.height = 100; 
        this.sling = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        World.add(world, this.sling);


    }
    display(){
    
    imageMode(CENTER);
    image(slingshotImg, this.x, this.y, this.width, this.height);


}


}











