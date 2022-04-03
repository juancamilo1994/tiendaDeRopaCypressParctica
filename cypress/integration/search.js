describe('search test case', function(){
    it('search whit result', function(){
        cy.visit('http://automationpractice.com/index.php');//abrir la pagina
        cy.get('#search_query_top').type('dress');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains('dress');
    });
})