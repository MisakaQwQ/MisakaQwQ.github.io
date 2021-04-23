correct_answer = [parseInt("1100000010", 2), parseInt("1000010001", 2), parseInt("1011000000", 2),
                parseInt("0000100100", 2), parseInt("0100000010", 2), parseInt("0000110001", 2),
                parseInt("0011100000", 2), parseInt("1000000100", 2), parseInt("0000001100", 2)]
now_status = 0
score = 0
score_status = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
title = ["稀释液充满小孔管及其管道", "清洗液冲洗管道", "稀释液充满小孔管及其管道", "样品液流通路径", "定量管恢复大气压", "清洗过程",
    "清洗管道，排除气泡", "除堵过程", "血红蛋白测定"]
tip = ["此过程为排空定量装置内液体。A、X阀门打开，上次操作过程中的定量管内液体被负压抽吸进入废液瓶，否则残留定量管内的液体影响体积的定量。",
        "此过程为清洗液冲洗管道。为血细胞计数做准备，先把管道用清洗液清洗一下。其路径为清洗液→Z阀→小孔管→A阀→废液瓶。",
        "此过程为稀释液充满小孔管及其管道。其路径为稀释液→B阀→小孔管→A阀→废液瓶。",
        "此过程为样品液流通路径。其路径为样品液→小孔→小孔管→定量管→C阀→负压缓冲瓶→废液瓶。",
        "此过程为定量管恢复大气压。样品液到达P3时，门电路开始计数，到达P1时，停止计数。随后C阀关闭，X阀打开0.3s，定量管恢复大气压状态。",
        "此过程为清洗过程。按下“清洗”键时，Z、A、C阀同时打开5s，清洗液路径为：<img src=\"8.png\" alt=\"\">",
        "按下“供水”时，B、C阀打开5s。稀释液的路径为：稀释液→缓冲瓶→B阀→小孔管→定量管→C阀→负压缓冲瓶→废液瓶。此过程为清洗管道，排除气泡。",
        "此过欻为除堵过程。小孔管堵塞时，按下“排堵”键（即“清除”键），并移去样品杯，空气从小孔管吸入，去除堵塞，此时A阀开通。",
        "此过程为血红蛋白测定过程。D阀打开，根据Lambert-Beer定律进行比色分析。"]

function clear_choice(){
    var check = document.getElementsByTagName('input');
    for(var i=0;i<check.length;i+=1){
        check[i].checked = false;
    }
}

function lock_form(){
    var check = document.getElementsByTagName('input');
    for(var i=0;i<check.length;i+=1){
        check[i].disabled = true;
    }
    var btn = document.getElementById('animation_submit');
    btn.disabled = true;
}

function release_form(){
    var check = document.getElementsByTagName('input');
    for(var i=0;i<check.length;i+=1){
        check[i].disabled = false;
    }
    var btn = document.getElementById('animation_submit');
    btn.disabled = false;
}

function judge_choice(){
    var choice1a = document.getElementsByName('choice1a')[0];
    var choice1b = document.getElementsByName('choice1b')[0];
    var choice2a = document.getElementsByName('choice2a')[0];
    var choice2b = document.getElementsByName('choice2b')[0];
    lock_form();
    if(choice1a.checked && choice1b.checked) {
        score+=5;
    }
    if(choice2a.checked && choice2b.checked) {
        score+=5;
    }
    if(!choice1a.checked) {
        choice1a.checked = true;
        document.getElementById('choice_1a').style.color = '#ff0000';
    }
    if(!choice1b.checked) {
        choice1b.checked = true;
        document.getElementById('choice_1b').style.color = '#ff0000';
    }
    if(!choice2a.checked) {
        choice2a.checked = true;
        document.getElementById('choice_2a').style.color = '#ff0000';
    }
    if(!choice2b.checked) {
        choice2b.checked = true;
        document.getElementById('choice_2b').style.color = '#ff0000';
    }
    document.getElementById("answer_1a").style.display = 'block';
    btn = document.getElementById('choose_submit');
    btn.innerHTML = "进入管路仿真";
    btn.onclick = enter_simulate;
}

function enter_simulate(){
    release_form();
    document.getElementsByClassName('prev_question')[0].style.display = "none";
    document.getElementsByClassName('main_container')[0].style.display = "block";
}

function next_question(){
    clear_choice();
    var btn = document.getElementById('animation_submit');
    if(now_status!=9){
        document.getElementById('title').innerHTML = '当前任务：' + title[now_status];
        document.getElementById('notify').innerHTML = '';
        // document.getElementById('notify').innerHTML = '下一个任务' + title[now_status];
        clear_choice();
        release_form();
        btn.onclick=judge;
        btn.innerHTML = '确定';
    }
}

function show_result(){
    document.getElementById('notify').innerHTML = '得分' + score;
    document.getElementById('animation_submit').disabled=true;
}

function judge(){
    if(now_status == 9) {
        return ;
    }
    now = 0
    var check = document.getElementsByTagName('input');
    for(var i=0;i<check.length;i+=1){
        if(check[i].checked){
            now += parseInt(check[i].value);
        }
    }
    if(document.getElementById('DEBUG').checked || correct_answer[now_status] == now)
    {
        lock_form();
        if(score_status[now_status] == 0) {
            score += 10
        }
        now_status += 1
        console.log("Correct");
        document.getElementById('title').innerHTML = '当前任务：' + title[now_status - 1];
        var btn = document.getElementById('animation_submit');
        btn.onclick = next_question;
        btn.innerHTML = '下一个任务'
        var video = document.getElementsByTagName("video")[0];
        video.src = now_status + '.mp4'
        video.playbackRate=5;
        video.play();
        video.addEventListener('ended', function () {
            if(now_status!=9){
                btn.disabled = false;
            }
            else{
                btn.disabled=false;
                btn.innerHTML = '查看得分';
                btn.onclick=show_result;
            }
        }, false);
        document.getElementById('notify').innerHTML = '选择正确<br>解析：' + tip[now_status - 1];
    }
    else{
        score_status[now_status] = -1
        console.log("Wrong");
        document.getElementById('notify').innerHTML = '选择错误'
        clear_choice();
    }
    console.log(now);//false
}