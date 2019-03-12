export const validationForm  = function (model) {
  const form = model;
  let valid = true;
  const dangerColor = '#ff3860';
  resetField(form.form)
  if (form.inputBody.value.length > 30 || !form.inputBody.value) {
     form.inputBody.style.borderColor = dangerColor
     valid = false
  }

  if (form.inputAmount.value.length > 8 || !form.inputAmount.value) {
     form.inputAmount.style.borderColor = dangerColor
     valid = false
  }
  return valid
}

function resetField(form) {
    const basicColor = '#dbdbdb'
    const inputs = form.querySelectorAll('input.input')
    inputs.forEach(input => {
      input.style.borderColor = basicColor
    })
}
