(function () {
  let { datePicker } = window;

  let $wrapper;

  datePicker.buildUi = function (year, month) {
    const {
      year: currentYear,
      month: currentMonth,
      monthData,
    } = datePicker.getMonthDate(year, month);
    let html = `
    <div class="datapicker-wrapper">
    <div class="datepicker-header">
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
    </div>
    </div>
    `;
    let wrapper = document.querySelector(".datepicker_container");
    wrapper.innerHTML = html;
    let tbody = document.querySelector(".datepicker-body tbody");
    let formatData = [];
    let len = monthData.length;
    let n = 7;
    let lineNum = len % 7 === 0 ? len / 7 : Math.floor(len / 7 + 1);
    let res = [];
    for (let i = 0; i < lineNum; i++) {
      let temp = monthData.slice(i * n, i * n + n);
      res.push(JSON.parse(JSON.stringify(temp)));
    }
    res.forEach((item) => {
      let tr = document.createElement("tr");
      item.forEach((item) => {
        let td = document.createElement("td");
        if (item.isCurrentMonth !== "current") {
          td.classList.add("not-current-month");
        }
        if (item.isCurrentDay) {
          td.classList.add("current-day");
        }
        td.innerHTML = item.showDate;
        pickMonth = currentMonth;
        switch (item.isCurrentMonth) {
          case "pre":
            pickMonth -= 1;
            break;
          case "next":
            pickMonth += 1;
          default:
            break;
        }
        td.dataset.data = `${currentYear}-${pickMonth}-${item.showDate}`;
        tr.append(td);
      });
      tbody.append(tr);
    });
    let preBtn = document.querySelector(".datepicker-btn-prev");
    let nextBtn = document.querySelector(".datepicker-btn-next");
    preBtn.addEventListener("click", () => {
      let newMonth = currentMonth;
      let newYear = currentYear;
      if (currentMonth - 1 === 0) {
        newMonth = 13;
        newYear = currentYear - 1;
      }
      datePicker.buildUi(newYear, newMonth - 1);
    });
    nextBtn.addEventListener("click", () => {
      let newYear = currentYear;
      let newMonth = currentMonth;
      if (currentMonth + 1 === 13) {
        newMonth = 0;
        newYear = currentYear + 1;
      }
      datePicker.buildUi(newYear, newMonth + 1);
    });
    tbody.addEventListener("click", (e) => {
      console.log(e.target.dataset.data);
    });
  };

  datePicker.unmountUi = () => {
    let wrapper = document.querySelector(".datepicker_container");
    wrapper.innerHTML = ""
  }
  window.datePicker = datePicker;


})();
