const ipc = require('electron').ipcRenderer;
const printPDFbutton = doument.getElementByID('print-pdf');

printPDFbutton.addEventListener('click', function(event){

    ipc.send('print-to-pdf');
});

ipc.on('wrote-pdf', function(event, path){
 const message = 'Wrote pdf to :$(path)';
 document.getElementById('pdf-path').innerHTML = message;


});