const puppeteer = require('puppeteer-extra')
var userAgent = require('user-agents');
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())
//this function is used to get the url of the video using vidstreaming on gogoplay.io
async function DownloadEpisode(name,episode)
{
    name = name.replace(/ /g, '-');
    name = name.toLowerCase();
    var url = "https://animekisa.tv/"+name+"-episode-"+episode;
    var browser = await puppeteer.launch();
    var page = await browser.newPage();
    await page.goto(url, {waitUntil: 'networkidle2'});
    //if page url is not an animekisa.tv name and episode then return saying could not find anime
    if(page.url() != url)
    {
        await browser.close();
        return "Could not find anime";
    }
    else
    {
        //run the javascript
        const rurl = await page.evaluate(() => {
                if(VidStreaming != undefined){
                    var downloadURL = VidStreaming;
                    //var downloadURL = Fembed;
                    //if (downloadURL != ""){
                        downloadURL = downloadURL.replace("load.php", "download")
                        var url = new URL(downloadURL);
                        url.hostname = 'gogoplay.io';
                        //downloadURL = "/download.php?u=" + btoa(downloadURL)
                        return url.href;
                }
                else{
                    return "Couldn't find a download link for this episode";
                }
        });
        await browser.close();
        return rurl;
    }
}
module.exports.DownloadEpisode = DownloadEpisode;