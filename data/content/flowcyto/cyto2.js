var text_alpha;
var prev_text;
function setup(){
    text_alpha = 0
    prev_text = -1
    createCanvas(1000, 431);
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
    background(255);
    image(static_bg, 0,0)
}

function draw() {
    init()
    laser.update()
    laser.show()
    for(var i = 0; i<20;i++) {
        tubes[i].update()
        tubes[i].show()
    }
    chamber.update()
    chamber.show()
    tint(255,255)
    image(tube_mask, 7,0)
    image(chamber_mask, 141,363)
    if(mouseX >= 230 && mouseX <= 380 && mouseY >= 0 && mouseY <= 150) {
        if(0 != prev_text) {
            prev_text = 0
            text_alpha = 0
        }
        text_alpha += 10
        text_alpha = Math.min(255, text_alpha)
        fill(255,113,0,text_alpha)
        textSize(35)
        text("Computer",570,50)
        fill(0,0,0,text_alpha)
        textSize(20)
        text("The data from the light detector and the",570,100)
        text("color detectors is sent to a computer and",570,130)
        text("plotted on a graph called a histogram.",570,160)
    }
    else if(mouseX >= 90 && mouseX <= 200 && mouseY >= 120 && mouseY <= 300) {
        if(1 != prev_text) {
            prev_text = 1
            text_alpha = 0
        }
        text_alpha += 10
        text_alpha = Math.min(255, text_alpha)
        fill(255,113,0,text_alpha)
        textSize(35)
        text("Flow Chamber",570,50)
        fill(0,0,0,text_alpha)
        textSize(20)
        text("Cells flow through the flow chamber one at",570,100)
        text("a time very quickly, about 10,000 cells in",570,130)
        text("20 seconds.  That's 500 cells per second!",570,160)
        text("The process is shown in slow-motion.",570,210)
    }
    else if(mouseX >= 10 && mouseX <= 130 && mouseY >= 310 && mouseY <= 400) {
        if(2 != prev_text) {
            prev_text = 2
            text_alpha = 0
        }
        text_alpha += 10
        text_alpha = Math.min(255, text_alpha)
        fill(255,113,0,text_alpha)
        textSize(35)
        text("Light Detector",570,50)
        fill(0,0,0,text_alpha)
        textSize(20)
        text("The light detector processes these light",570,100)
        text("signals and sends the information to the",570,130)
        text("computer. Forward scatter tells you the",570,160)
        text("size of the cell. Side scatter tells you if",570,190)
        text("the cell contains granules. Each type of",570,220)
        text("cell in the immune system has a unique",570,250)
        text("combination of forward and side scatter",570,280)
        text("measurements, allowing your to count",570,310)
        text("the number of each type of cell.",570,340)
    }
    else if(mouseX >= 300 && mouseX <= 510 && mouseY >= 320 && mouseY <= 390) {
        if(3 != prev_text) {
            prev_text = 3
            text_alpha = 0
        }
        text_alpha += 10
        text_alpha = Math.min(255, text_alpha)
        fill(255,113,0,text_alpha)
        textSize(35)
        text("Laser",570,50)
        fill(0,0,0,text_alpha)
        textSize(20)
        text("A small laser beam of very bright light hits",570,100)
        text("the cells as they pass through the flow",570,130)
        text("chamber. As the light hits each cell, some",570,160)
        text("light bounces off the cells due to its physical",570,190)
        text("characteristics.  Light bounced off at right",570,220)
        text("angles is called side scatter; light bounced",570,250)
        text("off at small angles is called forward scatter.",570,280)
    }
    else if(mouseX >= 390 && mouseX <= 510 && mouseY >= 170 && mouseY <= 320) {
        if(4 != prev_text) {
            prev_text = 4
            text_alpha = 0
        }
        text_alpha += 10
        text_alpha = Math.min(255, text_alpha)
        fill(255,113,0,text_alpha)
        textSize(35)
        text("Color Detectors",570,50)
        fill(0,0,0,text_alpha)
        textSize(18)
        text("This step is where the fluorochromes come into",570,100)
        text("play.The fluorochromes work like the bar code",570,125)
        text("on groceries as the cashier passes them over",570,150)
        text("the scanner. As the cells pass through the",570,175)
        text("laser, the fluorochromes will become excited",570,200)
        text("and emit light of certain color depending on",570,225)
        text("which fluorochrome is attached. Since we are",570,250)
        text("using two fluorescent markers, any one cell",570,275)
        text("can have one, both or none of the markers on",570,300)
        text("its surface. The color detectors collect the",570,325)
        text("different colors of light emitted by the",570,350)
        text("fluorochromes. The fluorochrome data signal",570,375)
        text("is also sent to the computer.",570,400)
    }
    else if(mouseX >= 220 && mouseX <= 375 && mouseY >= 180 && mouseY <= 315) {
        if(5 != prev_text) {
            prev_text = 5
            text_alpha = 0
        }
        text_alpha += 10
        text_alpha = Math.min(255, text_alpha)
        fill(255,113,0,text_alpha)
        textSize(35)
        text("Filters",570,50)
        fill(0,0,0,text_alpha)
        textSize(20)
        text("The filters direct the light emitted by the",570,100)
        text("fluorochromes to the color detectors.",570,130)
    }
    else {
        text_alpha = 0
        prev_text = -1
    }
}