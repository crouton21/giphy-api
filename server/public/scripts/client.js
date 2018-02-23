const app = angular.module('gifApp', ['angularUtils.directives.dirPagination']);
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
            self.searchResults = response.data;
            console.log(response);
            console.log(self.searchResults);
            
        }).catch(function(error){
        console.log(error, 'WOMP');
        })
    }

    self.addToOffset = function(){
        console.log('in addToOffset--beg', self.searchResults.pagination.offset);
        
        self.searchResults.pagination.offset += 25;
        console.log('in addToOffset--end', self.searchResults.pagination.offset);
    }
}

const randomGifController = app.controller('RandomGifController', ['$http', gifRandom])
function gifRandom($http) {
    let self = this;

    self.randomGifUrl;

    self.searchRandom = function() {
        $http({
            method: 'GET',
            url: baseURL + 'random?' + apiKey,
        }).then(function(response) {
            console.log(response);
            self.randomGifUrl = response.data.data.images.downsized.url;
        }).catch(function(error) {
            console.log('WOMP', error);
        })
    }
}

