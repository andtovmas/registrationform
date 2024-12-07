import { registrationForm } from "../../pages/registrationForm";
import { DATA } from "../../utils/data";

const invalidUsername = "Jo";
const invalidEmail = "invalidEmail.gmail.com";
const invalidPhone = "111222";
const phone = "0001112222";
const email = "example@gmail.com";
let username = DATA.generateRandomName(5);
describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Verify registration with empty fields", () => {
    registrationForm.getUsernameInput().click();
    registrationForm.getEmailInput().click();
    registrationForm.getPhoneInput().click();
    registrationForm.getSubmitButton().click({ force: true });
    registrationForm.getSubmitButton().should("be.disabled");
    registrationForm
      .getUsernameErrorMessage()
      .should("contain", registrationForm.messages.requiredUserName);
    registrationForm
      .getEmailErrorMessage()
      .should("contain", registrationForm.messages.requiredEmail);
    registrationForm
      .getPhoneErrorMessage()
      .should("contain", registrationForm.messages.requiredPhone);
  });
  it("Verify registration for with invalid credentials format", () => {
    registrationForm.getUsernameInput().type(invalidUsername);
    registrationForm
      .getUsernameErrorMessage()
      .should("contain", registrationForm.messages.usernameFormat);
    registrationForm.getEmailInput().type(invalidEmail);
    registrationForm
      .getEmailErrorMessage()
      .should("contain", registrationForm.messages.invalidEmailFormat);
    registrationForm.getPhoneInput().type(invalidPhone);
    registrationForm
      .getPhoneErrorMessage()
      .should("contain", registrationForm.messages.phoneFormat);
  });
  it("Verify registration form with valid credentials", () => {
    registrationForm.getUsernameInput().type(username);
    registrationForm.getEmailInput().type(email);
    registrationForm.getPhoneInput().type(phone);
    registrationForm.getSubmitButton().should("not.be.disabled");
    registrationForm.getSubmitButton().click();
    registrationForm
      .getSuccessfullyRegistrationCenter()
      .should("contain", registrationForm.messages.successfullyRegistration);
    registrationForm.getViewCustomersButton().click();
    registrationForm
      .getCustomerRow(email)
      .should("contain", username)
      .and("contain", email);
  });
  it("Verify registration form duplicate credentials", () => {
    registrationForm.getUsernameInput().type(username);
    registrationForm.getEmailInput().type(email);
    registrationForm.getPhoneInput().type(phone);
    registrationForm.getSubmitButton().should("not.be.disabled");
    registrationForm.getSubmitButton().click();
    registrationForm
      .getSuccessfullyRegistrationCenter()
      .should("contain", registrationForm.messages.successfullyRegistration);
    registrationForm.getBackToRegistrationButton().click();
    registrationForm.getUsernameInput().type(username);
    registrationForm.getEmailInput().type(email);
    registrationForm.getPhoneInput().type(phone);
    registrationForm.getSubmitButton().should("be.disabled");
    registrationForm
      .getUsernameErrorMessage()
      .should("contain", registrationForm.messages.uniqueUsername);
  });
});
