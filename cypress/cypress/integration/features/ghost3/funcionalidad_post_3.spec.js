describe('New Post', () => {
    beforeEach(()=>{
        cy.home_ghost3();
    })

    it('Publicamos un post.', () => {

        cy.access_valid_ghost3();
        cy.wait(4000)
        cy.navigate_post_ghost3();
        cy.click_prueba_post_ghost3();
        cy.click_publish_post_ghost3();
        cy.validate_published_ghost3('Prueba Post');
    })
  })