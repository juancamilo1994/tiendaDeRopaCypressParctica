import indexPage from '../support/pages/index';
import articlesPage from '../support/pages/articles';
describe('search test case', function(){

    before(function(){
        cy.log("Ejecutando precondiciones de las prueba");
    });

    after(function(){
        cy.log("Ejecutando todas los postcondiciones a las pruebas");
    });

    // este before y afcter each se usan para cada assert es decir el test case
    beforeEach(function(){
        cy.visit('http://automationpractice.com/index.php');
    });

    afterEach(function(){
        cy.log('poniendo datos a su estado original');

    });

    it('search whit result', function(){
        indexPage.search('dress');
        /*cy.get('#search_query_top').type('dress');
        cy.get('#searchbox > .btn').click();*/
        //cy.get('.lighter').contains('dress');
        //cy.log('i am searching for dresses');
        cy.logSpecFormat('i am searching for dresses');//haciendo uso de comando
        articlesPage.verifyArticles('dress');
    });

    it('search whit result', function(){
    
        indexPage.search('hat');
        /*cy.get('#search_query_top').type('hat');
        cy.get('#searchbox > .btn').click();*/
        //cy.get('.lighter').contains('hat');
        articlesPage.verifyArticles('hat');
    });
})