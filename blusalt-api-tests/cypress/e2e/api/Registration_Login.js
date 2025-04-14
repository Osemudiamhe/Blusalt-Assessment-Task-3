describe('Blusalt API Automation', () => {
  
    it('Should register a new user', () => {
      cy.request({
        method: 'POST',
        url: 'api/register', // Replace with actual API if available
        body: {
          firstname: "Precious",
          lastname: "Ighodalo",
          email: `precious${Date.now()}@test.com`,
          password: "SecurePass123",
          confirm_password: "SecurePass123"
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(201); // or 200 depending on API
      });
    });
  
    it('Should log in with registered user', () => {
      cy.request({
        method: 'POST',
        url: 'api/login', // Replace with actual API if available
        body: {
          email: "existinguser@test.com",
          password: "SecurePass123"
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("token");
      });
    });
  
  });
  