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
                 output += `<li class="list-group-item list-group-item-info">${artistInfo.artist}</li>`
            });
            document.getElementById('artists').innerHTML = output;
        }, function(reason){

        })
    }
}
