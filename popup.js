const set_button = document.querySelector('#set-color-btn')
const set_input = document.querySelector('#set-color-input')
const LOCAL_STORAGE_KEY = 'github-contribution-theme';

set_button.addEventListener('click', () => {
  if(localStorage.getItem(LOCAL_STORAGE_KEY) == null) {
    localStorage.setItem(LOCAL_STORAGE_KEY, set_input.value)
  }
})