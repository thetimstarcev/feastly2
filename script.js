const resizeOps = () => {
  document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
};

resizeOps();
window.addEventListener("resize", resizeOps);

$(document).on('mobileinit', function () {
    $.mobile.ignoreContentEnabled = true;
});

function openCategory(item_category) {
    var i;
    var x = document.getElementsByClassName("item_category");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(item_category).style.display = "block";  
  }

  jQuery(document).ready(($) => {
    $('.quantity').on('click', '.plus', function(e) {
        let $input = $(this).prev('input.qty');
        let val = parseInt($input.val());
        $input.val( val+1 ).change();
    });

    $('.quantity').on('click', '.minus', 
        function(e) {
        let $input = $(this).next('input.qty');
        var val = parseInt($input.val());
        if (val > 0) {
            $input.val( val-1 ).change();
        } 
    });
});

function selectTip () {
    $(this).toggleClass('btn_sm_selected');
  };

  function selectPaymentMethod () {
    $(this).toggleClass('card_payment_selected');
  };