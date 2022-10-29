			criarTabela:(conteudo)=> {

			var tabela = El("tabela");
			for(var i = 0; i < conteudo.length; i++){
			
			var tr = cE('TR'); tabela.appendChild(tr);
			var td = cE('TD'); td.innerHTML; tr.appendChild(td);
			var td = cE('TD'); td.innerHTML=conteudo[i].conteudo; tr.appendChild(td);				
			
			}

			console.log(tabela)
			console.log(conteudo)
			}
