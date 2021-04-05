class Stone {
    constructor(bodyA,pointB){
        var options ={
            isStatic:false
            restitution:0,
            friction:1,
            density:1.2,
            bodyA: bodyA,
            pointB: pointB,
           
        };
        this.pointB = pointB;
        this.stone = Constraint.create(options);
        World.add(world,this.sling);
    }
    fly(){
         this.stone.bodyA = null;
    }
    display(){
        if(this.stone.bodyA){
            var pointA = this.stone.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}

