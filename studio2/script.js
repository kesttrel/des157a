(function(){
    'use strict';
    console.log('readingjs');

    const hotSpots = document.querySelectorAll('#container div');
    const theImg = document.querySelector('#container img');
    let changePhoto = ['a', 'b', 'c'];
    let set;
    // , 'd', 'e', 'f'
    hotSpots.forEach(function (eachSpot){
        eachSpot.addEventListener('mouseover', zoomPhoto);
        eachSpot.addEventListener('mouseout', function(){
            theImg.className = 'start';
        });    
        eachSpot.addEventListener('click', swap);
    });

    function zoomPhoto(e){

        // console.log('zoom photo');
        const thisDiv = e.target.id;
        // console.log(thisDiv);
        switch(thisDiv){
            case 'a' : theImg.className = 'a'; break;
            case 'b' : theImg.className = 'b'; break;
            case 'c' : theImg.className = 'c'; break;
            case 'd' : theImg.className = 'd'; break;
            case 'e' : theImg.className = 'e'; break;
            case 'f' : theImg.className = 'f'; break;
        }
    }

    function swap(){
        const pictureFrame = document.querySelectorAll('.pictureFrame img');
        if ( set <= 1){
            set++;
        } else {
            set = 0;
            console.log('hello');
        }
        console.log(set);

        pictureFrame[0].src = `images/${changePhoto[set]}-1.png`;
        pictureFrame[1].src = `images/${changePhoto[set]}-2.png`;
        pictureFrame[2].src = `images/${changePhoto[set]}-3.png`; 
        // for ( let i = 0; i < changePhoto.length; i++ ) {
        //     console.log(i);
            // if (pictureFrame[i].id = 'a') {
            //     pictureFrame[0].src = `images/${changePhoto[0]}-1.png`;
            //     pictureFrame[1].src = `images/${changePhoto[0]}-2.png`;
            //     pictureFrame[2].src = `images/${changePhoto[0]}-3.png`;
            // } else if (pictureFrame[i].id = 'b'){
            //     pictureFrame[0].src = `images/${changePhoto[1]}-1.png`;
            //     pictureFrame[1].src = `images/${changePhoto[1]}-2.png`;
            //     pictureFrame[2].src = `images/${changePhoto[1]}-3.png`;
            // } else if (pictureFrame[i].id = 'c'){
            //     pictureFrame[0].src = `images/${changePhoto[2]}-1.png`;
            //     pictureFrame[1].src = `images/${changePhoto[2]}-2.png`;
            //     pictureFrame[2].src = `images/${changePhoto[2]}-3.png`;
            //     // console.log(pictureFrame[i].id);
            // }
            
        //     pictureFrame[0].src = `images/${changePhoto[i]}-1.png`;
        //     pictureFrame[1].src = `images/${changePhoto[i]}-2.png`;
        //     pictureFrame[2].src = `images/${changePhoto[i]}-3.png`; 
        // }
        console.log(changePhoto[set]);
    }
}());