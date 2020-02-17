//Init happi.dev
const happi = new Happi;
//Add the events
document.querySelector('.btn').addEventListener('click', findArtist);

function findArtist() {
    const searchArtist = document.getElementById('searchArtist')
    const artistText = searchArtist.value
    if(artistText !==''){
        happi.getArtist(artistText).then(function(value){
            console.log(value)
        }, function(reason){

        })
    }
}
