const maquina1 = document.getElementById('maquina-escribir1')
const maquina2 = document.getElementById('maquina-escribir2')
const maquina3 = document.getElementById('maquina-escribir3')
const maquina4 = document.getElementById('maquina-escribir4')
const maquina5 = document.getElementById('maquina-escribir5')
const maquina6 = document.getElementById('maquina-escribir6')
const maquina7 = document.getElementById('maquina-escribir7')
const maquina8 = document.getElementById('maquina-escribir8')
const maquina9 = document.getElementById('maquina-escribir9')
const maquina10 = document.getElementById('maquina-escribir10')
const maquina11 = document.getElementById('maquina-escribir11')
const maquina12 = document.getElementById('maquina-escribir12')
const maquina13 = document.getElementById('maquina-escribir13')
const maquina14 = document.getElementById('maquina-escribir14')
const maquina15 = document.getElementById('maquina-escribir15')
const maquina16 = document.getElementById('maquina-escribir16')
const maquina17 = document.getElementById('maquina-escribir17')
const maquina18 = document.getElementById('maquina-escribir18')
const maquina19 = document.getElementById('maquina-escribir19')
const maquina20 = document.getElementById('maquina-escribir20')
const maquina21 = document.getElementById('maquina-escribir21')
const maquina22 = document.getElementById('maquina-escribir22')
const maquina23 = document.getElementById('maquina-escribir23')
const maquina24 = document.getElementById('maquina-escribir24')
const maquina25 = document.getElementById('maquina-escribir25')
const maquina26 = document.getElementById('maquina-escribir26')
const maquina27 = document.getElementById('maquina-escribir27')
const maquina28 = document.getElementById('maquina-escribir28')
const maquina29 = document.getElementById('maquina-escribir29')
const maquina30 = document.getElementById('maquina-escribir30')
const maquina31 = document.getElementById('maquina-escribir31')
const maquina32 = document.getElementById('maquina-escribir32')
const maquina33 = document.getElementById('maquina-escribir33')
const maquina34 = document.getElementById('maquina-escribir34')
const maquina35 = document.getElementById('maquina-escribir35')
const maquina36 = document.getElementById('maquina-escribir36')
const maquina37 = document.getElementById('maquina-escribir37')
const maquina38 = document.getElementById('maquina-escribir38')
const maquina39 = document.getElementById('maquina-escribir39')
const maquina40 = document.getElementById('maquina-escribir40')
const maquina41 = document.getElementById('maquina-escribir41')
const maquina42 = document.getElementById('maquina-escribir42')

const maquinaEscribir1 = (text = '', tiempo = 200, etiqueta = '') => {
    let arrayCaracteres = text.split('')
    etiqueta.innerHTML = ''
    let cont = 0
    let escribir = setInterval(function() {
        etiqueta.innerHTML += arrayCaracteres[cont]
        cont++
        if (cont === arrayCaracteres.length) {
            clearInterval(escribir)
        }
    }, tiempo)
}

const maquinaEscribir2 = (text = '', tiempo = 200, etiqueta = '') => {
    let arrayCaracteres = text.split('')
    etiqueta.innerHTML = ''
    let cont = 0
    let escribir = setInterval(function() {
        etiqueta.innerHTML += arrayCaracteres[cont]
        cont++
        if (cont === arrayCaracteres.length) {
            cont = 0
            etiqueta.innerHTML = ''
        }
    }, tiempo)
}

const maquinaEscribir3 = (text = '', tiempo = 200, etiqueta = '') => {
    let arrayCaracteres = text.split('')
    etiqueta.innerHTML = ''
    let i = 0
    let j = text.length
    let escribir = setInterval(function() {
        if (i === arrayCaracteres.length) {
            etiqueta.innerHTML = text.substring(0, j)
            j--
            if (j === 0) {
                etiqueta.innerHTML = ''
                i = 0
                j = text.length
            }
        } else {
            etiqueta.innerHTML += arrayCaracteres[i]
            i++
        }
    }, tiempo)
}

const maquinaEscribir4 = (text = '', tiempo = 200, etiqueta = '') => {
    let arrayCaracteres = text.split('')
    etiqueta.innerHTML = ''
    let i = 0
    let escribir = setInterval(function() {
        if (arrayCaracteres[i] === '*') {
            etiqueta.innerHTML += '</br>'
        } else {
            etiqueta.innerHTML += arrayCaracteres[i]
        }
        if (i === arrayCaracteres.length) {
            etiqueta.innerHTML = ''
            i = 0
        }
        i++
    }, tiempo)
}

maquinaEscribir1("===========================================", 300, maquina1)
maquinaEscribir1("Interface_Connection.exe version 07.01.99", 300, maquina2)
maquinaEscribir1("===========================================", 300, maquina3)
maquinaEscribir1("COMPUTER SYSTEM", 300, maquina4)
maquinaEscribir1("Hackers.....beware 😳", 300, maquina5)
maquinaEscribir1("===========================================", 300, maquina6)
maquinaEscribir1(".....", 300, maquina7)
maquinaEscribir1(".....", 300, maquina8)
maquinaEscribir1(".....", 300, maquina9)
maquinaEscribir1(".....", 300, maquina10)
maquinaEscribir1(".....", 300, maquina11)
maquinaEscribir1(".....", 300, maquina12)
maquinaEscribir1(".....", 300, maquina13)
maquinaEscribir1(".....", 300, maquina14)
maquinaEscribir1(".....", 300, maquina15)
maquinaEscribir1(".....", 300, maquina16)
maquinaEscribir1("CONNECTION TO NETWORK", 300, maquina17)
maquinaEscribir1("CONNECTION ESTABLISHED ✔️", 300, maquina18)
maquinaEscribir1("3x3cut1ng m41nfr4m3 c0d3", 300, maquina19)
maquinaEscribir1(".....", 300, maquina20)
maquinaEscribir1(".....", 300, maquina21)
maquinaEscribir1(".....", 300, maquina22)
maquinaEscribir1("☠️☠️☠️☠️☠️☠️☠️☠️☠️☠️☠️☠️", 300, maquina23)
maquinaEscribir1("MAINFRAME ACCESSED", 300, maquina24)
maquinaEscribir1(".....", 300, maquina25)
maquinaEscribir1("received keep-alive...", 300, maquina26)
maquinaEscribir1(".....", 300, maquina27)
maquinaEscribir1(".....", 300, maquina28)
maquinaEscribir1(".....", 300, maquina29)
maquinaEscribir1(".....", 300, maquina30)
maquinaEscribir1(".....", 300, maquina31)
maquinaEscribir1(".....", 300, maquina32)
maquinaEscribir1("Spoofing Handshake...", 300, maquina33)
maquinaEscribir1(".....", 300, maquina34)
maquinaEscribir1(".....", 300, maquina35)
maquinaEscribir1(".....", 300, maquina36)
maquinaEscribir1("Loading...", 300, maquina37)
maquinaEscribir1("[==================================================", 300, maquina38)
maquinaEscribir1("=========================]", 300, maquina39)
maquinaEscribir1("Connection will be maintained for 30 minutes", 300, maquina40)
maquinaEscribir1(".....", 300, maquina41)
maquinaEscribir1(".....", 300, maquina42)