document.querySelector('.busca').addEventListener('submit', (event)=> { 

    event.preventDefault()

    let input = document.querySelector('#searchInput').value

    if( input !== ''){
        showWarning('carrregando...')
    }

    let linkApi = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid={API key}`
})

function showWarning(msg) { 
    document.querySelector('.aviso').innerHTML = msg
}







