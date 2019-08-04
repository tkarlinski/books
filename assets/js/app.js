import $ from 'jquery';
import 'bootstrap';
import '../css/app.scss';
import 'bootstrap-select';

$('select').selectpicker({
    noneSelectedText: 'Wybierz...',
    liveSearch: true,
    liveSearchPlaceholder: 'Wyszukaj...',
    liveSearchNormalize: true
});

$('#readBooks input[type=date]').change(function () {
    let startDate = $('#book_readBooks_startDate');
    let endDate = $('#book_readBooks_endDate');

    $('#book_readBooks_isRead').prop('checked', (startDate.val() && endDate.val()));
});