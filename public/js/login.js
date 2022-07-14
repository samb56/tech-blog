


// Register Input Information //

const registerHandler = async (event) => {
  event.preventDefault()
  // const username = document.getElementById('registerUsernameInput').value
  // const password = document.getElementById('registerPasswordInput').value

  let newUser = {
    username: document.getElementById('registerUsernameInput').value,
    password: document.getElementById('registerPasswordInput').value
  }
  console.log(newUser)
  axios.post('/api/users/register', newUser)
    .then(res => {
      console.log(res)
      window.location = '/'
    })
}


const loginHandler = async (event) => {
  event.preventDefault()

  let loginUser = {
    username: document.getElementById('loginUsernameInput').value,
    password: document.getElementById('loginPasswordInput').value
  }
  console.log(loginUser)
  axios.post('/api/users/login', loginUser)
    .then(res => {
      console.log(res.data)
      let token = res.data
      localStorage.setItem('token', res.data)
      window.location = '/'
    })
}

//------------------------ SUBMIT BUTTON QUERY SELECTORS ----------------------------------//
document.querySelector('#registerForm').addEventListener('submit', registerHandler)
document.querySelector('#loginForm').addEventListener('submit', loginHandler)