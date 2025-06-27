module.exports = {
    links:{
        register: 'a:has-text("Register")'

    },
    inputs: {
    firstName: 'input[name="customer.firstName"]',
    lastName: 'input[name="customer.lastName"]',
    addressStreet: 'input[name="customer.address.street"]',
    addressCity: 'input[name="customer.address.city"]',
    addressState: 'input[name="customer.address.state"]',
    addressZip: 'input[name="customer.address.zipCode"]',
    phone: 'input[name="customer.phoneNumber"]',
    ssn:'input[name="customer.ssn"]',

    //User credentials
    userName: 'input[name="customer.username"]',
    password: 'input[name="customer.password"]',
    confirmPw: 'input[name="repeatedPassword"]',

    register: 'input[value="Register"]'
    },
   
};