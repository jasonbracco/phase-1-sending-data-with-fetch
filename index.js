
//document.addEventListener('DOMContentLoaded', () =>{
    
    function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"      
    },
    body: JSON.stringify({
        "name": name,
        "email": email
    }),
    })
    .then((res) => res.json()) 
    .then((user) => addToDOM(user))
    .catch((error) => errorAlert(error))

}

function addToDOM(user){
    let fullUser = document.createElement('p')
    let fullUserId = user.id
    fullUser.textContent = `${fullUserId}`
    document.body.appendChild(fullUser)
}

function errorAlert(error){
    let errorMessage = document.createElement('div')
    errorMessage.textContent = 'Unauthorized Access'
    document.body.appendChild(errorMessage)
}


submitData()