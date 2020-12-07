import $ from 'jquery';
import 'bootstrap';
import '../css/app.scss';
import 'bootstrap-select';

$('select').selectpicker({
    noneSelectedText: 'Wybierz...',
    liveSearchPlaceholder: 'Wyszukaj...',
    liveSearchNormalize: true
});

$('#readBooks input[type=date]').change(function () {
    let startDate = $('#book_readBooks_startDate');
    let endDate = $('#book_readBooks_endDate');
    let isRead = document.getElementById('book_readBooks_isRead');

    if (!isRead.checked && startDate.val() && endDate.val()) {
        isRead.checked = true;
    }
});

var modalConfirm = function(callback){

    $(".btn-delete").on("click", function(e){
        e.preventDefault();
        $("#modalBookTitle").text($(this).attr("data-element-title"));
        $("#modal-btn-yes").attr('delete-element-id', $(this).attr("data-element-id"));
        $("#mi-modal").modal('show');
    });

    $("#modal-btn-yes").on("click", function(){
        callback(true);

        let buttonDelete = $("[data-element-id=" + $(this).attr("delete-element-id") + "]");
        let href = buttonDelete.attr('href');
        const backLink = buttonDelete.attr('back-link');

        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    if (typeof backLink !== typeof undefined && backLink !== false) {
                        location.replace(backLink);
                    } else {
                        location.reload();
                    }
                } else {
                    location.reload();
                }
            }
        };
        xhr.open('DELETE', href, true);
        xhr.send();
    });

    $("#modal-btn-no").on("click", function(){
        callback(false);
        $("#mi-modal").modal('hide');
    });
};

modalConfirm(function(confirm){
});