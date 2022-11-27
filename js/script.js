$(document).ready(function () {



    $('.my-cart').click(function () { 

        $('.my-basket').addClass('basket-apper');

    });

    $('.icon-close-basket').click(function () { 

        $('.my-basket').removeClass('basket-apper');

    });


    
    
    $('#regist').click(function () { 

      
        $('.regist').fadeIn(500);
        });
    
    $('#close').click(function () { 
        $('.regist').fadeOut(500);  
    });


    $('#new-account').click(function () { 
        $('.signUp').fadeIn(500); 
        $('.regist').fadeOut(500); 
    });

    $('#close2').click(function () { 
        $('.signUp').fadeOut(500);  
    });



    
    
    // Get slider items 
    let allImages = Array.from(document.querySelectorAll('.my-slider img'));
    let slideNumber = allImages.length;
    let slideNumberText = document.getElementById('slide-number'); 
    let currentSlide = 1;


    // create ul 
    let paginationUl = document.createElement('ul');
    paginationUl.setAttribute('id' , 'pagination-ul')

    for (let i = 1 ; i <= slideNumber ; i++){
        // create li 
        let paginationLi = document.createElement('li');
        paginationLi.setAttribute('data-index' , i)
        paginationLi.appendChild(document.createTextNode(i));
        // appent li into ul  
        paginationUl.appendChild(paginationLi)

    }
    document.getElementById('indicators').appendChild(paginationUl);

    // get Ul and li>array
    let myPagination = document.getElementById('pagination-ul');
    let myLi = Array.from(document.querySelectorAll('#pagination-ul li'));

    for (let i = 0 ; i < myLi.length ; i++){

        myLi[i].onclick=function(){

            currentSlide = parseInt(this.getAttribute('data-index'));
            check();
        }
    }


    check();



    let nextBtn = document.getElementById('next');
    let prevBtn = document.getElementById('prev');

    nextBtn.onclick = next;
    prevBtn.onclick = prev;


    function next(){

        if(nextBtn.classList.contains('disable')){

            return false;

        }else{
            currentSlide++;
            check();

        }
    }

    function prev(){
        if(prevBtn.classList.contains('disable')){

            return false;

        }else{
            currentSlide--;
            check();

        }
       

    }

    function check(param1) { 
        
        remove();
        slideNumberText.textContent= currentSlide + ' of ' + slideNumber;
        allImages[currentSlide - 1].classList.add('active');
        myLi[currentSlide - 1].classList.add('active');
        
        if(currentSlide == 1 ){

            document.getElementById('prev').classList.add('disable');

        }else{
            document.getElementById('prev').classList.remove('disable');
        }

        if(currentSlide == slideNumber ){

            document.getElementById('next').classList.add('disable');

        }else{
            document.getElementById('next').classList.remove('disable');
        }

      

        

    }


    function remove(){

        allImages.forEach(function(img){
            img.classList.remove('active');


        })

        myLi.forEach(function(li){

            li.classList.remove('active');


        });


    }


    document.getElementById('allcateg').onclick = function () { 

        document.getElementById('categ').classList.toggle('activeCateg');

    }


    document.getElementById('close-categ').onclick = function () { 
        document.getElementById('categ').classList.remove('activeCateg');

    }


    let myRow = document.getElementsByClassName('row');
    myRow[0].style.display='block';


    document.getElementById('clothes').onclick = function () { 
        myRow[0].style.display='block';
        myRow[1].style.display='none';
        myRow[2].style.display='none';
        myRow[3].style.display='none';
        myRow[4].style.display='none';
        myRow[6].style.display='none';


    }

    document.getElementById('health').onclick = function () {
     
        myRow[3].style.display='block';
        myRow[0].style.display='none';
        myRow[1].style.display='none';
        myRow[2].style.display='none';
        myRow[4].style.display='none';
        myRow[6].style.display='none';


    }

    document.getElementById('sport').onclick = function(){
        myRow[2].style.display='block';
        myRow[0].style.display='none';
        myRow[1].style.display='none';
        myRow[3].style.display='none';
        myRow[4].style.display='none';
        myRow[5].style.display='none';
        

    }

    document.getElementById('mobile').onclick = function () { 

        myRow[1].style.display='block';
        myRow[0].style.display='none';
        myRow[2].style.display='none';
        myRow[3].style.display='none';
        myRow[4].style.display='none';
        myRow[5].style.display='none';

    }

    document.getElementById('computer').onclick = function () { 

        myRow[5].style.display='block';
        myRow[0].style.display='none';
        myRow[1].style.display='none';
        myRow[2].style.display='none';
        myRow[3].style.display='none';
        myRow[4].style.display='none';

        

    }

    document.getElementById('chidren').onclick = function () { 

        myRow[4].style.display='block';
        myRow[0].style.display='none';
        myRow[1].style.display='none';
        myRow[2].style.display='none';
        myRow[3].style.display='none';
        myRow[5].style.display='none';

    }
    
    
    
    

    $('#search-icon').click(function(){

        $('#search-line').fadeToggle();

    });

  


    

  

    
    $('#itemslider').carousel({ interval: 3000 });
    
    $('.carousel-showmanymoveone .item').each(function(){
    var itemToClone = $(this);
    
    for (var i=1;i<6;i++) {
    itemToClone = itemToClone.next();
    
    if (!itemToClone.length) {
    itemToClone = $(this).siblings(':first');
    }
    
    itemToClone.children(':first-child').clone()
    .addClass("cloneditem-"+(i))
    .appendTo($(this));
    }
    });
    
        




    let counter2 = 0;

    document.getElementById('next-btn').addEventListener('click', function () {
        

        if(document.getElementById('container-img').style.transform = 'translateX()'  -2700){
            
            alert('last image');
            return false;
             
           
        }

       
        counter2++;
        document.getElementById('container-img').style.transform = 'translateX(' + (-200 * counter2) + 'px)';
        document.getElementById('container-img').style.transition = 'transform .6s ease-in-out';
        console.log(document.getElementById('container-img').style.transform)

    })

    

    document.getElementById('prev-btn').addEventListener('click', function () {
        
        
        if(counter2 == 0 ){
            
          
            return false;
             
           
        }
        
        
        counter2--;
        document.getElementById('container-img').style.transform = 'translateX(' + (-200 * counter2) + 'px)';
        document.getElementById('container-img').style.transition = 'transform .6s ease-in-out';


    })
   

    setInterval(() => {
        // randomnumber  
        
        if(counter2 >=2){
            return false;
        }
        counter2++;
        document.getElementById('container-img').style.transform = 'translateX(' + (-200 * counter2) + 'px)';
        document.getElementById('container-img').style.transition = 'transform .6s ease-in-out';
    
        
    }, 2000);
    



    
 
    var myCarousel = document.querySelector('#myCarousel')
    var carousel = new bootstrap.Carousel(myCarousel)






















   
   

    
});



    
