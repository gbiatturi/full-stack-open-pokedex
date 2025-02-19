describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('page changes when click next', function() {
    cy.visit('http://localhost:5000')
    cy.get('a.list-item:nth-child(2)').click()
    cy.contains('ivysaur')
    cy.contains('chlorophyll')
  })
})