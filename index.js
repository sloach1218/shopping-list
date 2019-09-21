$(function (){
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
        let newItem = $('#shopping-list-entry').val();
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

    $('.shopping-item-toggle').click(function(event){
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
    $('.shopping-item-delete').click(function(event){
        $(this).closest('li').remove();
    });
        
});

