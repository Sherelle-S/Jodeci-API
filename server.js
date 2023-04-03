const express = require('express')
const res = require('express/lib/response')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const ninties = {
    "gotta love": {
        "artist": "jodeci",
        "album": "forever my lady",
        "year": 1991,
        "us billboard chart position": 79,
        "album art": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FForever_My_Lady&psig=AOvVaw11MNhhCUH_q_bXpqf9NNWV&ust=1680608952870000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNChyK_Sjf4CFQAAAAAdAAAAABAE",
        "video": "https://www.youtube.com/watch?v=oUChog18b9Q",
    },
    "forver my lady": {
        "artist": "jodeci",
        "album": "forever my lady",
        "year": 1991,
        "us billboard chart position": 25,
        "album art": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FForever_My_Lady&psig=AOvVaw11MNhhCUH_q_bXpqf9NNWV&ust=1680608952870000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNChyK_Sjf4CFQAAAAAdAAAAABAE",
        "video": "https://www.youtube.com/watch?v=qZCPgfEZvzQ",
    },
    "stay": {
        "artist": "jodeci",
        "album": "forever my lady",
        "year": 1991,
        "us billboard chart position": 41,
        "album art": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FForever_My_Lady&psig=AOvVaw11MNhhCUH_q_bXpqf9NNWV&ust=1680608952870000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNChyK_Sjf4CFQAAAAAdAAAAABAE",
        "video": "https://www.youtube.com/watch?v=b88IJkzncLY",
    },
    "come and talk to me": {
        "artist": "jodeci",
        "album": "forever my lady",
        "year": 1992,
        "us billboard chart position": 11,
        "album art": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FForever_My_Lady&psig=AOvVaw11MNhhCUH_q_bXpqf9NNWV&ust=1680608952870000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNChyK_Sjf4CFQAAAAAdAAAAABAE",
        "video": "https://www.youtube.com/watch?v=wAImDL6LF_Q",
    },
    "i'm still waiting": {
        "artist": "jodeci",
        "album": "forever my lady",
        "year": 1992,
        "us billboard chart position": 85,
        "album art": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FForever_My_Lady&psig=AOvVaw11MNhhCUH_q_bXpqf9NNWV&ust=1680608952870000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNChyK_Sjf4CFQAAAAAdAAAAABAE",
        "video": "https://www.youtube.com/watch?v=QR_ONzhKvzo",
    },
    "cry for you": {
        "artist": "jodeci",
        "album": "diary of a mad band",
        "year": 1993,
        "us billboard chart position": 15,
        "album art": "https://upload.wikimedia.org/wikipedia/en/8/8a/Diary_of_a_Mad_Band.jpg",
        "video": "https://www.youtube.com/watch?v=XjR7jKPRHJw",
    },
    "feenin'": {
        "artist": "jodeci",
        "album": "diary of a mad band",
        "year": 1993,
        "us billboard chart position": 25,
        "album art": "https://upload.wikimedia.org/wikipedia/en/8/8a/Diary_of_a_Mad_Band.jpg",
        "video": "https://www.youtube.com/watch?v=XjR7jKPRHJw",
    },
    "what about us": {
        "artist": "jodeci",
        "album": "diary of a mad band",
        "year": 1994,
        "us billboard chart position": 14,
        "album art": "https://upload.wikimedia.org/wikipedia/en/8/8a/Diary_of_a_Mad_Band.jpg",
        "video": "https://www.youtube.com/watch?v=XjR7jKPRHJw",
    },
    "freek'n you": {
        "artist": "jodeci",
        "album": "the show, the after party, the hotel",
        "year": 1995,
        "us billboard chart position": 14,
        "album art": "https://en.wikipedia.org/wiki/File:JODECITSTAPTHCOVER.jpg",
        "video": "https://www.youtube.com/watch?v=oYwL-FzFDKQ",
    },
    "love u 4 life": {
        "artist": "jodeci",
        "album": "the show, the after party, the hotel",
        "year": 1995,
        "us billboard chart position": 31,
        "album art": "https://en.wikipedia.org/wiki/File:JODECITSTAPTHCOVER.jpg",
        "video": "https://www.youtube.com/watch?v=tDhfp_5aD0w",
    },
    "get on up": {
        "artist": "jodeci",
        "album": "the show, the after party, the hotel",
        "year": 1996,
        "us billboard chart position": 22,
        "album art": "https://en.wikipedia.org/wiki/File:JODECITSTAPTHCOVER.jpg",
        "video": "https://www.youtube.com/watch?v=Sy6gPBix32k",
    },    
    "tell me": {
        "artist": "dru hill",
        "album": "dru hill",
        "year": "1996",
        "us billboard chart poisiton": 18,
        "album art": "https://en.wikipedia.org/wiki/File:Druhill-1996.jpg",
        "video": "https://www.youtube.com/watch?v=6TcR5HhaAlA",
    },
    "in my bed": {
        "artist": "dru hill",
        "album": "dru hill",
        "year": 1996,
        "us billboard chart position": 4,
        "album art": "https://en.wikipedia.org/wiki/File:Druhill-1996.jpg",
        "video": "https://www.youtube.com/watch?v=_Ixip0K2r10",
    },
    "never make a promise": {
        "artist": "dru hill",
        "album": "dru hill",
        "year": 1997,
        "us billboard chart position": 7,
        "album art": "https://en.wikipedia.org/wiki/File:Druhill-1996.jpg",
        "video": "https://www.youtube.com/watch?v=JAnA6c7Jql4",
    },
    "5 steps": {
        "artist": "dru hill",
        "album": "dru hill",
        "year": 1997,
        "us billboard chart postion": "N/A",
        "album art": "https://en.wikipedia.org/wiki/File:Druhill-1996.jpg",
        "video": "https://www.youtube.com/watch?v=7BTlDtxFuBg",
    },
    "how deep is you love": {
        "artist": "dru hill",
        "album": "enter the dru",
        "year": 1998,
        "us billboard chart position": 3,
        "album art": "https://en.wikipedia.org/wiki/File:Enterthedru-1998.jpg",
        "video": "https://www.youtube.com/watch?v=43XWafBLJIM",
    },
    "these are the times": {
        "artist": "dru hill",
        "album": "enter the dru",
        "year": 1998,
        "us billboard chart position": 21,
        "album art": "https://en.wikipedia.org/wiki/File:Enterthedru-1998.jpg",
        "video": "https://www.youtube.com/watch?v=6wPkC3DO_7Y",
    },
    "beauty": {
        "artist": "dru hill",
        "album": "enter the dru",
        "year": 1999,
        "us billboard chart position": "N/A",
        "album art": "https://en.wikipedia.org/wiki/File:Enterthedru-1998.jpg",
        "video": "https://www.youtube.com/watch?v=VE-8sl9-pwE",
    },
    "you are everything": {
        "artist": "dru hill",
        "album": "enter the dru",
        "year": 1999,
        "us billboard chart position": "N/A",
        "album art": "https://en.wikipedia.org/wiki/File:Enterthedru-1998.jpg",
        "video": "https://www.youtube.com/watch?v=q04mLVveHTw",
    },
    "unknown": {
        "artist": "unknown",
        "album": "Unknown",
        "year": "Unknown",
        "us billboard chart position": "Unknown",
        "album art": "unknown",
        "video": "unknown",
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
    console.log(`Server is listening on on port`)
})