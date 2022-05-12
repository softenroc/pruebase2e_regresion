describe('New Post', () => {
    beforeEach(()=>{
        cy.home_ghost3();
    })

    it('Modificamos un post.', () => {
        cy.access_valid_ghost3();
        
        cy.wait(4000)
        cy.log("And I navigate to page post");
        cy.visit('http://localhost:3001/ghost/#/posts')
        cy.wait(2000)
        cy.log("And I click in prueba post");
        cy.get('a[id="ember99').click()
        cy.wait(2000)
        cy.log("And I enter title modificated");
        cy.get('textarea[id="ember150"]').type(' 2')
        cy.wait(2000)
        cy.log("And I save");
        cy.get('a[id="ember144').click()
        cy.wait(2000)
        cy.log("And I click in prueba post");
        cy.get('a[id="ember250').click()
        cy.wait(2000)
        cy.log("And validate");
        cy.get('textarea[id="ember301"]').should("have.value", "Prueba Post 2");
    })
  })