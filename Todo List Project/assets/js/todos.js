// check off specific todos by clicking

$('ul').on('click', 'li', function() {
	$(this).toggleClass('completed');
});

//click on X to delete Todo
$('ul').on('click', 'span', function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if (event.which === 13){
		//grab new todo text from input
		var toDoText = $(this).val();
		//create a new li to add to ul
		$('ul').append("<li><span><i class='fas fa-trash-alt'></i></span> " + toDoText + '</li>');
		$(this).val('');
	} 
})

$('#toggle').click(function() {
	$("input[type='text']").fadeToggle();
})