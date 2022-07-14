
const blogpostHandler = async (event) => {
  event.preventDefault()
  // const username = document.getElementById('registerUsernameInput').value
  // const password = document.getElementById('registerPasswordInput').value

  let newPost = {
    title: document.getElementById('blogTitleInput').value,
    content: document.getElementById('blogContentInput').value
  }
  console.log(newPost)
  axios.post('/api/users/register', newPost)
    .then(res => {
      console.log(res)

    })
}




document.querySelector('#blogpostForm').addEventListener('submit', blogpostHandler)