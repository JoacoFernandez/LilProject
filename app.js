//Init happi.dev
const happi = new Happi;
const ui = new UI;
//Add the events
document.querySelector('.btn').addEventListener('click', findArtist);

function findArtist() {
    const searchArtist = document.getElementById('searchArtist')
    const artistText = searchArtist.value
    if(artistText !==''){
        happi.getArtist(artistText).then(function(value){
            let output = '';
            value.profile.result.forEach(function(artistInfo){
                 output += `<li class="list-group-item list-group-item-info">Artist Name:    ${artistInfo.artist},         ID:    ${artistInfo.id_artist}, <img src="${artistInfo.cover}" height="42" width="42"></li>`
            });
            document.getElementById('artists').innerHTML = output;
        }, function(reason){

        })
    }
}
