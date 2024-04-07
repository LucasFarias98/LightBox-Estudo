function efeitoBox(){
   var origemClicada = $(this).attr("src");
   $('.imgs').attr("src",origemClicada);
   $('.fotos').addClass('efeitoAparecer');
   $('body').addClass('efeitoBody'); 
   $('.album').addClass('efeitoSumir');    

}
$('.imagens').click(efeitoBox);

function sairEfeito(){
 $('.fotos').removeClass('efeitoAparecer');   
 $('body').removeClass('efeitoBody'); 
 $('.album').removeClass('efeitoSumir');   



}
$('.icone').click(sairEfeito);





