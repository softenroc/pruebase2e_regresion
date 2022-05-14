describe('New Post', () => {
    beforeEach(()=>{
        cy.home_ghost3();
    })

    it('Creamos un nuevo post.', () => {
        cy.access_valid_ghost3();
        cy.screenshot();
        cy.wait(4000)
        cy.navigate_post_ghost3();
        cy.screenshot();
        cy.click_new_post_ghost3();
        cy.screenshot();
        cy.enter_tittle_ghost3('Prueba Post');
        cy.screenshot();
        cy.enter_description_ghost3();
        cy.screenshot();
        cy.enter_save_ghost3('Prueba Post');
        cy.screenshot();
    })
  })