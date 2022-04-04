
describe('Login', ()=>{
    beforeEach(()=>{
        cy.visit('/');
    })

    it('login incorrect', ()=>{
        cy.login('email', '123456');
        cy.fixture('login').then((login)=>{
            cy.get(login.incorrectLoginBanner).should('contain','Invalid email address');
        }) 
    })
})