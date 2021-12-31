const request = require('request');
module.exports = {
    list() {
        return new Promise(async (resolve, reject) => {
            try {

                var options = {
                    url: 'https://deprem.afad.gov.tr/latestCatalogsList',
                    headers: {
                        'Host': 'deprem.afad.gov.tr',
                        'Origin': 'https://deprem.afad.gov.tr',
                        'Referer': 'https://deprem.afad.gov.tr/sondepremler',
                        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                        'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
                    }
                };


                request(options, function (error, response, body) {

                    console.log(body);

                    //resolve(myJson.Tarih_Date.Currency)
                });



            } catch (error) {
                reject(error);
            }
        });
    },
}