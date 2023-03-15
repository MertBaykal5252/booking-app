export const useDatePicker = () => {
  const datePicker = document.getElementById("datepicker");

  // Create calendar and append to body
  function createCalendar(month, year) {
    const calendar = document.createElement("div");
    calendar.id = "calendar";
    const calendarHeader = document.createElement("h2");
    calendarHeader.textContent = new Date(year, month - 1).toLocaleString(
      "default",
      { month: "long", year: "numeric" }
    );
    calendar.appendChild(calendarHeader);

    // Add previous and next month buttons
    const prevMonthButton = document.createElement("button");
    prevMonthButton.setAttribute("id", "prev-month");
    prevMonthButton.textContent = "<";
    prevMonthButton.addEventListener("click", () => {
      calendar.remove();
      createCalendar(month - 1, year);
    });
    const nextMonthButton = document.createElement("button");
    nextMonthButton.setAttribute("id", "next-month");
    nextMonthButton.textContent = ">";
    nextMonthButton.addEventListener("click", () => {
      calendar.remove();
      createCalendar(month + 1, year);
    });
    calendarHeader.prepend(prevMonthButton);
    calendarHeader.appendChild(nextMonthButton);

    const table = document.createElement("table");
    table.innerHTML = `
        <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
        </tr>
    `;
    const firstDayOfMonth = new Date(year, month - 1, 1);
    const lastDayOfMonth = new Date(year, month, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const startingDay = firstDayOfMonth.getDay();
    let dayOfWeekCounter = 0;
    let html = "<tr>";
    for (let i = 0; i < startingDay; i++) {
      html += '<td class="disabled"></td>';
      dayOfWeekCounter++;
    }
    for (let i = 1; i <= daysInMonth; i++) {
      html += `<td>${i}</td>`;
      dayOfWeekCounter++;
      if (dayOfWeekCounter === 7) {
        html += "</tr><tr>";
        dayOfWeekCounter = 0;
      }
    }
    html += "</tr>";
    table.innerHTML += html;
    calendar.appendChild(table);
    document.querySelector(".booking__form-item.-date").appendChild(calendar);
    return calendar;
  }

  // Add event listener to date picker input
  datePicker.addEventListener("click", () => {
    // Get today's date
    const today = new Date();

    // Get the current month and year
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear();

    // Generate the calendar for the current year's months starting from the current month
    const calendar = createCalendar(currentMonth, currentYear);

    // Add event listener to calendar cells
    const cells = calendar.querySelectorAll("td");
    cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        // Get the selected date
        const selectedDate = new Date(
          currentYear,
          currentMonth - 1,
          cell.textContent
        );

        // Set the value of the date picker input to the selected date
        datePicker.value = selectedDate.toLocaleDateString("default", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        });

        // Remove the calendar
        calendar.remove();
      });
    });

   
  // Add event listener to today link
  const todayLink = document.getElementById("today");
  todayLink.addEventListener("click", () => {
    // Set the value of the date picker input to today's date
    datePicker.value = today.toLocaleDateString("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    // Remove the calendar if it exists
    if (calendar) {
      calendar.remove();
    }
  });

  // Add event listener to tomorrow link
  const tomorrowLink = document.getElementById("tomorrow");
  tomorrowLink.addEventListener("click", () => {
    // Get tomorrow's date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Set the value of the date picker input to tomorrow's date
    datePicker.value = tomorrow.toLocaleDateString("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    // Add the active class to the tomorrow link
    tomorrowLink.classList.add("active");

    // Remove the calendar if it exists
    if (calendar) {
      calendar.remove();
    }
  });


    // Add event listener to next month button
    const nextMonthBtn = calendar.querySelector("#next-month");
    nextMonthBtn.addEventListener("click", () => {
      // Get the current month and year
      const currentMonth = parseInt(calendarHeader.dataset.month);
      const currentYear = parseInt(calendarHeader.dataset.year);

      // Generate the calendar for the next month
      const nextMonth = currentMonth === 12 ? 1 : currentMonth + 1;
      const nextYear = currentMonth === 12 ? currentYear + 1 : currentYear;
      const calendar = createCalendar(nextMonth, nextYear);

      // Replace the old calendar with the new one
      const oldCalendar = document.getElementById("calendar");
      oldCalendar.replaceWith(calendar);
    });

    // Add event listener to previous month button
    const prevMonthBtn = calendar.querySelector("#prev-month");
    prevMonthBtn.addEventListener("click", () => {
      // Get the current month and year
      const currentMonth = parseInt(calendarHeader.dataset.month);
      const currentYear = parseInt(calendarHeader.dataset.year);

      // Generate the calendar for the previous month
      const prevMonth = currentMonth === 1 ? 12 : currentMonth - 1;
      const prevYear = currentMonth === 1 ? currentYear - 1 : currentYear;
      const calendar = createCalendar(prevMonth, prevYear);

      // Replace the old calendar with the new one
      const oldCalendar = document.getElementById("calendar");
      oldCalendar.replaceWith(calendar);
    });
  });
};
