sessionStorage.setItem('email', 'godbole.vikrant@gmail.com');

const email=sessionStorage.getItem('email');
console.log(email);

sessionStorage.removeItem('email');

const removedEmail=sessionStorage.getItem('email');
console.log(removedEmail); // null

