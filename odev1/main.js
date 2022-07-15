let userName = prompt("İsminizi Giriniz")

let date = new Date()

let gun = date.getDate()
let gunAd = date.getDay()
let ay = date.getUTCMonth()
let yil = date.getFullYear()
let saat = date.getUTCHours()
let dakika = date.getUTCMinutes()
let saniye = date.getUTCSeconds()

let tarihText = document.querySelector('#tarih')
let nameText = document.querySelector('#name')
let dayText = document.querySelector('#day')

switch (gunAd) {
    case 0:
        dayText.innerHTML = "Pazar"
        break;
    case 1:
        dayText.innerHTML = "Pazartesi"
        break;
    case 2:
        dayText.innerHTML = "Salı"
        break;
    case 3:
        dayText.innerHTML = "Çarşamba"
        break;
    case 4:
        dayText.innerHTML = "Perşembe"
        break;
    case 5:
        dayText.innerHTML = "Cuma"
        break;
    case 6:
        dayText.innerHTML = "Cumartesi"
        break;
    default:
        dayText.innerHTML= "Unknown"
        break;
}

nameText.innerHTML = userName+'!'
tarihText.innerHTML = saat+3+':'+dakika+":"+saniye

console.log(gun , ay+1 , yil, saat+3 , dakika, saniye);