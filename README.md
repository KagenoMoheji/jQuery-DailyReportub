# jQuery-DailyReportub
If you set this jQuery-library easily in your site, you can show daily report in calendar format and you can see like "github-contribution" in calendar.

---
### Active Environment
- PC Browser (Checked version)
    - Google Chrome (71.0.3578.98)
    - Microsoft Edge (42.17134.1.0)
    - Firefox (63.0.1)
- SmartPhone Browser
    - Not yet.

### Set up
1. Install `jQuery`.
2. Download `jquery.DailyReportub.min.js` and `jquery.DailyReportub.min.css`.
3. Include 2-files like below.
```
<head>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script type="text/javascript" src="jquery.DailyReportub.min.js"></script>
    <link rel="stylesheet" href="jquery.DailyReportub.min.css">
</head>
```
4. Set a tag with the ID `DailyReportub`.  
You may be able to use any tag.
5. In .js, first, you must write code below.
```
$.getScript("jquery.DailyReportub.min.js")
```
6. In .js, you can set DailyReportub by setting some arguments like below.  
The options are described in the next chapter.
```
$(function(){
    dailyReportub({
        width : 300,
        height : 400,
        fontColor : "#00F",
        borderColor : "#ccc",
        backgroundColor : "transparent",
        grassColor : "#F00",
        events : {
            "2018/12/25" : [
                "Studied Python."
            ],
            "2018/12/26" : [
                "●Developped jQuery-library(Ongoing).",
                "●Studied Clang.",
                "●Went to Tokyo."
            ],
            "2018/12/7" : [
                "●Went to Okinawa.",
                "●Developped my site."
            ]
        }
    })
})
```

### Options
- ***width***：The width of calendar.
    - Initial value：200
    - Minimum value：200
- ***height***：The height of calendar.
    - Initial value：200
    - Minimum value：200
- ***fontColor***：The font color of calendar.
    - Initial value："#000"
- ***borderColor***：The border color of cells in calendar.
    - Initial value："#ccc"
- ***backgroundColor***：The background-color of calendar.
    - Initial value："transparent"
- ***grassColor***：The background-color (witch changes own depth by the counts of daily-reports) of cells in calendar.
    - Initial value："#0f0"
- ***events***：Your daily reports. Write according to format "associative-array" like the example in the previous chapter.
    - Initail value：None

### DEMO GIF
![DEMO](https://github.com/KagenoMoheji/jQuery-DailyReportub/blob/media/media/DailyReportub.gif)

### And More...
- If you want to re-decorate buttons...
    - You can re-decorate buttons with tag-IDs `#drhubPrevMonth` and `#drhubNextMonth`.
- If you want to change the width of tooltips...
    - You can change it and fix the position of a triangular portion of a tooltip by attributes below in `jquery.DailyReportub.min.css`.
```
.drhubTooltip{
    width: 200px; /* Width of tooltips. */
    top: 80%;
    left: 50%;
}
.drhubTooltip>.drhubTooltipText:before{
    top: -15px;
    left: 40%; /* Position of a triangular portion of a tooltip. */
}
```