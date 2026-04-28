fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'free_user_3CyYQdG5bA1MqQlWjZpjkIAknVq' 
    },
    body: JSON.stringify({
        name: 'Vikrant',
        job: 'Developer'
    })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));