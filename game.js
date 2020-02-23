const happi = new Happi;

let artistIds = localStorage.getItem('artists');

let artists = JSON.parse(artistIds);

artists.forEach(function(id_artist){
    happi.getAlbums(id_artist).then(function(value){
        let array = value.albums.result.albums
        console.log(array[Math.floor(Math.random()*array.length)]);
    })
})

