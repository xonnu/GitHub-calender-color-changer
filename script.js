let root = document.documentElement;

const setProperty = (property, color) => {
  return root.style.setProperty(property, color);
}

const setStyle = (element, style_property) => {
  return (element != null) ?  style_property : false
}

const changeColor = (chosen_color) => {
  var color_L1 = `${chosen_color}50`
  var color_L2 = `${chosen_color}88`
  var color_L3 = `${chosen_color}99`

  for (let index = 1; index <= 4; index++) {
    let property_name = `--color-calendar-graph-day-L${index}-bg`;
    if (index == 1) {
      setProperty(property_name, color_L1)
    } else if (index == 2) {
      setProperty(property_name, color_L2)
    } else if (index == 3) {
      setProperty(property_name, color_L3)
    } else if (index == 4) {
      setProperty(property_name, chosen_color)
    }
  }

  setProperty("--color-calendar-graph-day-bg", `${chosen_color}10`) // no contribution day in calendar
  setProperty("--color-primer-border-active", chosen_color) // tab active state in profile
  
  // chagne pro color
  setProperty("--color-done-fg", chosen_color)
  setProperty("--color-done-emphasis", chosen_color)

  let path_stroke = document.querySelector('.js-highlight-blob');

  if (path_stroke != null) {
    path_stroke.setAttribute('fill', chosen_color);
    path_stroke.setAttribute('stroke', chosen_color)
  }
}

var chosen_color = '#3489eb';

chrome.storage.sync.get(["github_calendar_color"], (result) => {
  changeColor(result.github_calendar_color || chosen_color)
})

chrome.storage.onChanged.addListener((changes, areaName) => {
  changeColor(changes.github_calendar_color.newValue)
});