export const setAuthToken = (user) =>{

const currentUser = {
        email:user.email
    }
    // get JWT token

    fetch('https://genius-car-server-swart-three.vercel.app/jwt', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data)
        // local storage is the easiest but not the best place to storage data
        localStorage.setItem('genius-token', data.token);
        
      })
}