
const values = {}
const valutes = ['BYN', 'USD', 'EUR', 'CNY', 'RUB']
const input = document.querySelector('#input')
const select = document.querySelector('#select')
const date = document.querySelector('#date')

const getResponse = async (date) => {
    try {
        let response
        date ?
        response = await fetch(`http://api.currencylayer.com/historical?access_key=3030fef2e95f6ac6c46f38c26fd704d4&currencies=BYN,USD,EUR,CNY,RUB&format=1&format=1&date=${date}`)
        :
        response = await fetch('http://api.currencylayer.com/live?access_key=3030fef2e95f6ac6c46f38c26fd704d4&currencies=BYN,USD,EUR,CNY,RUB&format=1')
        const data = await response.json()
        const result = await data

        values.BYN = result.quotes.USDBYN
        values.USD = result.quotes.USDUSD
        values.EUR = result.quotes.USDEUR
        values.CNY = result.quotes.USDCNY
        values.RUB = result.quotes.USDRUB
        console.log(result.quotes)
    } catch (e) {
        alert('Знать будующее не честно! Выберите не наступившую дату!')
    }
}

const filter = () => {
    valutes.filter(i => {
        return i === select.value ?
        document.querySelector(`#${i}`).style.display = 'none'
        :
        document.querySelector(`#${i}`).style.display = 'block'
    })
}

const convert = () => {
	BYN.innerText = (parseFloat(input.value / values[select.value] * values.BYN)).toFixed(2) + ' Br BYN'
    USD.innerText = (parseFloat(input.value / values[select.value] * values.USD)).toFixed(2) + ' $ USD'
    EUR.innerText = (parseFloat(input.value / values[select.value] * values.EUR)).toFixed(2) + ' € EUR'
    CNY.innerText = (parseFloat(input.value / values[select.value] * values.CNY)).toFixed(2) + ' ¥ CNY'
    RUB.innerText = (parseFloat(input.value / values[select.value] * values.RUB)).toFixed(2) + ' ₽ RUB'

    filter()
}

select.addEventListener('change', () => convert())
input.addEventListener('input', () => convert())
date.addEventListener('change', (e) => getResponse(e.target.value).then(() => convert()))

window.onload = filter(), getResponse()
