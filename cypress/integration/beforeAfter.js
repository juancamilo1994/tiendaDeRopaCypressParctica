describe('search test case', function(){

    before(function(){
        cy.log("Ejecutando precondiciones de las prueba");
    });

    after(function(){
        cy.log("Ejecutando todas los postcondiciones a las pruebas");
    });

    it('search whit result', function(){
        cy.visit('http://automationpractice.com/index.php');
        cy.get('#search_query_top').type('dress');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains('dress');
    });

    it('search whit result', function(){
        cy.visit('http://automationpractice.com/index.php');
        cy.get('#search_query_top').type('hat');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains('hat');
    });
})