
# AnStrm

an npm package to download anime episodes for free.


## Acknowledgements
 - downloading or streaming anime without paying or without license is illegal, Please be careful using this package.
 - direct download links will not be provided.
## Authors

- [@babymonie](https://github.com/babymonie)
## lets get to the point

## Installation

```bash
  npm install anstrm
```
    
## Usage/Examples

```javascript
const {DownloadEpisode} = require('anstrm');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send("an free api to scrape anime");
});
app.get('/download/:name/:episode', async (req, res) => {
    var name = req.params.name;
    var episode = req.params.episode;
    var url = await DownloadEpisode(name,episode);
    res.send(url);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
```


## License

[MIT](https://choosealicense.com/licenses/mit/)


## FAQ

#### Question 1

Will this package be updated regularly?

Yes It will.
#### Question 2
Is this package illegal?

Yes it is.
#### Question 3

Why is some anime's not working?

1 we scrape from animekisa.tv and sometimes they dont have the anime your looking for,
most popular anime's should have downloads,or try changing the english title to a japanese title.
## Things to do

- add a streaming function to stream anime.