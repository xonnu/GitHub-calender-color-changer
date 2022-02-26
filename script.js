const root = document.documentElement;

const setProperty = (property, color) => {
  return root.style.setProperty(property, color);
}

const setStyle = (element, style_property) => {
  return element != null ?  style_property : false
}

const changeCalendarColor = (chosen_color) => {
  const color_L1 = `${chosen_color}50`
  const color_L2 = `${chosen_color}88`
  const color_L3 = `${chosen_color}99`

  for (let index = 1; index <= 4; index++) {
    let calendar_day_property_name = `--color-calendar-graph-day-L${index}-bg`;

    if (index == 1) {
      setProperty(calendar_day_property_name, color_L1)
    } else if (index == 2) {
      setProperty(calendar_day_property_name, color_L2)
    } else if (index == 3) {
      setProperty(calendar_day_property_name, color_L3)
    } else if (index == 4) {
      setProperty(calendar_day_property_name, chosen_color)
    }
  }

  setProperty("--color-calendar-graph-day-bg", `${chosen_color}10`) // no contribution day in calendar
  setProperty("--color-primer-border-active", chosen_color) // active tab color in profile page
  
  // change pro badge color
  setProperty("--color-done-fg", chosen_color)
  setProperty("--color-done-emphasis", chosen_color)

  let path_stroke = document.querySelector('.js-highlight-blob');

  if (path_stroke != null) {
    path_stroke.setAttribute('fill', chosen_color);
    path_stroke.setAttribute('stroke', chosen_color)
  }
}

const default_color = '#3489eb';

chrome.storage.sync.get(["github_calendar_color"], (result) => {
  changeCalendarColor(result.github_calendar_color || default_color)
})

chrome.storage.onChanged.addListener((changes) => {
  changeCalendarColor(changes.github_calendar_color.newValue)
});