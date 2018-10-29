
function checkInput() {

    let text = document.getElementById('search1').innerText;

    console.log(text);
    if(isNaN(parseInt(text,10))){
        console.log('of');
        var accountDelete = $('#numberButton'),
            accountDeleteDialog = $('#failWindow');

        accountDelete.on('click', function() {
            accountDeleteDialog[0].showModal();
        });

        $('#canselButton').on('click', function() {
            accountDeleteDialog[0].close();
        });
    }



}


$('#numberButton').on('click', function () {

    if(isNaN(parseInt(text,10))) {
        $("#elementId").dialog('open');
    }
});