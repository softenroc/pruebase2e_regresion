describe('New Post', () => {
    beforeEach(()=>{
        cy.home_ghost4();
    })

    it('Creamos un nuevo post.', () => {
        cy.access_valid_ghost4();
        cy.wait(4000)
        cy.navigate_post_ghost4();
        cy.screenshot();
        cy.click_new_post_ghost4();
        cy.screenshot();
        cy.enter_tittle_ghost4('Prueba Post');
        cy.screenshot();
        cy.enter_description_ghost4();
        cy.screenshot();
        cy.enter_save_ghost4('Prueba Post');
        cy.screenshot();
    })
  }) 