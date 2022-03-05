window.addEventListener('load', () => {
  const set_button = document.querySelector('#set-color-btn')
  const set_input = document.querySelector('#set-color-input')
  const set_input_picker = document.querySelector('#set-color-input-picker')

  if (set_button != null && set_input != null) {
    set_input_picker.addEventListener('change', () => {
      chrome.storage.sync.set({
        "github_calendar_color": set_input_picker.value
      }, () => {
        // success message
      })
    })

    set_button.addEventListener('click', () => {
      chrome.storage.sync.set({
        "github_calendar_color": set_input.value
      }, () => {
        // success message
      })
    })
  }
})