(function() {
    let datePicker = {};
    datePicker.getMonthDate = function (year, month) {
      let ret = [];
      if (!year || !month) {
        let today = new Date();
        year = today.getFullYear();
        month = today.getMonth() + 1;
      }
      let firstDay = new Date(year, month - 1, 1);
      let firstDate = firstDay.getDate();
      let firstWeekDay = firstDay.getDay();
  
      let lastDay = new Date(year, month, 0);
      let lastDate = lastDay.getDate();
      let lastWeekDay = lastDay.getDay();
  
      let lastDayOfLastMonth = new Date(year, month - 1, 0);
      let lastDateOfLastMonth = lastDayOfLastMonth.getDate();
      let lastWeekDayOfLastMonth = lastDayOfLastMonth.getDay();
      if(firstWeekDay !== 0){
        let prevMonth = month - 1;
        if(prevMonth === 0){
            prevMonth = 12
        }
          for(let i = 1; i <= firstWeekDay;i++){
              ret.push(
                  {
                      month:prevMonth,
                      date:i-firstWeekDay ,
                      showDate:lastDateOfLastMonth-firstWeekDay+i,
                      isCurrentMonth:false,
                  }
              )
          }
      }
          for(let i=1;i<=lastDate;i++){
              ret.push({
                  month:month,
                  date:i,
                  showDate:i,
                  isCurrentMonth:true,
              })
          }
      if(lastWeekDay !== 6){
        let nextMonth = month + 1;
        if(nextMonth === 13){
            nextMonth = 1
        }
          let weekDayOffset = 6 - lastWeekDay
          for(let i=1;i<=weekDayOffset;i++ ){
              ret.push({
                  month:nextMonth,
                  date:lastDate + i,
                  showDate: i,
                  isCurrentMonth:false
              })
          }
      }
      return {
        year:year,
        month:month,
        monthData:ret,
      }
    };
    window.datePicker = datePicker;
  })()
