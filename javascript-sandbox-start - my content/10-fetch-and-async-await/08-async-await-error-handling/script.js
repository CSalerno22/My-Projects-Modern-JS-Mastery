//error handling with aSYNC await


//try catch method
const getUsers = async () => {
    try {
        // const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const response = await fetch('http://httpstat.us/500')

        if (!response.ok) {
            throw new Error('Request Failed')
        }

        const data = await response.text()
    } catch (error) {
        console.log(error)
    }
}


//using a .catch method outside of function
const getPosts = async () => {
  
        // const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const response = await fetch('http://httpstat.us/500')

        if (!response.ok) {
            throw new Error('Request Failed')
        }

        const data = await response.text()

        console.log(data)
  
}

// getUsers()
getPosts().catch((error) => console.log(error))