// setTimeout(changeText, 2000)

console.log('hello from global')

function changeText() {
	document.querySelector('h1').textContent = 'Hello from the funtion'
}

const timerId = setTimeout(changeText, 2000)

document.querySelector('#cancel').addEventListener('click', () => {
	console.log(timerId)
	clearTimeout(timerId)
	console.log('Timer cancelled')
})
