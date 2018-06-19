$(function() {
    $("li").click(function() {
      // remove classes from all
      $("li").removeClass("active");
      // add class to the one we clicked
      $(this).addClass("active");
      // stop the page from jumping to the top
    });

    $("#random").on("click", function() {
      $(".progress-bar").each(function() {
        var randomNum = Math.round(Math.random() * 100);
        $(this).attr("aria-valuenow", randomNum);
        $(this).css("width", randomNum + "%");
        $(this).text(randomNum + "%");
      });
    });

    $("#dp").attr("src", "pictures/teen.jpg").width("100%").height("30%");

    $("#savebtn").on("click", function() {
      alert("Form saved!");
    });
    $("#contact").validate({
      rules: {
          fullname: {
              required: true,
              minlength: 4
          },
          email: {
              required: true,
              email: true
          },
          password: {
              required: true,
              minlength: 6
          },
          cnfpassword: {
              required: true,
              equalTo: "#pwd"
          }
      },
      messages: {
          fullname: {
              required: "Yes dude! It's required."
          },
          cnfpassword: {
            equalTo: "Passwords should match. No excuse!"
          }
      }
  });
});

function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
          $('#dp').attr('src', e.target.result).width("100%").height("30%");
      };
      reader.readAsDataURL(input.files[0]);
  }
}