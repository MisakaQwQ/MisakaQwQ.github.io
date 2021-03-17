var cnt;
function setup(){
    cnt = 0
    createCanvas(551, 431);
    textFont("Arial")
    textStyle(BOLD)
    static_bg = loadImage("./assert/Static_Bg.svg")
    beam_blue = loadImage("./assert/Beam_Blue.png")
    test_flow = loadImage("./assert/test_flow.svg")
    spot = loadImage("./assert/spot.svg")

    G_D = loadImage("./assert/G_D.svg")
    G_M = loadImage("./assert/G_M.svg")
    G_X_S = loadImage("./assert/G_X_S.svg")
    G_XY_S = loadImage("./assert/G_XY_S.svg")
    Y_D = loadImage("./assert/Y_D.svg")
    Y_M = loadImage("./assert/Y_M.svg")
    Y_X_S = loadImage("./assert/Y_X_S.svg")
    Y_XY_M = loadImage("./assert/Y_XY_M.svg")
    Y_XY_S = loadImage("./assert/Y_XY_S.svg")

    particleA = loadImage("./assert/ParticleA.svg")
    particleB = loadImage("./assert/ParticleB.svg")
    particleC = loadImage("./assert/ParticleC.svg")
    particleD = loadImage("./assert/ParticleD.svg")

    tube_mask = loadImage("./assert/tube_mask.png")

    laser = new Laser()
    tubes = []
    for(var i = 0; i<20;i++) {
        tubes.push(new Tube());
    }
    chamber = new Chamber()
}

function init() {
    tint(255,255)
    background(250);
    image(static_bg, 0,0)
}

function draw() {
    cnt+=1
    init()
    laser.update()
    laser.show()
    for(var i = 0; i<20;i++) {
        tubes[i].update()
        tubes[i].show()
    }
    if(cnt>=30)
    {
        chamber.update()
        chamber.show()
    }
    tint(255,255)
    image(tube_mask, 7,42)
}