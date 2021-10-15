

describe('App', () =>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000');
    })


    const firstInput = () => cy.get('input[name=first_name]');
    const lastInput = () => cy.get('input[name=last_name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const roleInput = () => cy.get('select[name=role]');
    const termCheckbox = () => cy.get('[type="checkbox"]').check()
    const submitBtn = () => cy.get('button[id="submitBtn"]');

    it('plz work', ()=>{
        expect(1+2).to.equal(3);
    })



    it('the proper elements are showing', ()=>{
        firstInput().should('exist');
        lastInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        roleInput().should('exist');
        termCheckbox().should('exist');
        submitBtn().should('exist');
    })

   

    describe('Filling out inputs and submit!',()=>{
        
        it('submit button starts out disabled', () =>{
            submitBtn().should('be.disabled');
        })
        
        
        
        it('can type in the inputs',() =>{
            firstInput().should('have.value','').type('Collyn').should('have.value', 'Collyn');
            lastInput().should('have.value', '').type('Godlewski').should('have.value', 'Godlewski');
            emailInput().should('have.value','').type('Collyngodlewski@gmail.com').should('have.value', 'Collyngodlewski@gmail.com');
            passwordInput().should('have.value','').type('loremipsum').should('have.value','loremipsum');
        });

        it('the submit button enables when both inputs are filled out', ()=>{
            firstInput().type('Collyn');
            lastInput().type('Godlewski');
            emailInput().type('collyn@godlewski.com');
            passwordInput().type('Collyn1!');
            cy.get('select').select('frodo').should('have.value', 'frodo');
            termCheckbox().check();
            submitBtn().should('not.be.disabled');
        })

      
    })

    describe('Check the terms of service box',() => {
        it('check box',() => {
            termCheckbox().check();
        });
    })






})