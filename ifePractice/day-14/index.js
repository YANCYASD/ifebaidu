function barChart(dataArr){
 let canvas = document.querySelector("#canvas")
 //图表属性
 let cWidth,cHeight,cMargin,cSpace;
 let originX,originY;
 //柱状图属性
 let bMargin,tobalBars,bWidth,maxValue;
 let totalYNumber;
 let gradient;
 //运动相关
 let ctr,numctr,speed;
 //鼠标移动
 let mousePosition = {};

//canvas上下文
let ctx = canvas.getContext("2d")
initChart();
function initChart() {
    /**
     *  Y轴间距
     */
    cMargin = 30;

    cSpace = 60;
    cHeight = canvas.height - cMargin * 2 - cSpace;
    cWidth = canvas.width - cMargin * 2 - cSpace;
    originX = cMargin + cSpace;
    originY = cMargin + cSpace;

    //柱的间隔
    bMargin = 15;
    // 柱的数量
    tobalBars = dataArr.length;
    // 柱的宽度
    bWidth = parseInt(cWidth/tobalBars - bMargin)
    maxValue = 0;
    for(var i=0; i<dataArr.length; i++){
        var barVal = parseInt( dataArr[i][1] );
        if( barVal > maxValue ){
            maxValue = barVal;
        }
    }
    maxValue += 50;
    totalYNumber = 10;
    //动画
    ctr = 1;
    numctr = 100;
    speed = 10;

    //渐变色
    gradient = ctx.createLinearGradient(0,0,0,300);
    gradient.addColorStop(0,"green");
    gradient.addColorStop(1,"pink");
}
//绘制标轴和标签
drawLineLableMarks();
function drawLineLableMarks() {
    ctx.translate(0.5,0.5) // 绘制1px线是要偏移
    ctx.font = "12px Arial";
    ctx.lineWidth = 1;
    ctx.fillStyle="#000";
    ctx.strokeStyle = "#000";
    // y轴
    drawLine(originX, originY, originX, cMargin);
    // x轴
    drawLine(originX, originY, originX+cWidth, originY);

    function drawLine(x, y, X, Y){
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(X, Y);
        ctx.stroke();
        ctx.closePath();
    }
}
}


barChart(
    [[2007, 750], [2008, 425], [2009, 960], [2010, 700], [2011, 800], [2012, 975], [2013, 375], [2014, 775]]
)