describe('New Post', () => {
    beforeEach(()=>{
        cy.home_ghost3();
    })

    it('Publicamos un post.', () => {
        cy.access_valid_ghost3();
        
        cy.wait(4000)
        cy.log("And I navigate to page post");
        cy.visit('http://localhost:3001/ghost/#/posts')
        cy.wait(2000)
        cy.log("And I click in prueba post");
        cy.get('a[id="ember99').click()
        cy.wait(2000)
        cy.log("And I click in publish");
        cy.get('div[id="ember147').click()
        cy.wait(2000)
        cy.log("And I click in publish");
        cy.get('button[id="ember208').click()
        cy.wait(2000)
        cy.log("And validate");
        cy.get('span[class="fw4 midgrey-l2"]').should(($span) => {
            const message = $span.text();
            expect(message).contain("Published");
        });
    })
  })