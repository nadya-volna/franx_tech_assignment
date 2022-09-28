class loginPage {
    elements = {
      usernameInput: () => cy.get("#userName"),
      passwordInput: () => cy.get("#password"),
      loginBtn: () => cy.get("#login")
    };

    Login(username,password){
        this.elements.usernameInput().type(username);
        this.elements.passwordInput().type(password);
        this.elements.loginBtn().click();
    }
  }
  
  module.exports = new loginPage();