describe('Go to differents sections', function(){

    beforeEach(function(){
        cy.visit("http://automationpractice.com/index.php");
    });

    it('Go to women section', function(){
        //cy.get('[class="sf-with-ul"]').click(); //como existen multiples elementos con el mismo class, no se puede seleccionar
        cy.get('[class="sf-with-ul"]').first().click();
    })

    it('Go to DRESS section', function(){
        cy.get('[class="sf-with-ul"]').eq(3).click();//eq nos pemrite buscar la posicion del elemento que queremos
    })
})