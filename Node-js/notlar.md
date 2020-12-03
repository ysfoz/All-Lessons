# node-js in farkli versiyonlarini ayni anda projede kullanabilmek icin NVM yani node version maneger
kurmak gerekiyor. MAc pc de kullanilir. paket kurulumu yapildiktan sonra nvm use 14.15.1 gibi vrsiyonnumaralari calistirilir. bunu denemek lazim

- komut satirinda komut yazarak programlari kullanmaya REPL yani read evulate print loop denir.node da bu sekilde kullaniliyor

## node js java kdlari ile calisiyor, ama her js kodu burda calismaz. alert gibi window kismina ait olan komut
larin hicbirisi node ile calismaz.

## event driven programing -EDP - 

js event drivin bir dildir. yani eventlera dayalidir. onpress, onclick gibi yada settimeout gibi komutlar events lar olarak geciyor.


## asekron yapi -- bu yapi sayesinde islemler araliksiz calisir
console.log('first')
setTimeout(()=>console.log('second'),1000) // diger diller olsa bu eylem bitmeden alt satira gecmez. yani sekron calisir.
 //ama js asekron calisan bir dil o yuzden bu komutun alismasini beklerken altindaki lerin calismsi devam eder. ama her komut asekron degil 
console.log('third')

- js te her komut calltack denilen kisima atilir ve sirasiyla uygulanir. ama komut asekron ise o zaman direk olrak callstack e girmez oncesinde ayri bir bolumde tutulur. ve ayarlanan eventin(onClick, onLoad, onDone) olusmasi durumunda event loop tan gecerek call stack e atilir. 

## single thread - 

js her islemi tek tek yapar. bu sekilde asekron calistigi icin ayni anda verilen komutlar cok fazla olsa dahi calismasini etkilemez. cunku higly scalable dir. 

# MIT bir lisans turu
bu sekilde olan urunler serbest olarak kullanilabilir ama karsi tarafinda bir sorumlulugu olmaz

# yeni bir proje baslatirken npm init komutu ile bilgiler girilir. bu seklide sadece package.json dosyasi olusturmus oluruz.

-  paket kurarken npm install paket adi --save-dev dedigimizde packeage.json da devdepencies e olusturur. bunun manasi bu kurulan paket sadece developpment kisminda kullanilacak demektir.

### express bir node.js framework u
- hizli olmasi
- esnek olmasi
- ve kucuk boyutta olmasindeniyle tercih ediliyor.

npm install express ile express dosyasi olusturmus oluuz. oncesinde init yapmak gerekir.

## 
"scripts": {
    "start":"nodemon", 
    seklinde npm start komutunu eklemis olduk. nodemon anlik degisiklikleri bize gosteren bir paket. oncesinde devdepencies e onu kurduk. start i onunla calistir demis oluyoruz. main olarak hangi dosyayi tanimlamissak onu calistiracaktir. ama nodemondea sonra bir dosya adi girersek onu calistirir.

# proje olustururken cagirdigimiz port u bulut sistemine atarken ayarlamamiz lazim yoksa calismaz.

## views klasoru olusturlarak icerisine template olusturulur. cok sayida template olsada pug ve EJS gnelde tercih edilenler.

routes icerisinde get ile cagirdigimiz fonksiyonlari yazip index.js ten import ediyoruz.





