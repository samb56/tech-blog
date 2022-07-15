


// Register Input Information //

const registerHandler = async (event) => {
  event.preventDefault()
  const usernameInput = document.getElementById('registerUsernameInput').value
  const passwordInput = document.getElementById('registerPasswordInput').value

  // let newUser = {
  //   username: document.getElementById('registerUsernameInput').value,
  //   password: document.getElementById('registerPasswordInput').value
  // }

  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameInput,
      password: passwordInput,
    }),
    headers: { 'content-type': 'application/json' }
  })
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('registration of account failed');
  }
}


const loginHandler = async (event) => {
  event.preventDefault()


  const usernameLogin = document.getElementById('loginUsernameInput').value
  const passwordLogin = document.getElementById('loginPasswordInput').value

  console.log(usernameLogin)
  console.log(passwordLogin)
  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameLogin,
      password: passwordLogin,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to login');
  }

}

//------------------------ SUBMIT BUTTON QUERY SELECTORS ----------------------------------//
document.querySelector('#registerForm').addEventListener('submit', registerHandler)
document.querySelector('#loginForm').addEventListener('submit', loginHandler)