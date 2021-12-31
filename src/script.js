const request = require('request');
module.exports = {
    list() {
        return new Promise(async (resolve, reject) => {
            try {

                request.get('http://www.koeri.boun.edu.tr/scripts/lst0.asp', function (error, response, body) {
                    ext = body.split('<pre>');
                    ext = ext[1].split('--------------');
                    ext = ext[2].split('</pre>');
                    ext = ext[0].replace(/[\r\n]{2,}/g,'|');
                    ext = ext.replace(/[ ]{2,}/g,',');

                    split = ext.split('|');

                    var newData = [];
                    split.forEach(e => {
                        r = e.split(',');
                        if(r[0] != ""){
                            tar = r[0].split(' ');
                            newData.push({
                                tarih       : tar[0].replace(/[.]/g,'-'),
                                saat        : tar[1],
                                enlem       : r[1],
                                boylam      : r[2],
                                derinlik    : r[3],
                                buyukluk_md : r[4].replace(/[-]/g,'0'),
                                buyukluk_ml : r[5],
                                buyukluk_mw : r[6].replace(/[-]/g,'0'),
                                yer         : r[7],
                            })
                        }

                    })
                    resolve(newData)
                });
                /*
                var options = {
                    url: 'https://deprem.afad.gov.tr/latestCatalogsList',
                    headers: {
                        'Header-To-Cache': 'm_0utc_0lastDay_1',
                        'Host': 'deprem.afad.gov.tr',
                        'Origin': 'https://deprem.afad.gov.tr',
                        'Referer': 'https://deprem.afad.gov.tr/sondepremler',
                    }
                };


                request.post(options, function (error, response, body) {

                    console.log(body);

                    //resolve(myJson.Tarih_Date.Currency)
                });
                */


            } catch (error) {
                reject(error);
            }
        });
    },
}