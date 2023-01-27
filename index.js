const { express, app } = require('./routes.js')
app.use('/public', express.static('./public'))
app.use('/styles', express.static('./styles'))
app.use('/view', express.static('./view'))
app.use('/tmp', express.static('./tmp'))

app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/index.html')
})

app.listen(3000, (err)=>{
	if(!err){
		console.log({ message: "success" })
	}
})