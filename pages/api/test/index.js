
export default async (req, res) => {
	const { method } = req;
    console.log('???')

	switch (method) {
		case "GET":
			try {
                console.log('api 접속')
				const clientResponse = await fetch("https://dev.aistudios.com/api/odin/generateClientToken?appId=aistudios.com&userKey=6443234b-77d5-4013-bfd6-bb9399f317d9", {
                    method: "GET"
                });
				const clientData = await clientResponse.json()
				console.log(clientData.token)
				const tokenResponse = await fetch("https://dev.aistudios.com/api/odin/generateToken",{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						"appId":"aistudios.com",
						"platform":"web",
						"isClientToken":true,
						"token": clientData.token,
						"uuid":"6443234b-77d5-4013-bfd6-bb9399f317d9",
						"sdk_v":"1.0",
						"clientHostname":"aistudios.com"
					}),
				})
				const authToken = await tokenResponse.json()
				console.log(authToken)

				return res.status(200).json({
					success: true,
					data: authToken,
				});
				if (response.status === 200) {
					const location = await response.json()
					console.log(location)
					return res.status(200).json({
						success: true,
						data: location,
						// a : data1
					});
				}
                // console.log(response)
                // console.log(response.body.data)
                // console.log(response.body.data.token)
                // console.log(typeof(response))
				// const data1 = await response.json()
				// console.log(response.json())
				// console.log(data1.json())
				// console.log('asdf')
				// console.log('data.body')
				// console.log(data.body)
				// console.log(data.body.data.token)

				// return res.status(200).json({
				// 	success: true,
				// 	data: location,
                //     // a : data1
				// });
			} catch (error) {
				console.log(error)
				return res.status(400).json({
					success: false,
					error: error
				});
			}
		// case "POST":
		// 	try {
		// 		const employees = await Employee.create(req.body);
		// 		return res.status(201).json({
		// 			success: true,
		// 			data: employees,
		// 		});
		// 	} catch (error) {
		// 		return res.status(400).json({
		// 			success: false,
		// 		});
		// 	}
		default:
			res.setHeaders("Allow", ["GET", "POST"]);
			return res
				.status(405)
				.json({ success: false })
				.end(`Method ${method} Not Allowed`);
	}
};