describe('App.vue', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should render the animal selector and form', () => {
      cy.get('.pruebaAnimales').should('exist');
      cy.get('.pruebaFormulario').should('exist');
    });
  
    it('should add a new animal and display it in the list', () => {
      cy.get('#nombre').type('Tigre');
      cy.get('#imagen').type('tigre.jpg');
      cy.get('#patas').type('4');
      cy.get('#sonido').type('Rugido');
      cy.get('#color').type('Naranja');
      cy.get('form').submit();
  
      cy.get('.botones button').should('have.length', 5); // 4 iniciales + 1 nuevo
      cy.get('.botones button').last().should('contain', 'Tigre');
    });
  
    it('should display the selected animal details', () => {
      cy.get('.botones button').first().click(); // Selecciona el primer animal
  
      cy.get('h2').should('contain', 'Datos del animal seleccionado:');
      cy.get('p').should('contain', 'Nombre: Gato');
    });
  
    it('should toggle image visibility', () => {
      cy.get('.botones button').last().click(); // Botón de toggle
  
      cy.get('.imagen').should('not.exist');
  
      cy.get('.botones button').last().click(); // Botón de toggle
  
      cy.get('.imagen').should('exist');
    });
  });