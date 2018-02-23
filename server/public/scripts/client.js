const app = angular.module('gifApp', []);
const baseURL= 'http://api.giphy.com/v1/gifs/';
const apiKey= '&api_key=0rj09zTLmHbERPILRy44muwCAFJwgyCZ';

const gifSearchController = app.controller('GifSearchController', ['$http', gifSearch])
function gifSearch($http){
    let self = this;
    self.searchIn = '';
    self.searchResults= [ ];

    self.searchGif = function(searchString){
        $http({
            method: 'GET',
            url: baseURL + 'search?q=' + searchString + apiKey
        }).then(function(response){
            self.searchResults = response.data.data;
            console.log(response);
            
            console.log(self.searchResults);
        }).catch(function(error){
        console.log(error, 'WOMP');
        })
    }
}

const randomGifController = app.controller('RandomGifController', ['$http', gifRandom])
function gifRandom($http) {
    let self = this;
}

