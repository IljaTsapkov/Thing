class KY029{
    constructor(ctx, GND = false, RED = 0, GREEN = 0, X = 0, Y = 0){
        this.method1(ctx, this.method2(ctx), X, Y);
    }
    
    method1(ctx, color, X = 0, Y = 0){
        this.color = color;
        this.X = X;
        this.Y = Y;
        this.ctx.fillStyle = "#000000";
        this.ctx.fillRect(this.X + 30, this.Y + 10, 160, 75);
        this.ctx.fillStyle = "#909090";
        this.ctx.fillRect(this.X + 0, this.Y + 20, 40, 10);
        this.ctx.fillRect(this.X + 0, this.Y + 40, 40, 10);
        this.ctx.fillRect(this.X + 0, this.Y + 60, 40, 10);
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.X + 190, this.Y + 20, 5, 55);
        this.ctx.fillRect(this.X + 190, this.Y + 30, 40, 35);
        ctx.fillStyle = "#ffffff";
        ctx.font = "20px Sans";
        ctx.fillText("KY-029", this.X + 75, this.Y + 50);
        ctx.fillText("-", this.X + 45, this.Y + 29);
        ctx.fillText("S",this.X + 43, this.Y + 72);
    }

    method2(ctx, GND = false, RED = 0, GREEN = 0){
        this.GND = GND;
        this.RED = RED;
        this.GREEN = GREEN;
        this.ctx = ctx;
        this.A=(this.RED==1)?"FF":"00";
        this.B=(this.GREEN==1)?"FF":"00";
        this.res=(this.GND==true)?"#" + this.A + this.B + "00":"#000000";

        this.method1(this.ctx, this.res, this.X, this.Y)
        return this.res;
    }

    

}