function carregar() {
  let ip_sistema = window.document.getElementById('ip-sistema')
        fetch('https://api.ipify.org?format=json')
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					if (data.ip == 'http://ipfixo.in:56664/') {
                        ip_sistema.src = 'http://192.168.1.100/mmrest/autocliente/'
                    }
				});
}

document.onload = carregar()