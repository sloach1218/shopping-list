$(function (){
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
        let newItem = $('#shopping-list-entry').val();
        $('#shopping-list-entry').val('');
        let listItem = 
        '<li>' +
            '<span class="shopping-item">' + newItem + '</span>' +
            '<div class="shopping-item-controls">' +
            '<button class="shopping-item-toggle">' +
                '<span class="button-label">check</span>' +
            '</button>' +
            '<button class="shopping-item-delete">' +
                '<span class="button-label">delete</span>' +
            '</button>' +
            '</div>'+
        '</li>'
        $('.shopping-list').append(listItem);
        
    });

    $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
    $('.shopping-list').on('click', '.shopping-item-delete', function(event){
        $(this).closest('li').remove();
    });
        
});

