import request from './request';

var high =  localStorage.getItem('high')
var water =  localStorage.getItem('water')
var pets =  localStorage.getItem('pets')
var idPlant =  localStorage.getItem('idPlant')
const getPlants = () => request.get(`?sun=${high}&water=${water}&pets=${pets}`); 
const getPlant= () => request.get(`/plant?id=${idPlant}`)
export 
{
    getPlants,
    getPlant
};