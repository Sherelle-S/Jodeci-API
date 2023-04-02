const express = require('express')
const res = require('express/lib/response')
const app = express()
const PORT = 8000

const jodeci = {
    "gotta love": {
        "album": "forever my lady",
        "year": 1991,
        "us billboard chart position": 79,
    },
    "forver my lady": {
        "album": "forever my lady",
        "year": 1991,
        "us billboard chart position": 25,
    },
    "stay": {
        "album": "forever my lady",
        "year": 1991,
        "us billboard chart position": 41,
    },
    "come and talk to me": {
        "album": "forever my lady",
        "year": 1992,
        "us billboard chart position": 11,
    },
    "i'm still waiting": {
        "album": "forever my lady",
        "year": 1992,
        "us billboard chart position": 85,
    },
    "cry for you": {
        "album": "diary of a mad band",
        "year": 1993,
        "us billboard chart position": 15,
    },
    "feenin'": {
        "album": "diary of a mad band",
        "year": 1993,
        "us billboard chart position": 25,
    },
    "what about us": {
        "album": "diary of a mad band",
        "year": 1994,
        "us billboard chart position": 14,
    },
    "freek'n you": {
        'album': "the show, the afterpart, the hotel",
        'year': 1995,
        'us billboard chart position': 14,
    },
    "love u 4 life": {
        "album": "the show, the afterpart, the hotel",
        "year": 1995,
        "us billboard chart position": 31,
    },
    "get on up": {
        "album": "the show, the afterpart, the hotel",
        "year": 1996,
        "us billboard chart position": 22,
    },    
    "unknown": {
        "album": "Unknown",
        "year": "Unknown",
        "us billboard chart position": "Unknown",
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const songName = req.params.name.toLowerCase()
    if (jodeci[songName]) {
        res.json(jodeci[songName])
    } else {
        res.json(jodeci['unknown'])
    }
    // res.json(jodeci)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is listening on on port ${PORT}`)
})