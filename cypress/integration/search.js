
describe('Search eleemnts', ()=>{

    beforeEach(()=>{
        cy.visit('/');
    })

    it('Search for element with multiple result', ()=>{
        
        cy.search('dress');
        cy.fixture('searchResult.json').then((searchResult)=>{
            cy.get(searchResult.tittle).should('contain', 'dress');
        })
    })

    it('Search for element with no result', ()=>{
        cy.search('qwert');
        cy.fixture('searchResult.json').then((searchResult)=>{
            cy.get(searchResult.alert).should('contain', 'No results were found for your search');
        })
    })

    it('search for lements whit especial code', ()=>{
        cy.readFile('cypress/support/Text/search.txt').then((text)=>{//es async por eso esta el then
            cy.search(text);
        });
        cy.fixture('searchResult.json').then((searchResult)=>{
            cy.get(searchResult.alert).should('contain', 'No results were found for your search');
        })
    })
})