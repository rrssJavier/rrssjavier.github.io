// ---------Responsive-navbar-active-animation-----------
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}


$(document).ready(function(){
	setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});

$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
});



//------------------------- cambia pestaña al hacer scroll-------
$(document).ready(function () {
	// Listener para el scroll
	$(window).on('scroll', function () {
		// Obtener la posición actual del scroll
		var scrollPosition = $(window).scrollTop();
		
		// Iterar a través de las secciones
		$('section').each(function () {
			var section = $(this);
			var sectionId = section.attr('id');
			var sectionTop = section.offset().top;
			
			// Comparar la posición del scroll con la posición de cada sección
			if (scrollPosition >= sectionTop-150) {
				// Remover la clase "active" de todos los elementos de la barra de navegación
				$('#navbarSupportedContent ul li').removeClass("active");
				// Agregar la clase "active" al enlace correspondiente en la barra de navegación
				$('#navbarSupportedContent ul li a[href="#' + sectionId + '"]').parent().addClass('active');
				setTimeout(function(){ test(); });
			}
		});
	});
});


//------------------------- Filtras los proyectos por categorias----------------

var portfolioIsotope = $('.portfolio-container').isotope({
	itemSelector: '.portfolio-item',
	layoutMode: 'fitRows'
  });
  
  // Cambiar el selector para los botones HTML, ajustándolo a tu estructura HTML
  $('.filter-button').on('click', function () {
	$(".filter-button").removeClass('active');
	$(this).addClass('active');
  
	portfolioIsotope.isotope({filter: $(this).data('filter')});
  });
  



 
	//------------------------- cambia el color de los botones clickeados-------

  document.addEventListener("DOMContentLoaded", function () {
	// Obtener los botones por sus IDs
	var boton1 = document.getElementById("btn_all");
	var boton2 = document.getElementById("btn_powerbi");
	var boton3 = document.getElementById("btn_sql");
	var boton4 = document.getElementById("btn_webscraping");
	var boton5 = document.getElementById("btn_python");

	// Agregar un evento de clic al "Botón"
	boton1.addEventListener("click", function () {
		// Cambiar el color del "Botón clickeado"
		btn_all.style.backgroundColor = "#FF6600"; 

		// Restaurar el color original de los demas botones"
		btn_webscraping.style.backgroundColor = "#006666"; 
		btn_sql.style.backgroundColor = "#006666"; 
		btn_powerbi.style.backgroundColor = "#006666"; 
		btn_python.style.backgroundColor = "#006666"; 
	});

	// Agregar un evento de clic al "Botón"
	btn_powerbi.addEventListener("click", function () {
		// Cambiar el color del "Botón clickeado"
		btn_powerbi.style.backgroundColor = "#FF6600"; 

		// Restaurar el color original de los demas botones"
			btn_all.style.backgroundColor = "#006666"; 
			btn_sql.style.backgroundColor = "#006666"; 
			btn_webscraping.style.backgroundColor = "#006666"; 
			btn_python.style.backgroundColor = "#006666"; 
	});

	// Agregar un evento de clic al "Botón"
		btn_sql.addEventListener("click", function () {
		// Cambiar el color del "Botón clickeado"
			btn_sql.style.backgroundColor = "#FF6600"; 

		// Restaurar el color original de los demas botones"
			btn_all.style.backgroundColor = "#006666"; 
			btn_webscraping.style.backgroundColor = "#006666"; 
			btn_powerbi.style.backgroundColor = "#006666"; 
			btn_python.style.backgroundColor = "#006666"; 
	});

		// Agregar un evento de clic al "Botón"
			btn_webscraping.addEventListener("click", function () {
			// Cambiar el color del "Botón clickeado"
			btn_webscraping.style.backgroundColor = "#FF6600"; 
	
			// Restaurar el color original de los demas botones"
			btn_all.style.backgroundColor = "#006666"; 
			btn_sql.style.backgroundColor = "#006666"; 
			btn_powerbi.style.backgroundColor = "#006666"; 
			btn_python.style.backgroundColor = "#006666"; 
		});
	
		// Agregar un evento de clic al "Botón"
			btn_python.addEventListener("click", function () {
			// Cambiar el color del "Botón clickeado"
			btn_python.style.backgroundColor = "#FF6600"; 
	
			// Restaurar el color original de los demas botones"
			btn_all.style.backgroundColor = "#006666"; 
			btn_powerbi.style.backgroundColor = "#006666"; 
			btn_webscraping.style.backgroundColor = "#006666"; 
			btn_sql.style.backgroundColor = "#006666"; 
		});
  });




