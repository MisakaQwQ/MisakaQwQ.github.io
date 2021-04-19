correct_answer = [parseInt("010001", 2), parseInt("100001", 2), parseInt("000011", 2),
                parseInt("000100", 2), parseInt("010000", 2), parseInt("100100", 2),
                parseInt("000110", 2), parseInt("000001", 2), parseInt("001000", 2)]
now_status = 0
score = 0
score_status = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
title = ["稀释液充满小孔管及其管道", "清洗液冲洗管道", "稀释液充满小孔管及其管道", "样品液流通路径", "定量管恢复大气压", "清洗过程",
    "清洗管道，排除气泡", "除堵过程", "血红蛋白测定"]

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
    var btn = document.getElementsByTagName('button')[0];
    btn.disabled = true;
}

function release_form(){
    var check = document.getElementsByTagName('input');
    for(var i=0;i<check.length;i+=1){
        check[i].disabled = false;
    }
    var btn = document.getElementsByTagName('button')[0];
    btn.disabled = false;
}

function judge(){
    if(now_status == 9) {
        return ;
    }
    now = 0
    var check = document.getElementsByTagName('input');
    for(var i=0;i<check.length;i+=1){
        if(check[i].checked){
            now += 1<<i;
        }
    }
    if(correct_answer[now_status] == now)
    {
        lock_form();
        if(score_status[now_status] == 0) {
            score += 1
        }
        now_status += 1
        console.log("Correct");
        document.getElementById('title').innerHTML = title[now_status - 1];
        var video = document.getElementsByTagName("video")[0];
        video.src = now_status + '.mp4'
        video.play();
        video.addEventListener('ended', function () {
            if(now_status==9){
                document.getElementById('notify').innerHTML = '总得分' + score + '/9';
            }
            else{
                document.getElementById('notify').innerHTML = '下一个任务' + title[now_status];
                clear_choice();
                release_form();
            }
        }, false);
        document.getElementById('notify').innerHTML = '选择正确';
    }
    else{
        score_status[now_status] = -1
        console.log("Wrong");
        document.getElementById('notify').innerHTML = '选择错误'
        clear_choice();
    }
    console.log(now);//false
}