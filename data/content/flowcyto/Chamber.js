function Chamber(){
    this.flow = -50
    this.posa = 105
    this.posb = 70
    this.posc = 35
    this.posd = 0


    this.update = function (){
        if(this.flow<=100){
            this.flow+=1
        }
        else{
            this.posa+=1
            this.posb+=1
            this.posc+=1
            this.posd+=1
            this.posa%=135
            this.posb%=135
            this.posc%=135
            this.posd%=135
        }
    }

    this.show = function (){
        tint(255,128)
        image(test_flow, 141, 40+this.flow)

        tmpa = 140+this.posa+this.flow
        tmpb = 140+this.posb+this.flow
        tmpc = 140+this.posc+this.flow
        tmpd = 140+this.posd+this.flow

        image(particleA, 144, tmpa, 25,25)
        image(particleB, 144, tmpb,25,25)
        image(particleC, 144, tmpc,25,25)
        image(particleD, 144, tmpd,25,25)

        if(tmpa>=315 && tmpa<=355) {
            // NONE
            tint(255, 255/20*(20-Math.abs(tmpa-335)))
            image(spot, 130, 321)
            image(particleA, 273, 80, 25,25)
        }
        if(tmpb>=315 && tmpb<=355) {
            // YELLOW
            tint(255, 255/20*(20-Math.abs(tmpb-335)))
            image(spot, 130, 321)
            image(particleB, 273, 45, 25,25)
            image(Y_XY_M, 158, 275)
            image(Y_M, 245, 275)
            image(Y_XY_S, 158, 250)
            image(Y_X_S, 245, 260)
            image(Y_D, 370, 240)
        }
        if(tmpc>=315 && tmpc<=355) {
            // GREEN
            tint(255, 255/20*(20-Math.abs(tmpc-335)))
            image(spot, 130, 321)
            image(particleC, 317, 80, 25,25)
            image(Y_XY_M, 158, 275)
            image(Y_XY_S, 158, 250)
            image(G_M, 235, 208)
            image(G_X_S, 341, 190)
            image(G_XY_S, 235, 190)
            image(G_D, 370, 167)
        }
        if(tmpd>=315 && tmpd<=355) {
            // GREEN-YELLOW
            tint(255, 255/20*(20-Math.abs(tmpd-335)))
            image(spot, 130, 321)
            image(particleD, 317, 45, 25,25)
            image(Y_XY_M, 158, 275)
            image(Y_M, 245, 275)
            image(Y_XY_S, 158, 250)
            image(Y_X_S, 245, 260)
            image(Y_D, 370, 240)
            image(G_M, 235, 208)
            image(G_X_S, 341, 190)
            image(G_XY_S, 235, 190)
            image(G_D, 370, 167)
        }
    }
}