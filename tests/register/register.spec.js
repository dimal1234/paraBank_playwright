import { test, expect } from '@playwright/test';
import { config } from 'dotenv';
const {Register} = require('../../pages/register.page.js');
const registerData = require('../../testData/data.json'); 

config(); // Load environment variables from .env

test('Register new customer', async ({ page }) => {
  //const baseURL = process.env.BASE_URL;
  //await page.goto(baseURL);

const register = new Register(page);
await register.navigateToRegister();

  // Fill in the registration form with data from registerData
  await register.fillRegistrationForm(registerData);

  // Submit the registration form
  await register.submitRegistration();

  // Verify successful registration by checking for a confirmation message or redirect
  await expect(page).toHaveURL(/.*registerSuccess/);
  await expect(page.getByText('Your account was created successfully.')).toBeVisible();

});
