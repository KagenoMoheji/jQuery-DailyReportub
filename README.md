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
5. In .js, you can set DailyReportub by setting some arguments like below.
```
$(function(){
    dailyReportub({
        width : 300,
        height : 400,
        fontColor : "#00F",
        borderColor : "#ccc",
        backgroundColor : "transparent",
        grassColor : "#F00",
        ivents : {
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
- ***width***：
    - Initial value：200
    - Minimum value：200
- ***height***：
    - Initial value：200
    - Minimum value：200
- ***fontColor***：
    - Initial value："#000"
- ***borderColor***：
    - Initial value："#ccc"
- ***backgroundColor***：
    - Initial value："transparent"
- ***grassColor***：
    - Initial value："#0f0"
- ***ivents***：
    - Initail value：None

### DEMO GIF
![DEMO](https://github.com/KagenoMoheji/jQuery-DailyReportub/blob/media/media/DailyReportub.gif)

### And More...
- If you want to re-decorate buttons...
    - You can re-decorate buttons with tag-IDs `drhubPrevMonth` and `drhubNextMonth`.