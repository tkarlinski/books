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

    $('#book_readBooks_isRead').prop('checked', (startDate.val() && endDate.val()));
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

        var href = $("[data-element-id=" + $(this).attr("delete-element-id") + "]").attr('href');
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    location.reload();
                } else {
                    alert('Wystąpił błąd podczas usuwania');
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