describe('New Post', () => {
    beforeEach(()=>{
        cy.home_ghost4();
    })

    it('Modificamos un post.', () => {
        cy.access_valid_ghost4();
        cy.wait(4000)
        cy.navigate_post_ghost4();
        cy.click_prueba_post_ghost4();
        cy.enter_tittle_ghost4('2');
        cy.enter_save_ghost4('2');
    })
  })