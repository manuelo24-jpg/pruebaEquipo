// cypress/integration/imageChange.spec.js

describe('Image Change Test', () => {
    beforeEach(() => {
      // Visita la página principal
      cy.visit('/');
    });
  
    it('should change the image when buttons are clicked', () => {
      // Verifica que la imagen inicial es 'gato.jpg'
      cy.get('img').should('have.attr', 'src', 'gato.jpg');
  
      // Haz clic en el botón 'Perro' y verifica que la imagen cambia a 'perro.jpg'
      cy.contains('button', 'Perro').click();
      cy.get('img').should('have.attr', 'src', 'perro.jpg');
  
      // Haz clic en el botón 'Caballo' y verifica que la imagen cambia a 'caballo.jpeg'
      cy.contains('button', 'Caballo').click();
      cy.get('img').should('have.attr', 'src', 'caballo.jpeg');
  
      // Haz clic en el botón 'Leon' y verifica que la imagen cambia a 'leon.jpg'
      cy.contains('button', 'Leon').click();
      cy.get('img').should('have.attr', 'src', 'leon.jpg');
  
      // Haz clic en el botón 'Gato' y verifica que la imagen cambia a 'gato.jpg'
      cy.contains('button', 'Gato').click();
      cy.get('img').should('have.attr', 'src', 'gato.jpg');
    });
  });