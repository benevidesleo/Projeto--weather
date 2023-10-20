document.querySelector('.busca').addEventListener('submit', async (event) => {
    event.preventDefault()

    let input = document.querySelector('#searchInput').value
    if (input !== '') {
        clearInfo()
        showWarning('carrregando...')

        let linkApi = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=1275d595554ed510da2bb24f01a50a46&units=metric&lang=pt_br`
        
        let result = await fetch(linkApi)
        let json = await result.json()

        if(json.cod === 200){
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            })
        } else {
            clearInfo()
            showWarning('Não encontramos esta cidade!')
        }
    }

    
})

function showInfo(json){ 
    showWarning('')

    document.querySelector('.resultado').style.display = 'block'

    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`
    document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>ºC</sup>`
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span>km/h</span>`
    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`)
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle - 90}deg)`
}


function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg
}

function clearInfo() { 
    showWarning('')
    document.querySelector('.resultado').style.display = 'none'
}







