(function(){
    'use strict'
    console.log('reading js');

    const myForm = document.querySelector("#myForm");
    const madLib = document.querySelector('#madLib');

    myForm.addEventListener('submit', function (e){
        e.preventDefault();
        
        const noun = document.querySelector('#noun').value;
        const emotion = document.querySelector('#emotion').value;
        const pbod1 = document.querySelector('#pbod1').value;
        const verb1 = document.querySelector('#verb1').value;
        const adj1 = document.querySelector('#adj1').value;
        const pbod2 = document.querySelector('#pbod2').value;
        const verb2 = document.querySelector('#verb2').value;
        const verb3 = document.querySelector('#verb3').value;
        const adj2 = document.querySelector('#adj2').value;
        const adj3 = document.querySelector('#adj3').value;

        

        let myText;
        if( noun ==''){
            myText = `please provide a noun`;
            document.querySelector('#noun').focus();
        } else if (emotion ==''){
            myText = `please provide an emotion`;
            document.querySelector('#emotion').focus();
        } else if (pbod1 ==''){
            myText = `please provide a part of body plural`
            document.querySelector('#pbod1').focus();
        } else if (verb1 ==''){
            myText = `please provide a verb`
            document.querySelector('#verb1').focus();
        } else if (adj1 ==''){
            myText = `please provide an adjective`
            document.querySelector('#adj1').focus();
        } else {
            myText = `With so many coding ${noun} in DES 157A, it can be easy to become ${emotion}. You know that feeling, when you've been up all nigh coding until your ${pbod1} want to fall off. Me too, I've been there. When you find yourself in that mental state, do yourself a favor and take a break. A good night's ${verb1} is your best friend. When you wake up, have another go at that ${adj1} code error. 9/10 times, a fresh pair of ${pbod2} will help you ${verb2} the code error with more clarity. When you ${verb3} the code error, rejoice in your ${adj2}, and remember how ${adj3} you feel right now the next time you get stuck.`;
            // ${noun}, ${emotion}, ${pbod1}, ${verb1}, ${adj1}, ${pbod2}, ${verb2}, ${verb3}, ${adj2}, ${adj3}
            document.querySelector('#noun').value = '';
            document.querySelector('#emotion').value = '';
            document.querySelector('#pbod1').value = '';
            document.querySelector('#verb1').value = '';
            document.querySelector('#adj1').value = '';
            document.querySelector('#pbod2').value = '';
            document.querySelector('#verb2').value = ''; 
            document.querySelector('#verb3').value = '';
            document.querySelector('#adj2').value = '';
            document.querySelector('#adj3').value = '';
        }
        madLib.innerHTML = myText;
    })
}())