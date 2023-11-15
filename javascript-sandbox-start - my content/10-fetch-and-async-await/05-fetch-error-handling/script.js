// fetch('http://httpstat.us/200')
// 	.then((res) => {
// 		return res
// 	})
// 	.then(() => {
// 		console.log('sucess')
//     })

    
//'Sucess' still runs because there is no network error
    // fetch('http://httpstat.us/404')
    // 	.then((res) => {
    // 		return res
    // 	})
    // 	.then(() => {
    // 		console.log('sucess')
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })


//.catch is now running because it was a network error
    // fetch('http://h739865t.org/00')
    // 	.then((res) => {
    // 		return res
    // 	})
    // 	.then(() => {
    // 		console.log('sucess')
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })


//Manual error handling - Testing with response.ok
    // fetch('http://httpstat.us/404')
    //     .then((res) => {
    //         if (!res.ok) {
    //                 throw new Error('Request Failed')
    //             }
	// 			return res
	// 		})
	// 		.then(() => {
	// 			console.log('sucess')
	// 		})
	// 		.catch((error) => {
	// 			console.log(error)
//         })
    
            
//Testing with the .status method to target the status code            
    fetch('http://httpstat.us/404')
        .then((res) => {
            if (res.status === 404) {
                    throw new Error('Not Found :(')
            } else if (res.status === 500) {
                throw new Error('Server Error')
            } else if (res.status !== 200) {
                throw new Error('Request Failed')
                }
				return res
			})
			.then(() => {
				console.log('sucess')
			})
			.catch((error) => {
				console.log(error)
			})