    //  START ART
var figlet = require('figlet');
        // isometric3  poison  slant  speed
figlet.text('Employee Manager', {
    font: 'isometric3',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 400,
    whitespaceBreak: true
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});