describe('New Post', () => {
    beforeEach(()=>{
        cy.home_ghost3();
    })

    it('Eliminamos un post.', () => {
        cy.access_valid_ghost3();
        cy.wait(4000)
        cy.navigate_post_ghost3();
        cy.click_prueba_post_ghost3();
        cy.click_settings_post_ghost3();
        cy.click_delete_post_ghost3();
        cy.validate_delete_post_ghost3();
    })
})