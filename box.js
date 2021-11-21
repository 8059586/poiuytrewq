AFRAME.registerComponent("move",{
    schema:{
        y:{type:"number",default:1}
    },
    tick:function(){
        this.data.y=this.data.y + 0.1
        var pos = this.el.getAttribute("position")
        pos.y = this.data.y
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
    }
})
AFRAME.registerComponent("move1",{
    schema:{
        x:{type:"number",default:1}
    },
    tick:function(){
        this.data.x=this.data.x + 0.1
        var pos = this.el.getAttribute("position")
        pos.x = this.data.x
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
    }
})