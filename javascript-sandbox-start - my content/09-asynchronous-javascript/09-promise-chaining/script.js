const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		let error = true

		if (!error) {
			resolve({ name: 'John', age: 30 })
		} else {
			reject('Error: Something went wrong')
		}
	}, 1000)
})

//this is how you can chain promises and get multiple pices of infomation
promise
	.then((user) => {
		console.log(user)
		return user.name
	})
	.then((name) => {
		console.log(name)
		return name.length
	})
	.then((nameLength) => {
		console.log(nameLength)
	})
	.catch((error) => {
		console.log(error)
		return 123
	})
	.then((x) => console.log('This .then will run no matter what', x)) //this .then will run after .catch
