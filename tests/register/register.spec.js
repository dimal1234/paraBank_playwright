import { test, expect } from '@playwright/test';
import { config } from 'dotenv';
const {Register} = require('../../pages/register.page.js');
const registerData = require('../../testData/data.json'); 


config(); // Load environment variables from .env

test('Register new customer', async ({ page }) => {
  // Navigate to the registration page
  await page.goto(process.env.BASE_URL);
  await page.getByRole('link', { name: 'Register' }).click();
//console.log(process.env.BASE_URL);
  // Create an instance of the Register page object

const register = new Register(page);
//await register.navigateToRegister();


  // Fill in the registration form with data from registerData
  await register.fillRegistrationForm(registerData.newUser);


  // Submit the registration form
  await register.submitRegistration();

 


});
