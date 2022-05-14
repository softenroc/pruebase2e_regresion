describe('New Post', () => {
    beforeEach(()=>{
        cy.home_ghost4();
    })

    it('Publicamos un post.', () => {
        cy.access_valid_ghost4();
        cy.wait(4000)
        cy.navigate_post_ghost4();
        cy.click_prueba_post_ghost4();
        cy.click_publish_post_ghost4();
        cy.validate_published_ghost4('Prueba Post');
    })
  })