$(document).ready(function(){
              if($(document).width()>= 768)
              {
                $('ul.nav li.dropdown').hover(function() {
                $(this).find('.dropdown-menu').stop(true, true).delay().fadeIn(200);
                }, function() {
                $(this).find('.dropdown-menu').stop(true, true).delay().fadeOut(200);
                });
              }
               $(document).click(function (event) { 
                    var _opened = $(".navbar-collapse").hasClass("in");
                    if (_opened === true) {
                        $("button.navbar-toggle").click();
                    }
                });
               var _year = new Date().getFullYear();
               $("#year").html(_year);
               $('a[href*="#"]:not([href="#"]):not(a.accordion-toggle)').click(function() {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                  var _target = $(this.hash);
                  _target = _target.length ? _target : $('[name=' + this.hash.slice(1) + ']');
                  if (_target.length) {
                    $('html, body').animate({
                      scrollTop: _target.offset().top
                    }, 1000);
                    return false;
                  }
                }
              });

          });
          