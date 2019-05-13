$(document).ready(function() {
  // Get the modal
  var modal = document.getElementById('parModal');

  // Get the button that opens the modal
  var btn = document.getElementById("parBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }


  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // var btn2 = document.getElementById("futureGenerator");
  //
  // btn2.onclick = function() {
  //   console.log("ichgvhj");
  // }
const arrayOfImages=["future1.jpg","future2.jpg","future3.jpg","future4.jpg","future5.jpg"]

 function  myFunction(){
    var randomNumberBetween0and5 = Math.floor(Math.random() * 5);
    // arrayOfImages[randomNumberBetween0and5];
 $('#futureImg').attr('src', arrayOfImages[randomNumberBetween0and5]);
    console.log( arrayOfImages[randomNumberBetween0and5]);
  }



  $('#futureGenerator').on("click", function(){
                                                                  myFunction();
                                                                });
});
