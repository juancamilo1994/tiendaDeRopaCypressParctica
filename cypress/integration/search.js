
describe('Search eleemnts', ()=>{

    beforeEach(()=>{
        cy.visit('/');
    })

    it('Search for element with multiple result', ()=>{
        
        cy.fixture('index.json').then((index) =>{
            cy.get(index.searchBox).type("dress");
            cy.get(index.searchButton).click();
        })
        cy.fixture('searchResult.json').then((searchResult)=>{
            cy.get(searchResult.tittle).should('contain', 'dress');
        })
    })

    it('Search for element with no result', ()=>{
        cy.fixture('index.json').then((index) =>{
            cy.get(index.searchBox).type("qwerty");
            cy.get(index.searchButton).click();
        })
        cy.fixture('searchResult.json').then((searchResult)=>{
            cy.get(searchResult.alert).should('contain', 'No results were found for your search');
        })
    })
})