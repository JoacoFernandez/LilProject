class Happi {
    constructor() {
        this.api_key = '5f6955uwwZXBoXONkexvXhpcp2XNTDFrx5sDAGxeKri8WPetTov60rh3';
    }

    async getArtist(artist) {
        const profileResponse = await fetch(`https://api.happi.dev/v1/music?q=${artist}&apikey=${this.api_key}&type=artist`);
        const profile = await profileResponse.json();
        
        return {    
            profile
        }
    }

    async getAlbums(id_artist) {
        const albumResponse = await fetch(`https://api.happi.dev/v1/music/artists/${id_artist}/albums?apikey=${this.api_key}`)
        const albums = await albumResponse.json();

        return {
            albums
        }
    }

}