Given('item valido', () => {
	cy.visit("https://opuscapita.github.io/react-grid/#/default"); //Entrando no site
    cy.get('button[id="oc-datagrid-controls-create-TestGrid"]').click(); //Clicando no botão de adicionar
});

When('é requisitada a inserção das descrições {string} {string} {string} {string} {string} {string} do item', (nome, preco, estoque, país, moeda, dataDeModificação) => {
    cy.get('input[id="ocDatagridCreateInput-TestGrid-name-0"]').type(nome); //Digitando o nome do elemento
    cy.get('input[id="ocDatagridCreateInput-TestGrid-price-0"]').type(preco); //Digitando o preço do elemento
    cy.get('input[id="ocDatagridCreateInput-TestGrid-stock-0"]').type(estoque); //Digitando o estoque do elemento
    cy.get('[id="ocDatagridCell-TestGrid-country-0"]').type(país + '{enter}'); //Digitando o país do elemento 
    cy.get('[id="ocDatagridCell-TestGrid-currency-0"]').type(moeda + '{enter}'); //Digitando a moeda do elemento
    cy.get('[id="ocDatagridCreateInput-TestGrid-modified-0"]').type(dataDeModificação + '{enter}'); //Digitando a data de modificação do elemento
});


When('excluo os novos campos que apareceram porque a tecla ENTER foi usada', () => {
    cy.get('[id="oc-datagrid-new-item-remove-TestGrid-1"]').click().dblclick();
});

Then('clico no botão salvar', () => {
	cy.get('button[id="oc-datagrid-controls-save-TestGrid"]').click(); //Clicando no botão "Save"
});

Then('valida se o item foi inserido corretamente na tabela {string} {string} {string} {string} {string} {string}', (nome, preço, estoque, país, moeda ,dataDeModificação) => {
	cy.contains(nome); 
    cy.contains(preço); 
    cy.contains(estoque); 
    cy.contains(país);
    cy.contains(moeda);
    cy.contains(dataDeModificação); 
});
