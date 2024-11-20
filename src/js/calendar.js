document.addEventListener("DOMContentLoaded", () => {
    const datesElement = document.getElementById("dates");
    const currentMonthElement = document.getElementById("currentMonth");

    const targetMonth = dayjs("2025-03-01"); // 2025년 3월로 고정
    const selectedDate = dayjs("2025-03-22"); // 기본 선택 날짜

    // 현재 월 표시
    currentMonthElement.innerHTML = `
        <div style="font-size: 1.5rem">2025.03.22</div>
        <div style="margin: 10px auto">토요일 오후 12시</div>
    `

    // 캘린더 렌더링
    function renderCalendar() {
        const startOfMonth = targetMonth.startOf("month");
        const endOfMonth = targetMonth.endOf("month");
        const startDate = startOfMonth.startOf("week");
        const endDate = endOfMonth.endOf("week");


        let datesHtml = "";
        let current = startDate;

        const sunday = [2, 9 ,16, 23, 30]

        while (current.isBefore(endDate, "day")) {
            const isCurrentMonth = current.isSame(targetMonth, "month");
            const isSelected = current.isSame(selectedDate, "day");

            if(current.month() === 1 || current.month() === 3) {
                datesHtml += `
                    <div
                      class="date ${isCurrentMonth ? "" : "other-month"} ${isSelected ? "selected" : ""}"
                      data-date="${current.format("YYYY-MM-DD")}"
                    >
                    </div>
                  `;
            } else {
                datesHtml += `
                    <div 
                      class="date ${isCurrentMonth ? "" : "other-month"} ${isSelected ? "selected" : ""}" 
                      style="${current.day() === 0 && "color: red"}"
                      data-date="${current.format("YYYY-MM-DD")}"
                    >
                      ${current.date()}
                    </div>
                  `;
            }

            current = current.add(1, "day");
        }

        datesElement.innerHTML = datesHtml;
    }

    renderCalendar();
});