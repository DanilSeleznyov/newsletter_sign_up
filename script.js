function checkForError() {
    let errorSymbols = ['#', '+', '=', '*', ':', ';', '(', ')', '^', '"', '!', ',', '?', ']', '[', '{', '}',]
    for (let index = 0; index < errorSymbols.length; index++) {
        let element = errorSymbols[index];
        if (document.querySelector('.input').value.indexOf(`${element}`) !== -1) {
            showError()
            return
        } else {
            hideError()
        }

    }

    document.querySelector('.input_btn').style.cssText = 'background: linear-gradient(to left,hsl(32, 100%, 60%), hsl(4, 100%, 67%) );'
}

function showError() {
    document.querySelector('.error').style.display = 'block'
    document.querySelector('.input').style.cssText = 'background:hsla(4, 100%, 78%, 0.55); border:hsla(5, 100%, 82%, 0.6) ;'
}
function hideError() {
    document.querySelector('.error').style.display = 'none'
    document.querySelector('.input').style.cssText = 'background:hsla(4, 100%, 78%, 0.0);'
}

function showSuccess() {
    const success = `
    <div class="success">
        <img src="assets/images/icon-success.svg" alt="" />
        <h2>Thanks for subscribing!</h2>
        <p>
          A confirmation email has been sent to
          <span class="success_email"><a href="http://${document.querySelector('.input').value}">${document.querySelector('.input').value}</a></span>. Please open it and click the
          button inside to confirm your subscription.
        </p>
        <button class="success_btn" onclick="hideSuccess()">Dismiss message</button>
      </div>
    `
    if (document.querySelector('.error').style.display === 'none' &&
        document.querySelector('.input').value !== '' &&
        document.querySelector('.input').value.indexOf('@') !== -1) {
        document.querySelector('.container').innerHTML = success
    }
}

function hideSuccess() {
    document.querySelector('.success').remove()
}