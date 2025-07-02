const { expect } = require('@playwright/test');
const selectors = require('../selectors/register');




class Register {
    constructor(page) {
        this.page = page;
       
    }

    

    async fillRegistrationForm(data) {
      
        

        await this.page.fill(selectors.inputs.firstName, data.firstName);
        await this.page.fill(selectors.inputs.lastName, data.lastName);
        await this.page.fill(selectors.inputs.addressStreet, data.addressStreet);  
        await this.page.fill(selectors.inputs.addressCity, data.addressCity);
        await this.page.fill(selectors.inputs.addressState, data.addressState);
        await this.page.fill(selectors.inputs.addressZip, data.addressZip);
        await this.page.fill(selectors.inputs.phone, data.phone);
        await this.page.fill(selectors.inputs.ssn, data.ssn);
        await this.page.fill(selectors.inputs.userName, data.userName);
        await this.page.fill(selectors.inputs.password, data.password);
        await this.page.fill(selectors.inputs.confirmPw, data.confirmPw);

  
    }

    async submitRegistration() {
        await this.page.click('input[value="Register"]');
    }
}
module.exports = {Register} ;