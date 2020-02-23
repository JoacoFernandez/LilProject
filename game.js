const happi = new Happi;

let artistIds = localStorage.getItem('artists');

let artists = JSON.parse(artistIds);

artists.forEach(function(id_artist){
    happi.getAlbums(id_artist).then(function(value){
        let arrayOfAlbums = value.albums.result.albums
        let randomArtistIndex = Math.floor(Math.random()*arrayOfAlbums.length) 
        console.log(arrayOfAlbums[randomArtistIndex]);
        let album = arrayOfAlbums[randomArtistIndex]
        happi.getTracks(album.id_album, id_artist).then(function(valuee){
            console.log(valuee)
        })
    })
})

