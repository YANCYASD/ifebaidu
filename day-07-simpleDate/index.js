let container = document.querySelector(".container");
    window.timer = setInterval(() => {
      var newDate = new Date();
      // console.log(newDate.toISOString());
      container.innerHTML = formDate(newDate);
    }, 1000);

    function formDate(date) {
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();

      let millisecond = date.getMilliseconds();

      return `${year}年${formatTime(month)}月${formatTime(day)}日 ${getWeekDay(
        date
      )} ${getTime(date)}`;
    }

    function formatTime(data) {
      return data < 10 ? "0" + data : data;
    }
    function getWeekDay(date) {
      const dayMap = {
        1: "一",
        2: "二",
        3: "三",
        4: "四",
        5: "五",
        6: "六",
        0: "日",
      };
      let dateDay = date.getDay();
      return `星期${dayMap[dateDay]}`;
    }
    function getTime(date) {
      let hour = date.getHours();
      let minute = date.getMinutes();
      let second = date.getSeconds();
      return `${formatTime(hour)}:${formatTime(minute)}:${formatTime(second)}`;
    }
    // 封装一个函数，判断某年某月的 1 号是星期几
    function getWeekInMonth(year, month = 1) {
      const dayMap = {
        1: "一",
        2: "二",
        3: "三",
        4: "四",
        5: "五",
        6: "六",
        0: "日",
      };
      const weekDay = new Date(year + "/" + month + "/" + "01").getDay();
      return `星期${dayMap[weekDay]}`;
    }
    // 判断某一年是否为闰年
    function isLeap(year) {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    }