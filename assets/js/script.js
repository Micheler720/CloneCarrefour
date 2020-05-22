var slideItem = 0;
var slideItemMercado = 0;

window.onload = function() {
	//setInterval(passarSlide, 8000);
	document.querySelectorAll('.bolinha')[0].style.backgroundColor = "#3566ce";
	this.atribuirImagem();

}
window.onresize = function() {
    this.atribuirImagem();
}

function slidesWidth(){
	let wdithPage = document.getElementById("slideshow").offsetWidth;
	elementos = document.getElementsByClassName('slides');
	for (let i = 0 ; i < elementos.length ; i++){
		elementos[i].style.width = wdithPage +'px';
	} 
}

function passarSlide() {
	let slidewidth = document.getElementById("slideshow").offsetWidth;
	if(slideItem >= 10) {
		slideItem = 0;
	} else {
		slideItem++;
	}
	this.alterarCorBolinha();	
	document.getElementsByClassName("slide-show-area")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}

function passarSlideMercado(){
	let slidewidth = document.getElementById('slideshow-mercado').offsetWidth;
	if(slideItemMercado>=1){
		slideItemMercado =0;
	}else{
		slideItemMercado++;
	}
	document.getElementsByClassName('slide-show-area-mercado')[0].style.marginLeft = "-"+(slidewidth * slideItemMercado)+"px";
}
function alterarCorBolinha(){
	let el = document.querySelectorAll('.bolinha');				
	for(let i =0 ; i < el.length ;i++){
		el[i].style.backgroundColor = "#dfdfdf";
	}
	el[slideItem].style.backgroundColor = "#3566ce";

}
function mudarSlide(pos) {
	slideItem = pos;
	this.alterarCorBolinha();
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	document.getElementsByClassName("slide-show-area")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}
function exibirMenusOcultos(){
	var elementos = document.getElementsByClassName('menu-mobile-familia')[0].getElementsByTagName('div');
	for(var i = 0 ; i < elementos.length ; i++){
		elementos[i].classList.remove('oculto');
	}
	document.getElementsByClassName('submenu-mobile-familia-button')[0].style.display = 'none';
}
function exibeSubmenuMobile(elementoDOM){
			//parentNode Elemento Pai
			var elemento = elementoDOM.parentNode.getElementsByTagName('ul')[0];
			if(elemento.style.display == 'none' || elemento.style.display == ''){
				elemento.classList.remove('oculto');
				elemento.style.display = 'block';
			}else{
				elemento.classList.add('oculto');
				elemento.style.display = 'none';
			}
		}
		function ocultaMenuMobile(){
			document.getElementsByClassName('menu-wrapper')[0].style.display = 'none';
			document.getElementsByClassName('menu-wrapper-mobile')[0].style.display = 'none';
		}
		function exibeMenuMobile(){
			document.getElementsByClassName('menu-wrapper')[0].style.display = 'flex';
			document.getElementsByClassName('menu-wrapper-mobile')[0].style.display = 'block';
		}
		function atribuirImagem(){
			let el = document.querySelectorAll('.slides'); 
			let elMercado = document.querySelectorAll('.slides-mercado');
			if(screen.width < 770 ){
				for (let i = 0; i < el.length; i++) {
					el[i].style.backgroundImage = 'url(' + el[i].dataset.mobile + ')';
				}
				for (let i = 0 ; i< elMercado.length ; i++){
					elMercado[i].style.backgroundImage = "url(" + elMercado[i].dataset.mobile + ")";
				}
				document.getElementById('imagemBannerTopo').src = "assets/imagens/estamosaquiporvoce-v2-m.png";
				document.getElementById('banner-menu').src = "assets/imagens/bannerMenu-m.png";
			}else{
				for (let i = 0; i < el.length; i++) {
					el[i].style.backgroundImage = 'url(' + el[i].dataset.desktop + ')';
				}

				for (let i = 0 ; i< elMercado.length ; i++){
					elMercado[i].style.backgroundImage = "url(" + elMercado[i].dataset.desktop + ")";
				}
				document.getElementById('imagemBannerTopo').src = "assets/imagens/estamosaquiporvoce-v2-d.png";
				document.getElementById('banner-menu').src = "assets/imagens/bannerMenu.png";
			}
			this.slidesWidth();
		}
