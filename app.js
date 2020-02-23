//Init happi.dev
const happi = new Happi;
//Add the events
document.querySelector('.btn').addEventListener('click', findArtist);

var selectedArtists = []

function findArtist() {
    const searchArtist = document.getElementById('searchArtist')
    const artistText = searchArtist.value
    if(artistText !==''){
        happi.getArtist(artistText).then(function(value){
            let output = '';
            value.profile.result.forEach(function(artistInfo){
                 output += `<li class="list-group-item " id="${artistInfo.id_artist}" >Artist Name:     ${artistInfo.artist} <br><img src="${artistInfo.cover}" height="42" width="42"></li>`
            });
            document.getElementById('artists').innerHTML = output;
            
            
        }, function(reason){

        })
    }
}

/* const select = document.getElementById('artistResults');
const addButton = document.getElementById('addButton');
const artistList = document.querySelector('.collection'); */

/* loadEventListeners();
function loadEventListeners(){
    select.addEventListener('click', selectArtist);
    addButton.addEventListener('click', addArtist);
}

function selectArtist(e){
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(artistList));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content'
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    artistList.appendChild(li);
    e.preventDefault()
} */

document.getElementById('artists').addEventListener('click', selectArtist);
function selectArtist(e){
    if (e.target.className.indexOf("active") === -1) {
        // get all active current items querySelector for .active
        // for each active item that you got, change the classNamme to list-group-item
        document.querySelectorAll('.active').forEach(changeClassName);
        function changeClassName(item) {
            item.className = 'list-group-item'
        } 
        e.target.className = 'selected list-group-item list-group-item-info active';
    } else {
        e.target.className = 'list-group-item'
    }
}
const ul = document.querySelector('.collection');
document.getElementById('addButton').addEventListener('click', addArtist);

function addArtist() {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.querySelector('.active'));
    ul.appendChild(li);
    
    
    
    
    
}
const artistLi = document.querySelector('.collection-item');
document.getElementById('clearButton').addEventListener('click', clearArtists);
function clearArtists() {
    ul.remove(artistLi);
}

document.getElementById('startGame').addEventListener('click', startGame);
let selectedArtistss = []
function startGame(){
    document.querySelectorAll("#artistsResult .list-group-item").forEach(function(element){
        storeArtistInLocalStorage(element.id)

    })
    window.location.href = "game.html";
}
function storeArtistInLocalStorage(artist_id) {
    let artists;
    //Primero hay que ver si el localStorage esta vacio
    if(localStorage.getItem('artists') === null){
        artists = [];
    } else {
        artists = JSON.parse(localStorage.getItem('artists'));
    }
    artists.push(artist_id);
    localStorage.setItem('artists', JSON.stringify(artists));
}