class articlesPage{
    //implementacion con pageobject
    /*constructor(){
        this.banner = '.lighter';
    }
    verifyArticles = (article) =>{
        cy.get(this.banner).contains(article);
    }*/

    verifyArticles = (article) =>{
        cy.fixture('articles.json').then((locators)=>{
            cy.get(locators.banner).contains(article);
        })
    }
}
export default new articlesPage();