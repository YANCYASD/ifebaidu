(function () {
  let { datePicker } = window;

  let $wrapper;

  datePicker.buildUi = function (year, month) {
    const {
      year: currentYear,
      month: currentMonth,
      monthData,
    } = datePicker.getMonthDate(year, month);
    let html = `<div class="datepicker-header">
        <a href="#" class="datepicker-btn-prev">&lt;</a>
        <span class="datepicker-curr-month">${currentYear}-${currentMonth}</span>
        <a href="#" class="datepicker-btn-next">&gt;</a>
    </div>
    <div class="datepicker-body">
        <table>
            <thead>
                <tr>
                    <th>日</th>
                    <th>一</th>
                    <th>二</th>
                    <th>三</th>
                    <th>四</th>
                    <th>五</th>
                    <th>六</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>`;
    let wrapper = document.querySelector(".datapicker-wrapper")   
    wrapper.innerHTML = html;
    let tbody = document.querySelector(".datepicker-body tbody")
    let formatData = [];
    let len = monthData.length;
    let n = 7;
    let lineNum = len % 7 === 0 ? len/7 : Math.floor((len/7)+1)
    console.log(lineNum);
    let res = [];
    for(let i = 0;i < lineNum;i++) {
        let temp = monthData.slice(i*n,i*n+n);
        res.push(JSON.parse(JSON.stringify(temp)))
    }
    res.forEach(item=>{
        let tr = document.createElement("tr");
        item.forEach(item=>{
            let td = document.createElement("td")
            if(!item.isCurrentMonth){
                td.classList.add("not-current-month")
            }
            if(item.isCurrentDay){
                td.classList.add("current-day")
            }
            td.innerHTML = item.showDate
            tr.append(td)
        }) 
        tbody.append(tr);
    })
    let preBtn = document.querySelector(".datepicker-btn-prev")
    let nextBtn = document.querySelector(".datepicker-btn-next")
    preBtn.addEventListener("click",()=>{
        let newYear = currentYear;
        let newMonth = currentMonth;
        if(currentMonth - 1 === 0){
            newYear-=1;
        }
        newMonth--;
        if(newMonth-1 === 0){
            newMonth = 12
        }
        datePicker.buildUi(newYear,(new Date(newYear,newMonth).getMonth()));
    })
    nextBtn.addEventListener("click",()=>{
        let newYear = currentYear;
        let newMonth = currentMonth;
        if(currentMonth + 1 === 13){
            newYear+=1;
        }
        datePicker.buildUi(newYear,(new Date(newYear,currentMonth+1).getMonth()));
    })
  };
  window.datePicker = datePicker;
})();
