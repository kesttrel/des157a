(function(){
    'use strict'
    console.log('reading js');

    const myForm = document.querySelector("#myForm");
    const madLib = document.querySelector('#madLib');

    myForm.addEventListener('submit', function (e){
        e.preventDefault();
        
        const noun1 = document.querySelector('#noun1').value;
        const emotion1 = document.querySelector('#emotion1').value;
        const pbod1 = document.querySelector('#pbod1').value;
        const verb1 = document.querySelector('#verb1').value;
        const adj1 = document.querySelector('#adj1').value;
        const pbod2 = document.querySelector('#pbod2').value;
        const verb2 = document.querySelector('#verb2').value;
        const verb3 = document.querySelector('#verb3').value;
        const adj2 = document.querySelector('#adj2').value;
        const adj3 = document.querySelector('#adj3').value;
    })
}())