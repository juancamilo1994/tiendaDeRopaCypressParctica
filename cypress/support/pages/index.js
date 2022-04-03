//page objes index page 

class indexPage{

    //implementacion con pageobject
    /*constructor(){
        this.searchInput = '#search_query_top';
        this.searchButton = '#searchbox > .btn';
    }*/

    /*search = (elemento) =>{
        cy.get(this.searchInput).type(elemento);
        cy.get(this.searchButton).click();
    }*/

    //implemntacion con fixtures
    search = (elemento) =>{
        cy.fixture('index.json').then((locators)=>{
            cy.get(locators.searchInput).type(elemento);
            cy.get(locators.searchButton).click();
        })
    }

}

export default new indexPage();