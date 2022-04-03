describe('Pruebas en el sitio women', function(){
    beforeEach(function(){
        cy.visit("http://automationpractice.com/index.php?id_category=3&controller=category");
    });

    //checks
    it("Large tops search", function(){
        cy.get('#layered_category_4').check();
        cy.get('#layered_id_attribute_group_3').check();

        //ahora a descheckiar
        cy.get('#layered_id_attribute_group_3').uncheck();
        cy.get('#layered_category_4').uncheck();
    });

    //select
    it('Order by Highest price', function(){
        cy.get('#selectProductSort').select('Price: Highest first');
    });
})