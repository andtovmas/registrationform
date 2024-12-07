class RegistrationForm {
  messages = {
    requiredUserName: "User Name is required",
    requiredEmail: "Email is required",
    requiredPhone: "Phone is required",
    invalidEmailFormat: "Invalid email format",
    phoneFormat: "Phone format: XXX-XXX-XXXX",
    usernameFormat: "User Name must be at least 3 characters",
    successfullyRegistration:
      "Your registration has been successfully submitted!",
    uniqueUsername: "User Name must be unique",
  };
  getUsernameInput() {
    return cy.get('[data-cy="username-input"]');
  }
  getEmailInput() {
    return cy.get('[data-cy="email-input"]');
  }
  getPhoneInput() {
    return cy.get('[data-cy="phone-input"]');
  }
  getSubmitButton() {
    return cy.get('[data-cy="submit-button"]');
  }
  getUsernameErrorMessage() {
    return cy.get('[data-cy="error-message-username"]');
  }
  getEmailErrorMessage() {
    return cy.get('[data-cy="error-message-email"]');
  }
  getPhoneErrorMessage() {
    return cy.get('[data-cy="error-message-phone"]');
  }
  getSuccessfullyRegistrationCenter() {
    return cy.get(".text-center");
  }
  getViewCustomersButton() {
    return cy.get('[data-cy="view-customers-button"]');
  }
  getCustomerRow(mailName) {
    return cy.get(`[data-cy="customer-row-${mailName}"]`);
  }
  getBackToRegistrationButton() {
    return cy.get('[data-cy="back-to-registration-button"]');
  }
}
export const registrationForm = new RegistrationForm();
