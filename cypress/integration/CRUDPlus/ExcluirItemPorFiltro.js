Given('que exista item na lista do banco de dados', () => {
	cy.visit("/"); //Entrado na pagina
    cy.get('[class="fixedDataTableRowLayout_main public_fixedDataTableRow_main public_fixedDataTableRow_even oc-datagrid-row public_fixedDataTable_bodyRow"]')
    .should('exist'); //Veficiando se ha pelo menos um elemento na tabela
});

Then('que exista um item na lista com o tipo de moeda {string}', (moeda) => {
	cy.contains(moeda); //Verificando se existe algum elemento na lista com o tipo de moeda "EUR"
});

When('eu abro o menu de filtros', () => {
	cy.get('[id="TestGrid"]').click(); //Abrindo o menu 
    cy.get('[id="TestGrid-menu-item-filtering"]').click(); //Usando o "Show filter row"
});

When('seleciono o tipo de moeda {string} que eu quero filtrar', (moeda) => {
	cy.xpath('//*[@id="ocDatagridHeader-TestGrid-currency"]/div/div/div/div[2]/div/div')
    .click().type(moeda + '{enter}'); //Abrindo o filtro de moeda e digitando "EUR"
});

When('seleciono todos os item com o mesmo tipo de moeda', () => {
	cy.get('[id="ocDatagridSelectAllCheckBox-TestGrid"]').click(); //Clicando na opção de selecionar todos os itens
});

Then('peço para o site excluir todos os item selecionados', () => {
	cy.get('[id="TestGrid"]').click(); //Abrindo o menu 
    cy.get('[id="TestGrid-menu-item-delete"]').click(); //Clicando no botão "Delete"
});

Then('verifico se todos os itens selecionados foram exlcluidos', () => {
	cy.get('[class="fixedDataTableRowLayout_main public_fixedDataTableRow_main public_fixedDataTableRow_even oc-datagrid-row public_fixedDataTable_bodyRow"]')
	.should('not.exist'); //Veficiando se todos os elementos selecionados foram excluidos
	cy.screenshot();
});