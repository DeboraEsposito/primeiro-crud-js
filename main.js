'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
  nome: 'Ana',
  email: 'ana@gmail.com',
  celular: '11123459876',
  cidade: 'São Roque'
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) =>   localStorage.setItem('db_client', JSON.stringify(dbClient));

    //CRUD - CREATE READ UPDATE DELETE

//CRUD - CREATE
const createClient = (client) => {
  const dbClient = getLocalStorage();
  dbClient.push(client)
  setLocalStorage(dbClient);

}

    //EVENTOS

  
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)