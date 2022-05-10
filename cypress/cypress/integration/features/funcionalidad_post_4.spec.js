describe('New Post', () => {
    beforeEach(()=>{
        cy.log("Given I navigate to admin page");
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.wait(4000)
    })

    it('Publicamos un post.', () => {
        cy.access_valid();
        
        cy.wait(4000)
        cy.log("And I navigate to page post");
        cy.visit('http://localhost:2368/ghost/#/posts')
        cy.wait(2000)
        cy.log("And I click in prueba post");
        cy.get('a[id="ember99').click()
        cy.wait(2000)
        cy.log("And I click in config");
        cy.get('button[class="post-settings"]').click()
        cy.wait(2000)
        cy.log("And I click in delete");
        cy.get('button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]').click()
        cy.wait(2000)
        cy.log("And I click in delete");
        cy.get('button[id="ember211"]').click()
        cy.wait(2000)
        cy.log("And validate");
        cy.get('ol[class="posts-list gh-list "]').find('li').its('length').should('eq', 8)
    })
})