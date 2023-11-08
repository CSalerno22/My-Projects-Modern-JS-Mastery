//Fetching from json file
fetch('./movies.json')
	.then((response) => {
		console.log(response)
		return response.json()
	})
	.then((data) => {
		console.log(data)
	})

//Alternate way of writing fetch
fetch('./movies.json')
	.then((response) => response.json())
	.then((data) => console.log(data))

//Fetching a txt file
fetch('./test.txt')
	.then((response) => response.text())
	.then((data) => console.log(data))

//Fetching from an API
fetch('https://api.github.com/users/CSalerno22')
	.then((response) => response.json())
	.then((data) => (document.querySelector('h1').textContent = data.login))
