describe('cuentas', function(){
    var a = 1+1;
    var b = 2;
    it('Vamos a ver que se sume bien', function(){// asi es como se pone el caso de prueba el ticket o el nuemro de caso de prueba (mocha)
        expect(a==b).to.equal(true);//esta es la asercion (chai)
    });
    it('Vamos a ver que reste bien', function(){
        expect(a-b).to.equal(0);
    });
})