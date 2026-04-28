fetch('https://reqres.in/api/users/2', {
    method: 'DELETE',
    headers: {
        'x-api-key': 'free_user_3CyYQdG5bA1MqQlWjZpjkIAknVq'
    }
})
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));