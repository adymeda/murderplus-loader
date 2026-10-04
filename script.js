// Murder Plus <3

const tips = [
    {
        text: "Вы можете кричать, когда за вами гонятся. Только не испугайте родных...",
        time: 5
    },{
        text: "Увидели человека с ножом? Он приближается к вам? Бегите!",
        time: 5
    },{
        text: "Играть будет веселее, если общаться с другими",
        time: 4
    }, {
        text: "Внешность может быть обманчива. Нельзя быть уверенным, что человек действительно тот, за кого он себя выдаёт",
        time: 8
    }, {
        text: "Чем больше людей - тем веселее! Не забывайте приглашать своих друзей поиграть вместе",
        time: 7
    }, {
        text: "Вступайте в наши социальные сети, чтобы следить за новостями сервера",
        time: 5
    }, {
        text: "Если у вас есть оружие, то его можно быстро достать, дважды нажав ЛКМ",
        time: 5
    }, {
        text: "Перед игрой обязательно ознакомьтесь с правилами сервера",
        time: 5
    }, {
        text: "Сервер существует благодаря поддержке игроков <3",
        time: 4
    }, {
        text: "Хочешь выделяться на сервере? Купи кейсы в F3 меню и получи новые предметы!",
        time: 6
    }, {
        text: "VIP статус позволяет не только поддержать сервер, но и даёт приятные бонусы, такие как говорилка и множитель получаемых поинтов",
        time: 8
    }, {
        text: "Открыть колесо эмоций можно с помощью клавиши B",
        time: 4
    }, {
        text: "Роль \"Парамедик\" имеет возможность воскрешать погибших свидетелей. Для этого нужно получить дефибриллятор, собрав 3 улики",
        time: 7
    }, {
        text: "Убийца может максироваться под погибшего свидетеля, потратив 1 улику",
        time: 5
    }, {
        text: "Если вы застрелите мирного человека, то это может плохо сказаться для вас",
        time: 5
    }, {
        text: "ААААА КРОКОДИЛ В ВАННОЙ!",
        time: 3
    }, {
        text: "С некоторыми объектами на картах можно взаимодействовать. К примеру, порой можно отключить свет в здании",
        time: 6
    }, {
        text: "Игрок ведёт себя очень громко? Его можно сделать тише. Нажмите ПКМ по игроку в Tab меню и поменяйте его громкость",
        time: 6
    },

    // Patch 0.8
    {
	text: "Будьте бдительны - некоторые убийцы могут телепортироваться вместо броска ножа",
	time: 5
    }, {
	text: "Важные улики имеют жёлтое свечение и считаются как две собранные улики",
	time: 5
    }, {
	text: "Обращайте внимание на поведение игроков. Некоторых убийц можно определить даже когда они никого не убили",
	time: 8
    }
]

var filesTotal = 0
var filesLoaded = 0
function SetFilesTotal(total) {
    filesTotal = total

    var files = document.getElementById("files")
    files.textContent = total
    files.style.position = "absolute"
    files.style.width = "128px"
    files.style.top = "15px"
    files.style.left = "15px"
    files.style.fontFamily = "Raleway"
}
function SetFilesNeeded(needed) {
    filesLoaded = filesTotal - needed
}
function SetStatusChanged(status) {
    var statusBlock = document.getElementById("progress-status")
    switch(status) {
        case "Workshop Complete":
            filesLoaded = Math.floor(filesTotal * 0.8)
            statusBlock.textContent = "Файлы Workshop скачаны"
            break
        case "Received all Lua files we needed!":
            filesLoaded = Math.floor(filesTotal * 0.85)
            statusBlock.textContent = "Файлы сервера загружены"
            break
        case "Client info sent!":
            filesLoaded = Math.floor(filesTotal * 0.9)
            statusBlock.textContent = "Пользовательские данные отправлены"
            break
        case "Starting Lua...":
            filesLoaded = Math.floor(filesTotal*0.95)
            statusBlock.textContent = "Запуск игры"
            break
        case "Lua Started!":
            filesLoaded = filesTotal
            status.textContent = "Игра запущена"
            break
        case "Fully connected!":
            status.textContent = "Готово!"
            break
	case "Mounting Addons":
	    status.textContent = "Подготовка аддонов"
	    break
        default:
            statusBlock.textContent = status
            break
    }
}

function resizeContainer() {
    var music = document.getElementById("music")
    music.volume = 0.3
   
    var size = Math.floor(window.innerHeight * 0.4)
    var logo = document.getElementById("logo")
    logo.style.width = size + "px"
    logo.style.height = size + "px"
    var x = Math.floor(window.innerWidth * 0.5) - size / 2
    var y = Math.floor(window.innerHeight * 0.35) - size / 2
    logo.style.top = y + "px"
    logo.style.left = x + "px"

    var serverName = document.getElementById("server-name")
    serverName.style.top = size/2 - serverName.clientHeight/2 + "px"


    var tipBlock = document.getElementById("tip")
    tipBlock.style.width = window.innerWidth * 0.6 + "px"
    tipBlock.style.top = window.innerHeight * 0.9 + "px"
    tipBlock.style.left = window.innerWidth * 0.5 - tipBlock.clientWidth/2 + "px"

    music.play()
}

function startPage() {
    // Background animation
    var background = document.getElementById("back-img")
    var moveSpeed = 0.0001
    var radius = window.innerHeight * 0.4
    var angle = 0
    function moveImage() {
        var centerX = Math.floor(window.innerWidth/2)
        var centerY = Math.floor(window.innerHeight/2)
        var x = centerX - background.clientWidth + radius * Math.cos(angle) + background.clientWidth/2
        var y = centerY - background.clientHeight + radius * Math.sin(angle) + background.clientHeight/2
        background.style.left = x + "px"
        background.style.top = y + "px"
        angle += moveSpeed
    }

    // Logo animation
    var logo = document.getElementById("logo")
    var logoOpacity = 0
    var step = 0.003
    function spawnLogo() {
        if(logoOpacity > 1) return
        logo.style.opacity = logoOpacity
        logoOpacity += step
    }

    // Tips animation & rotation
    var tipBlock = document.getElementById("tip")
    var tipOpacity = 0
    var tipOpacityUp = true
    var tipOpacityStep = 0.003
    var tipPointer = Math.floor(Math.random() * tips.length)
    var tipBlocked = false
    function removeTipBlock() {
        tipBlocked = false
        // console.log("Removed a block")
    }
    function changeTips() {
        if(tipOpacity <= 0) {
            tipOpacityUp = true
            tipBlocked = false
            tipPointer++
            if(tipPointer >= tips.length) tipPointer = 0

            tipBlock.textContent = "Совет: " + tips[tipPointer].text
        } else if(tipOpacity > 1.1 && !tipBlocked && tipOpacityUp) {
            tipBlocked = true
            tipOpacityUp = false
            // console.log("Reached peak")
            setTimeout(removeTipBlock, tips[tipPointer].time * 1000)
        }
        if(tipBlocked) return
        tipBlock.style.opacity = tipOpacity
        if(tipOpacityUp) tipOpacity += tipOpacityStep
        else tipOpacity -= tipOpacityStep
    }
    
    // Loading progressbar
    var progressbar = document.getElementById("progress")
    function calcProgressbar() {
        progressbar.style.width = 20 + (window.innerWidth * filesLoaded)/filesTotal + "px"
    }

    function animationCycle() {
        moveImage()
        spawnLogo()
        changeTips()
        calcProgressbar()
    }
    setInterval(animationCycle, 2)

    resizeContainer()
}


function GameDetails( servername, serverurl, mapname, maxplayers, steamid, gamemode, volume, language ) {
    const music = document.getElementById("music")
    music.volume = volume * 0.3
    
    // let now = new Date()
    // if(now.getDate() == 1 && now.getMonth() == 3) {
    //     music.src = "http://31.128.45.55/sounds/derevnya.ogg"
    // }

    music.play()
}



window.onload = startPage
window.onresize = resizeContainer