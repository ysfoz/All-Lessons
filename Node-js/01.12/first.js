const http = require('http') // bu tipki import gibi paket yukleme icin kullanilir. react ta da bu sekilde kullanilabilir

console.log(__dirname) // uzerinde calistigimiz projenin icersinde bulundugu klasorun dosya yolunu verir

console.log(__filename) // icerisindeki klasor ile bilrlikte dosyaninda adini getirir

// bunlar global olarak kullanilir ve klasorleri adreslemek icin kullanilir. yoksa serverdan gelen sonuclar bazen karisabiliyor.

console.log('first')
setTimeout(()=>console.log('second'),1000) // diger diller olsa bu eylem bitmeden alt satira gecmez. yani sekron calisir.
 //ama js asekron calisan bir dil o yuzden bu komutun alismasini beklerken altindaki lerin calismsi devam eder. ama her komut asekron degil 
console.log('third')

// console.log(http) icerisinde bircik fonksiyon ve veri var

http.createServer((request,response) => { // 2 adet parametre geliyor.
    console.log(request) // icerinde browser tarafindan server lara gonderilen cok fazla bilgi var.
    response.end('Hello from server')
}).listen(8080) // hangi portu kullanmak istoyorsak onu yazacagiz.
