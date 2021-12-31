# Merkez Bankasi Döviz Kuru

Türkiye Cumhuriyeti Merkez Bankası Döviz Kurları


----------------------------------------------------------------
Kullanımı

    const merkezbankasi = require('merkezbankasi');
    merkezbankasi.kurbilgisi().then(console.log).catch(console.error)
----------------------------------------------------------------
Çıktısı

    {
        Unit: 1,
        Isim: 'ABD DOLARI',
        CurrencyName: 'US DOLLAR',
        ForexBuying: 12.9775,
        ForexSelling: 13.0009,
        BanknoteBuying: 12.9684,
        BanknoteSelling: 13.0204,
        CrossRateUSD: '',
        CrossRateOther: ''
    },
    {
        Unit: 1,
        Isim: 'EURO',
        CurrencyName: 'EURO',
        ForexBuying: 14.6823,
        ForexSelling: 14.7088,
        BanknoteBuying: 14.6721,
        BanknoteSelling: 14.7308,
        CrossRateUSD: '',
        CrossRateOther: 1.1314
    }
    ........




----------------------------------------------------------------

repository   : https://github.com/epixsoftnet/merkezbankasi 

homepage    : https://epixsoft.net