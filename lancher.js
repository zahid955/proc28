class launcher{
    constructor(body,anchor){
        var options = {bodyA,body,
                       bodyB:anchor,
                       steffness=0.004,
                       length=1
        }
        this.bodyA=body
        this.pointB=anchor
        this.launcher=Constraint.create (options)
        World.add(world,this.launcher)
    }
        attach(body){this.launcher.bodyA=body}
        fly (){
            this.launcher.bodyA=null

        }
        display(){
            if( this.launcher.bodyA){
                var poA=this.bodyA.position
                var poB=this.pointB
                strokeWeight  (2)
                line (poA.x,poA.y,poB.x,poB.y)
            }

        }
}