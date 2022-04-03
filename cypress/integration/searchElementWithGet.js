describe('formas de encontrar un elemento',function(){
    it('buscar en el buscador', function(){
        cy.visit('http://automationpractice.com/index.php');
        //este tiene espacios, los espacios son remplazados por .
        cy.get('.search_query.form-control.ac_input').type('Hola');//otra forma de mapear elementos usando el inspector del navegador, cuando es por el clase comienza con punto al inicio
        cy.get('#search_query_top').type(' como te va');//mapeo por id es con #
        cy.get('[name="search_query"]').type(' me va muy bien');//por otro elemento se encierra entre corchetes
        cy.get('[placeholder="Search"]').clear();//borra lo que esta en el elemento
    });
})