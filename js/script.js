//Navbar

$(document).on("scroll", function(){
    if
  ($(document).scrollTop() > 86){
      $("#banner").addClass("nav2");
    }
    else
    {
        $("#banner").removeClass("nav2");
    }
});

//scroll buttons
$(function() {
    $('#down').click (function() {
      $('html, body').animate({scrollTop: $('#content-site').offset().top - 70}, 'slow');
      return false;
    });
  });


  $(document).ready(function(){
    $('#explore').click (function() {
      $('html, body').animate({scrollTop: $('#content-4').offset().top - 75}, 'slow');
      return false;
    });
  });

//planos hide show
  $(document).ready(function(){

    $(".btn-default").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');           
        }
    });
    
    if ($(".btn-default").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

//fade in elements
$(document).ready(function() {
    
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
  
      /* Check the location of each desired element */
      $('.hideme').each( function(i){
          
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){
              
              $(this).animate({'opacity':'1'},1000);
                  
          }
          
      }); 
  
  });
  
});

//scroll menu
$(document).ready(function(){

  $("li.content-2").click(function(e) {
      event.preventDefault();
  $('html,body').animate({
      scrollTop: $("#content-2").offset().top - 70},
  'slow');
  });

  $("li.content-3").click(function(e) {
      event.preventDefault();
  $('html,body').animate({
      scrollTop: $("#content-3").offset().top - 70},
  'slow');
  });
  
  $("li.content-4").click(function(e) {
      event.preventDefault();
  $('html,body').animate({
      scrollTop: $("#content-4").offset().top - 70},
  'slow');
  });

  $("li.content-5").click(function(e) {
      event.preventDefault();
  $('html,body').animate({
      scrollTop: $("#content-5").offset().top - 70},
  'slow');
  });
  
  $(".navbar-brand").click(function(e) {
      event.preventDefault();
  $('html,body').animate({
      scrollTop: $("#home").offset().top},
  'slow');
  });

});


//RANDOM user
function createNode(element){
  return  document.createElement(element);
}

function append(parent, el){
  return  document.appendChild(el);
}

const ul = document.getElementById("authors");
const url = 'https://randomuser.me/api/?results=10'

fetch (url)
  .then((resp) => resp.json())
  .then(function(data){
      let authors = data.results;
      return authors.map(function(author){

        let li = createNode('li'),
        span = createNode('span');

        span.innerHTML = `${author.name.first} ${author.name.last}`;

        append(li,img),
        append(li, span),
        append(ul,li);

      });

  })
  .catch(function(error){
    console.log(JSON.stringify(error));
  });


  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });

