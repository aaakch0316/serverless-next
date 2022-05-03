
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
 
			} catch (error) {
				console.log(error)
				return res.status(400).json({
					success: false,
					error: error
				});
			}
		case "POST":
			try {

				const {language, text, model, token}  = JSON.parse(req.body)
				const keyResponse = await fetch("https://dev.aistudios.com/api/odin/makeVideo",{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						"appId":"aistudios.com",
						"platform":"web",
						"isClientToken":true,
						"token":token,
						"uuid":"6443234b-77d5-4013-bfd6-bb9399f317d9",
						"sdk_v":"1.0",
						"clientHostname":"aistudios.com",
						"language": language,
						"text": text,
						"model": model,
						"clothes": "1"
					}),
				})
				const videoKey = await keyResponse.json()
				console.log(videoKey)
				console.log(videoKey.data.key)

				let flag ="waiting"
				while (true){
					console.log(1)
					if (flag ==="waiting" || flag !== 100){
						console.log(2)
						const videoResponse = await fetch("https://dev.aistudios.com/api/odin/findProject",{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({
								"appId":"aistudios.com",
								"platform":"web",
								"isClientToken":true,
								"token":token,
								"uuid":"6443234b-77d5-4013-bfd6-bb9399f317d9",
								"sdk_v":"1.0",
								"clientHostname":"aistudios.com",
								"key": videoKey.data.key
							}),
						})
						console.log(3)
						const videoUrl = await videoResponse.json()
						flag = videoUrl.data.progress
						console.log(flag)
					}else{
						console.log('endendend')
						const videoResponse = await fetch("https://dev.aistudios.com/api/odin/findProject",{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({
								"appId":"aistudios.com",
								"platform":"web",
								"isClientToken":true,
								"token":token,
								"uuid":"6443234b-77d5-4013-bfd6-bb9399f317d9",
								"sdk_v":"1.0",
								"clientHostname":"aistudios.com",
								"key": videoKey.data.key
							}),
						})
						console.log(3)
						const videoUrl = await videoResponse.json()
						console.log(videoUrl)
						console.log('endendend')
						break
					}
				}

				console.log(videoUrl)

				return res.status(201).json(videoUrl);
			} catch (error) {
				return res.status(400).json({
					success: false,
				});
			}
		default:
			res.setHeaders("Allow", ["GET", "POST"]);
			return res
				.status(405)
				.json({ success: false })
				.end(`Method ${method} Not Allowed`);
	}
};