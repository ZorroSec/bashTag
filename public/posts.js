function postsF(posts){
	let url = "http://servicodados.ibge.gov.br/api/v3/noticias/"
	fetch(url).then((res)=>{
		res.json().then((data)=>{
			for(let i=0;i <= 99;i++){
				posts.innerHTML+=`
				<div class='post'>
					<div class='titlePost'>
						<h4>${data.items[i]['titulo']}</h4>
					</div>
					<div class='dataPublicacao'>
						<i>${data.items[i]['data_publicacao']}</i>
					</div>
					<div class='notociaPost'
						<p>${data.items[i]['introducao']}</p>
					</div>
					
					<div class='link'>
						<a href='${data.items[i]['link']}' target='__blank'><i>${data.items[i]['link']}</i></a>
					</div>
					<div class='produtoPost'>
						<i>${data.items[i]['produtos']}</i>
					</div>
				</div>
				`
				console.log(data.items[i])
			}
		})
	})
}

export { postsF }