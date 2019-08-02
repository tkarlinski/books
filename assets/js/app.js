import $ from 'jquery';
import 'bootstrap';
import '../css/app.scss';
import 'bootstrap-select';

$('body').ready(function () {
    $('select').selectpicker({
        noneSelectedText: 'Wybierz...',
        liveSearch: true,
        liveSearchPlaceholder: 'Wyszukaj...',
        liveSearchNormalize: true
    });
});

