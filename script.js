const setProperty = (index, color) => {
  return document.documentElement.style.setProperty(`--color-calendar-graph-day-L${index}-bg`, color);;
}

let chosen_color = '#ff66c7';
let color_L1 = `${chosen_color}50`
let color_L2 = `${chosen_color}88`
let color_L3 = `${chosen_color}99`

for (let index = 1; index <= 4; index++) {
  if(index == 1) {
    setProperty(index, color_L1)
  } else if (index == 2) {
    setProperty(index,  color_L2)
  } else if (index == 3) {
    setProperty(index,  color_L3)
  } else if (index == 4) {
    setProperty(index, chosen_color)
  }
}

let path_stroke = document.querySelector('.js-highlight-blob');
path_stroke.setAttribute('fill', chosen_color);
path_stroke.setAttribute('stroke', chosen_color)