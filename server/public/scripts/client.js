const app = angular.module('gifApp', []);
const baseURL= 'http://api.giphy.com/v1/gifs';
const apiKey= '&api_key=0rj09zTLmHbERPILRy44muwCAFJwgyCZ';

const gifSearchController = app.controller('GifSearchController', ['$http', gifSearch])
function gifSearch($http){
    let self = this;
    self.searchIn = '';
}

const randomGifController = app.controller('RandomGifController', ['$http', gifRandom])
function gifRandom($http) {
    let self = this;
}

