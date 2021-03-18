var cnt;
function setup(){
    cnt = 0
    createCanvas(551, 431);
    textFont("Arial")
    textStyle(BOLD)
    static_bg = loadImage("./assets/Static_Bg.svg")
    beam_blue = loadImage("./assets/Beam_Blue.png")
    test_flow = loadImage("./assets/test_flow.svg")
    spot = loadImage("./assets/spot.svg")

    Green_beam = loadImage("./assets/Green_beam.png")
    Yellow_beam_xy = loadImage("./assets/Yellow_beam_xy.png")
    Yellow_beam_x = loadImage("./assets/Yellow_beam_x.png")

    particleA = loadImage("./assets/ParticleA.svg")
    particleB = loadImage("./assets/ParticleB.svg")
    particleC = loadImage("./assets/ParticleC.svg")
    particleD = loadImage("./assets/ParticleD.svg")

    tube_mask = loadImage("./assets/tube_mask.png")
    chamber_mask = loadImage("./assets/chamber_mask.png")

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
    image(tube_mask, 7,0)
    image(chamber_mask, 141,363)
}