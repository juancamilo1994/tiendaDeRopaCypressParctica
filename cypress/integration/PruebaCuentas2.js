describe('Cuentas', function(){

    //asserts mas comunes
    var a=1;
    var b=25;

    it('Vamos a ver una igualdad', function(){
        expect(1==1).to.equal(true);
    });

    it('Vamos a ver una igualdad con argumento en caso de que falle', function(){
        expect(1==2,"ambos terminos deben de ser iguales").to.equal(true);
    });
    
    it('Vamos a ver una que no sea una igualdad', function(){
        expect(1==2).to.equal(false);
    });

    it('Vamos a ver una resta este bien', function(){
        expect(1-1).to.equal(0);
    });

    it('Vamos a ver una resta este bien con arhumento', function(){
        expect(1-2, "se espera que la resta sea cero").to.equal(0);
    });

    it('Vamos a ver una resta no este bien', function(){
        expect(1-1).to.not.equal(2);
    });

    it('tiene que ser verdadero', function(){
        expect(2==2).to.be.true;
    });

    it('tien que ser falso', function(){
        expect(1==2).to.be.false;
    });

    it('la variable existe', function(){
        expect(a).to.exist;
    });

    it('la variable es menor a 10', function(){
        expect(a).to.be.lessThan(10);
    });

    it('la variable es mayor a 10', function(){
        expect(b).to.be.greaterThan(10);
    });
})