const { expect } = require('@playwright/test');
const selectors = require('../selectors/register');



class Register {
    constructor(page) {
        this.page = page;
        this.selectors = selectors;
        //const {inputs: selectors} = selectors;
    }

    async navigateToRegister() {
        await this.page.goto(process.env.BASE_URL);
        await this.page.getByRole('link', { name: 'Register' }).click();
    }

    async fillRegistrationForm(data) {
      
        

        await this.page.fill(selectors.firstName, data.firstName);
        await this.page.fill(selectors.lastName, data.lastName);
        await this.page.fill(selectors.addressStreet, data.addressStreet);  
        await this.page.fill(selectors.addressCity, data.addressCity);
        await this.page.fill(selectors.addressState, data.addressState);
        await this.page.fill(selectors.addressZip, data.addressZip);
        await this.page.fill(selectors.phone, data.phone);
        await this.page.fill(selectors.ssn, data.ssn);
        await this.page.fill(selectors.userName, data.userName);
        await this.page.fill(selectors.password, data.password);
        await this.page.fill(selectors.confirmPw, data.confirmPw);

  
    }

    async submitRegistration() {
        await this.page.click('input[value="Register"]');
    }
}
module.exports = {Register} ;