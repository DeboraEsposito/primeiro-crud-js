'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
  nome: 'Carla',
  email: 'carla@gmail.com',
  celular: '11123459876',
  cidade: 'São Roque'
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) =>   localStorage.setItem('db_client', JSON.stringify(dbClient));

    //CRUD - CREATE READ UPDATE 

//CRUD - Delete

const deleteClient = (index) => {
  const dbClient = readClient();
  dbClient.splice(index, 1);
  setLocalStorage(dbClient);
}

const updateCliente = (index, client) => {
  const dbClient = readClient();
  dbClient[index] = client;
  setLocalStorage(dbClient)
}
    
//CRUD READ
const readClient = () => getLocalStorage();

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