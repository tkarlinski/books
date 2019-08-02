export default function(exclamationCount) {
    $('body').ready(function () {
        console.log('message');
    });

    return 'JS work'+'!'.repeat(exclamationCount);
}


