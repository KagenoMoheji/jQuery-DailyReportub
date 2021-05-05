function dailyReportub(args) {
    "use strict";
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    initDailyReportub(args, year, month);
    $("#drhubPrevMonth").on("click", function () {
        if((--month) === -1){
            month = 11;
            year--;
        }
        setDailyReportub(args, year, month);
    });
    $("#drhubNextMonth").on("click", function () {
        if((++month) === 12){
            month = 0;
            year++;
        }
        setDailyReportub(args, year, month);
    });
}

function initDailyReportub(args, year, month){
    if(!("width" in args) || (isNaN(args["width"])) ||(parseInt(args["width"])<200)){
        args["width"] = 200;
    }
    if(!("height" in args) || (isNaN(args["height"])) || (parseInt(args["height"])<200)){
        args["height"] = 200;
    }
    if(!("fontColor" in args) || (!isString(args["fontColor"])) || (args["fontColor"]==="")){
        args["fontColor"] = "#000";
    }
    if(!("borderColor" in args) || (!isString(args["borderColor"])) || (args["borderColor"]==="")){
        args["borderColor"] = "#ccc";
    }
    if(!("backgroundColor" in args) || (!isString(args["backgroundColor"])) || (args["backgroundColor"]==="")){
        args["backgroundColor"] = "transparent";
    }
    if(!("grassColor" in args) || (!isString(args["grassColor"])) || (args["grassColor"]==="")){
        args["grassColor"] = "#0f0";
    }
    let header = '<div id="drhubHeader"><button id="drhubPrevMonth">◀</button><span id="drhubHeader_mid">' + year + ' / ' + (month+1) + '</span><button id="drhubNextMonth">▶</button></div>';
    $("#DailyReportub").append(header);
    $("#DailyReportub").css({
        "width" : args["width"] + "px",
        "height" : args["height"] + "px",
        "background-color" : args["backgroundColor"]
    });
    let body = '<div id="drhubBody"></div>';
    $("#DailyReportub").append(body);
    setDailyReportub(args, year, month);
}

function setDailyReportub(args, year, month){
    let date = new Date();
    $("#drhubHeader_mid").html(year + ' / ' + (month+1));
    $("#drhubBody").empty();
    let elem = '';
    let daysList = ["日", "月", "火", "水", "木", "金", "土"];
    date.setFullYear(year);
    date.setMonth(2);
    date.setDate(0);
    let monthDatesList = [31, date.getDate(), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    date.setMonth(month);
    date.setDate(1);
    let startDayIndex = date.getDay();
    let weekRowCnt = Math.ceil((startDayIndex + monthDatesList[month]) / 7) + 1;
    let dateList = new Array(7*(weekRowCnt-1));
    dateList.fill("");
    for(let i=0; i<(startDayIndex+monthDatesList[month]); i++){
        if(i<startDayIndex){
            continue;
        }

        dateList[i] = String(i-startDayIndex+1);
    }
    let hasEvents = ("events" in args) ? true:false;
    for(let i=0; i<weekRowCnt; i++){
        elem = '<div id="drhubRow_' + i + '" class="drhubRow"></div>';
        $("#drhubBody").append(elem);
        for(let j=0; j<7; j++){
            if(i === 0){
                elem = '<span class="drhubCell">' + daysList[j] + '</span>';
                $("#drhubRow_" + i).append(elem);
            }
            if(0 < i){
                let dateIndex = (i-1)*7+j;
                elem = '<span id="drhubCell_' + (dateIndex) + '" class="drhubCell">' + dateList[dateIndex] + '</span>';
                $("#drhubRow_" + i).append(elem);
                let eventsKey = year + "/" + (month+1) + "/" + dateList[dateIndex];
                if(hasEvents && (eventsKey in args["events"])){
                    $("#drhubCell_" + dateIndex).addClass("drhubHasTooltip");
                    $("#drhubCell_" + dateIndex).append('<span class="drhubTooltip"><p class="drhubTooltipText"></p></span>');
                    let eventsCnt = args["events"][eventsKey].length;
                    elem = "";
                    for(let k=0; k<eventsCnt; k++){
                        elem += args["events"][eventsKey][k] + "<br>";
                    }
                    $("#drhubCell_" + dateIndex + ">.drhubTooltip>.drhubTooltipText").append(elem);
                    let rgb = hex2rgb(args["grassColor"]);
                    let blurRate = (eventsCnt>=4) ? 0:eventsCnt;
                    blurRate = blurRate * 0.25;
                    $("#drhubCell_" + dateIndex).css({
                        "background-color": "rgba(" + rgb["r"] + "," + rgb["g"] + "," + rgb["b"] + "," + blurRate + ")"
                    });
                }
                date = new Date();
                let today = date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate();
                if(eventsKey===today){
                    $("#drhubCell_" + dateIndex).addClass("drhubToday");
                }
            }
        }
    }
    let rowHeight = Math.round(args["height"]*0.85/weekRowCnt);
    $(".drhubRow").css({
        "height" : rowHeight + "px"
    });
    let cellWidth = Math.floor(args["width"]/7)-8;
    $(".drhubCell").css({
        "width" : cellWidth + "px",
        "border" : "1px solid " + args["borderColor"]
    });
    $("#DailyReportub").css({
        "color" : args["fontColor"]
    });
}

function isString(arg){
    return ((typeof(arg) == "string") || (arg instanceof String));
}

function hex2rgb(hex){
    if(hex.slice(0, 1) === "#"){
        hex = hex.slice(1);
    }
	if(hex.length === 3){
        hex = hex.slice(0,1) + hex.slice(0,1) + hex.slice(1,2) + hex.slice(1,2) + hex.slice(2,3) + hex.slice(2,3);
    }
    let r = parseInt(hex.slice(0,2), 16);
    let g = parseInt(hex.slice(2,4), 16);
    let b = parseInt(hex.slice(4,6), 16);
	return {"r": r, "g": g, "b": b};
}