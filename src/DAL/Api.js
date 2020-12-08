import axios from 'axios'


export let getData = {
    getTrackFromSearch(apiKey,nameTrack) {
        return axios.get(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${nameTrack}&api_key=${apiKey}&format=json`)
            .then(response =>response.data)
    },
    getArtist(apiKey,artistName) {
        return axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${apiKey}&format=json`)
            .then(response => response.data)
    },
    getMusicList(apiKey) {
        return axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=20&api_key=${apiKey}&format=json`)

            .then(response => response.data)
    },
}
