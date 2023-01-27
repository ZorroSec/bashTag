function timezone(){
	const now = new Date()
	const h = now.getHours()
	const m = now.getMinutes()
	const s = now.getSeconds()
	const mm = checkTime(m)
	const ss = checkTime(s)
	const hour = document.getElementById('hour')
	hour.innerHTML=`${h}:${mm}:${ss}`
	t = setTimeout('timezone()', 500)
}
function checkTime(i){
	if(i <= 10){
		i = "0" + i
	}
	return i
}