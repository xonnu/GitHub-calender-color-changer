let root = document.documentElement;
const LOCAL_STORAGE_KEY = 'github-contribution-theme';

const setProperty = (property, color) => {
  return root.style.setProperty(property, color);;
}

let chosen_color = '#ff66c7';
let color_L1 = `${chosen_color}50`
let color_L2 = `${chosen_color}88`
let color_L3 = `${chosen_color}99`

for (let index = 1; index <= 4; index++) {
  let property_name = `--color-calendar-graph-day-L${index}-bg`;
  if(index == 1) {
    setProperty(property_name, color_L1)
  } else if (index == 2) {
    setProperty(property_name,  color_L2)
  } else if (index == 3) {
    setProperty(property_name,  color_L3)
  } else if (index == 4) {
    setProperty(property_name, chosen_color)
  }
}

let path_stroke = document.querySelector('.js-highlight-blob');

if(path_stroke != null) {
  path_stroke.setAttribute('fill', chosen_color);
  path_stroke.setAttribute('stroke', chosen_color)
}