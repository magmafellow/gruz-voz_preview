

const triggerLeaveRequest = document.querySelector('.leave-request-open')
const dialogElement = document.querySelector('#leave-request-dialog')
const dialog = new A11yDialog(dialogElement)
const closeDialogButton = document.querySelector('.leave-request-close')

console.log('triggerLeaveRequest: ', triggerLeaveRequest)

function showDialog() {
  document.body.classList.add('scroll-lock')
  dialog.show()
}

function closeDialog() {
  dialog.hide()
  document.body.classList.remove('scroll-lock')
}

triggerLeaveRequest.addEventListener('click', showDialog)
closeDialogButton.addEventListener('click', closeDialog)
