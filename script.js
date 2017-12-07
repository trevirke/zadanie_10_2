$(document).ready(function(){
	console.log('DOM loaded - you can have fun');
});

//nadawanie koloru czerwonemu w co drugim span:
var span = $("span");
    span.each(function(index, element) {
        if(index % 2 == 0) {
		$(element).css('color', 'red');
	};
});
//lub
//   $("span:even").css('color', 'red');


//wybieranie wszystkich paragrafów i dodanie do nich przycisku:
var paragraphs = $('p');
    paragraphs.each(function(index, element) {
        var button = '<button class="btn" data-tmp="' + index + '"> Click </button>'
        $(element).append(button)        
    });

//dodawanie event handlerów. Każdy przycisk po kliknięciu wyświetli alert:
$('button').click(function() {
    alert($(this).attr("data-tmp"));
});

