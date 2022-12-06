(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    function goThankPage(lang) {

        setTimeout(function() {

            var returnUrl = "https://lemaclinic.com/form/en/implant-treatment/tesekkurler.php?returnUrl=" + $("#returnUrl").val();

            window.location.href = returnUrl;

        }, 2000);

    }
 
    $("#contact_form").on('submit', function(e) {

        e.preventDefault();

        var lang = $(this).attr("lang");

        if ($('#izin').is(':checked')) {
            if (true) {

                var dataA = $("#contact_form").serialize();
                 
                $.ajax({
                    url: "mail/contact.php",
                    cache: false,
                    type: "post",
                    data: dataA,
                    success: function() {
                        $('.success.cf').delay(500).fadeIn(1000);
                        $('.failed.cf').fadeOut(500);

                        goThankPage(lang);

                    },
                    error: function(xhr, ajaxOptions, thrownError) {
                        alert('Mesajınız gönderilemedi. Lütfen telefon numaramızı arayın.');
                    }
                });

            } else {
                $('.failed.cf').delay(500).fadeIn(1000);
                $('.success.cf').fadeOut(500);
            }
        } else {
            alert('Bilgi metnini kabul etmelisiniz.')
        }
        return false;
    });


    

})(jQuery); // End of use strict

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Okumaya devam et...";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Yazıyı gizle...";
    moreText.style.display = "inline";
  }
}