describe('New Post', () => {
    beforeEach(()=>{
        cy.home_ghost3();
    })

    it('Modificamos un post.', () => {
        cy.access_valid_ghost3();
        cy.wait(4000)
        cy.navigate_post_ghost3();
        cy.click_prueba_post_ghost3();
        cy.enter_tittle_ghost3('2');
        cy.enter_save_ghost3('2');
    })
  })