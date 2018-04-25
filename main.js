var SUMALTO = 100;

$(document).ready(function(){
	ajustesInicio();
	ajustesMenuRedes();

	//--
	$('.jumbotron').hover(function(event) {
		$('.ys-content-area > span').show(500);
		event.preventDefault()
	}, function() {
		$('.ys-content-area > span').hide(1000);
		event.preventDefault()
	});

	lightGallery(document.getElementById('lightgallery'));
	lightGallery(document.getElementById('video-gallery'));
	lightGallery(document.getElementById('video-demoreel'));
	
	particlesJS.load('particles-js', 'assets/particles.json', function() {
		console.log('callback - particles.js config loaded');
	});

	$('.ys-telefono').mask('(000)-000-0000');

	/*$('.ys-btn-videos').click(function(){
		if($(this).hasClass('ys-btn-mostrar')){
			$(this).removeClass('ys-btn-mostrar');
			$(this).html('Mostrar -');
			mostrarOcultarVideos($(this).attr('data-mostrar'));
		}
		else{
			$(this).addClass('ys-btn-mostrar');
			$(this).html('Mostrar +');
			mostrarOcultarVideos($(this).attr('data-mostrar'));
		}
	});

	$('.ys-btn-images').click(function(){
		if($(this).hasClass('ys-btn-mostrar')){
			$(this).removeClass('ys-btn-mostrar');
			$(this).html('Mostrar -');
			mostrarOcultarImages($(this).attr('data-mostrar'));
		}
		else{
			$(this).addClass('ys-btn-mostrar');
			$(this).html('Mostrar +');
			mostrarOcultarImages($(this).attr('data-mostrar'));
		}
	});*/

	dimensionarSeccionNosotros();
	dimensionarSeccionesServicios();

	/*
	setTimeout(function(){
		dimensionarFotosTrabajos();
	}, 1000);
	*/

	$(window).scroll(function(){
		if($(this).scrollTop() > ($('.ys-content-inicio').height() / 2)){
			$('.navbar-brand').addClass('ys-show');
        }
        else{
        	$('.navbar-brand').removeClass('ys-show');
        }
    });

    $('.nav li:not(.dropdown)').click(function(){
    	if($('.navbar-collapse').hasClass('in')){
    		$('.navbar-collapse').removeClass('in');
    	}
    });

});

$(window).resize(function(event) {	
	ajustesInicio();
	ajustesMenuRedes();
	dimensionarSeccionesServicios();
	dimensionarFotosTrabajos();

	//--test



});//-Fin - Resize

//---
function mostrarOcultarVideos(element){
	if($('#'+element).hasClass('hidde-elements')){		
		$('#'+element+'.hidde-elements').css({
			'max-height' : '2500px'
		});
		$('#'+element).removeClass('hidde-elements');
	}
	else{
		$('#'+element).addClass('hidde-elements');
		$('#'+element).css({
			'max-height' : ($('#'+element + ' a').height() + 5 ) + 'px'
		});	
	}
}

function mostrarOcultarImages(element){
	if($('#'+element).hasClass('hidde-elements')){		
		$('#'+element+'.hidde-elements').css({
			'max-height' : '2500px'
		});
		$('#'+element).removeClass('hidde-elements');
	}
	else{
		$('#'+element).addClass('hidde-elements');
		$('#'+element).css({
			'max-height' : ($('#'+element + ' li').height() + 5 ) + 'px'
		});	
	}
}

function ajustesInicio(){
	dimensionarMinAltoElemento($(window), $('.ys-content-inicio'));
	dimensionarFullVideo($(window), $('#ys-video-bck'));

	if($(window).height() < $(window).width()){
		$('.ys-content-inicio .jumbotron').animate({
			marginTop : '22%'
		});
	}
	else{
		$('.ys-content-inicio .jumbotron').animate({
			marginTop : '45%'
		});	
	}

	//---Detecting ipad pro

	if($(window).width() <= 768 || $(window).width() <= 1024){
		$('#ys-video-bck').addClass('ocultando');
		$('#ys-video-bck').removeClass('mostrando');
	}

	if($(window).width() == 1024 && $(window).height() == 1366){
		$('#ys-video-bck').addClass('ocultando');
		$('#ys-video-bck').removeClass('mostrando');
	}

	if($(window).width() == 1366 && $(window).height() == 1024){
			$('#ys-video-bck').addClass('ocultando');
			$('#ys-video-bck').removeClass('mostrando');		
	}
		
	if($(window).width() <= $(window).height()){
		$('#ys-video-bck').addClass('ocultando');
		$('#ys-video-bck').removeClass('mostrando');
	}
	

}

function ajustesMenuRedes(){

	$('.ys-content-page > div').css({
		'padding-left' : ($('.ys-content-redes').width() + 10) + 'px'
	});
	$('.ys-content-page .ys-content-redes').css({
		'padding-left' :  '0px'
	});

	
	dimensionarMinAltoElemento($(window), $('.ys-content-redes'));
	
	$('.ys-content-redes .ys-content-nombre').css({
		'margin-top' : $('.navbar').outerHeight() + 'px'
	});	
}

//---
//===
function dimensionarMinAltoElemento(referenciaAlto, elemento){
	$(elemento).css({
		'min-height' : $(referenciaAlto).outerHeight() + 'px'
	});
}

function dimensionarFullElemento(referencia, elemento){
	$(elemento).css({
		'height' : $(referencia).height() + 'px',
		'width' : $(referencia).width() + 'px'
	});	
}

function dimensionarFullVideo(referencia, elemento){
	var anchoVideo = 320;
	var altoVideo = 180;
	var anchoReferencia =  $(referencia).width();

	$(elemento).css({
		'height' : ((anchoReferencia * altoVideo) / anchoVideo) + 'px',
		'width' : anchoReferencia + 'px'
	});	
}
//===

function dimensionarSeccionNosotros(){
	if($(window).height() > $(window).width()){
		$('#nosotros').css({
			'min-height' : ($('#nosotros').height() + SUMALTO) + 'px'		
		});
	}
	else{
		$('#nosotros').css({
			'min-height' : $(window).height() + 'px'		
		});
	}
}

function dimensionarSeccionesServicios(){
	if($(window).height() > $(window).width()){
		$('.ys-content-servicio').css({
			'min-height' : ($('.ys-content-servicio').height() + SUMALTO) + 'px'		
		});
	}
	else{
		$('.ys-content-servicio').css({
			'min-height' : $(window).height() + 'px'		
		});
	}
}

function dimensionarFotosTrabajos(){
	if($(window).width() > 768){
		$('#video-gallery').css({
			'max-height' : '195px'
		});
		$('#lightgallery').css({
			'max-height' : '195px' 
		});
	}
	else{
		$('#video-gallery').css({
			'max-height' : '1300px'
		});
		$('#lightgallery').css({
			'max-height' : '1300px'
		});	
	}
}

//--- Fin - Sección Contacto

function enviarEmail(){
	var valid;
	valid = validarContacto();

	if(valid === true){		
		$('.ys-content-btn').html('');
		var data = {
			nombre : $('#userName').val(),
			telefono : $('#userPhone').val(),
			email : $('#userEmail').val(),
			mensaje : $('#userMessage').val()
		};
		$.ajax({
		    type: 'POST',
		    url: 'sendmail.php',
		    data: data,
		    success: function(){		        		        
		        $('.content-form-contacto').html('');			    
			    $('.ys-msjConfirmacion').addClass('ys-show');
		    },
		    error: function(){		    	
		    }
		});

	}
	else
	{
		console.log('Diste click en enviar y esta vacio...');
	}
}

function validarContacto(){
	var valid = true;
	var msj = 'Los campos: ';
	if(($('#userName').val() === '')){
		msj = msj + ' *Nombre y apellidos, ';
		valid = false;
	}
	if(($('#userEmail').val() === '')){
		msj = msj + ' * Correo electrónico, ';
		valid = false;
	}
	/*if(($('#userPhone').val()) === ''){
		msj = msj + ' *Teléfono, ';
		valid = false;
	}*/
	if(($('#userMessage').val() === '')){
		msj = msj + ' *Mensaje, ';
		valid = false;
	}

	if(!valid){
		msj = msj + ' son necesarios para poder contactarte, ¡llénalos porfavor!';
		$('.ys-msj-info').html('' + msj);
	}
	else{
		msj = '';
		$('.ys-msj-info').html('' + msj);
	}
	return valid;
}