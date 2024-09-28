document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("main section");
  const navLinks = document.querySelectorAll(".subHeader ul li a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 2) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.href.includes(`#${current}`)) {
        link.classList.add("active");
      }
    });
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    });
  });
});


			
/* --------------------------------------------------------------------------------------- */
 
                	function getRandomColor() {
        		  var letters = '0123456789ABCDEF';
        		  var color = '#';
        		  for (var i = 0; i < 6; i++) {
        		    color += letters[Math.floor(Math.random() * 16)];
        		    }
        		  return color;
        		}
       
        	
        	var fetchcontact = $("#contactOfTutor").val();
                 $.ajax({
         		 type:"POST",
         		  url:"/TutorReviewController",
         		  data:{
                  "action":"returnReviews",
                  "tutorContacts":fetchcontact,
         		  },
         		  success:function(data){
							let data1= [];
                           var resultss="";
                          var text = JSON.parse(data);
                      for(var i=0; i<text.reviews.length; i++)
                 				  {
                 				    var val = JSON.stringify(text.reviews[i]);
                 					var value = JSON.parse(val);
                 					resultss = value.result;
                 					
                 					
                 					
                                       }
                                           var code=" ";
         		        	if(resultss=="No Reviews Found"){
                         
         		        			code="<div align=\"center\"><img src=\"https://www.gharpeshiksha.com/img/emptyBox.svg\"><p>No Reviews Yet!<p></div>";
         		        	}
         		        	else{
         		        		  for(var i=0; i<text.reviews.length; i++){
	
                 				    var val = JSON.stringify(text.reviews[i]);
                 					var value = JSON.parse(val);
                 					var str = value.name;
         		        		    var res = str.charAt(0);
   					
									let obj = {
										title : value.name,
										review: value.reviewMessage,
									reviewStar: Array(value.ratings)
												.fill('<i class="fa-solid fa-star" style="color:\"+getRandomColor()+\";font-size: 12px;"></i>')
      											.join(""),
									date:	value.dateNtime
									}
									
									data1.push(obj);
         		        //	    code+="<div class=\"col-md-12\" style=\"padding: 10px;\"><div style=\"box-shadow: 0px 1px 3px rgb(0 0 0 / 30%);padding: 10px;\" ><div class=\"row\"> <div class=\"col-md-1\"><div class=\"profileImageClass\" id=\"profileImageID\" style=\"background:"+getRandomColor()+"\">"+res+"</div></div><div class=\"col-md-11\"><span class=\"nameClas\" id=\"fullName\" >"+str+"</span> <div class=\"reviewitem reviewSectionRating\"><ul><li class=\"star\">"+value.ratings+"</li></ul></div><p style=\"margin-top: 56px;\">\""+value.reviewMessage+"\"</p><p style=\"text-align:right; font-size: 12px;\">"+value.dateNtime+"</p></div></div></div></div>";
         		        		}



const reviewLength = data1.length;
// Sort data1 by date in descending order
const sortedData = data1.sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB - dateA;
});

const reviewsPerPage = 3; // Number of reviews to display per page
let currentPage = 1; // Current page

function displayReviews(startIndex, endIndex) {
  const reviewsContainer = document.getElementById("reviews-container");

  for (let i = startIndex; i < endIndex; i++) {
    if (i >= sortedData.length) {
      break; // Break if we have displayed all available reviews
    }

    const reviewData = sortedData[i];
    const reviewCard = document.createElement("div");
    reviewCard.classList.add("MainReview");

    reviewCard.innerHTML = `
  <div class="review-header">
  <div class="" style="display: flex;">
  <div class="titleLogo">
  <h5 class="logo">${reviewData.title.slice(0, 1)}</h5>
  </div>
  <div class="title-star-date">
  <h5 class="card-title" style="font-size: 18px;">
  ${reviewData.title}
  </h5>
  ${reviewData.reviewStar}
  </div>
  </div>
  <div>
      <span class="reviewDate">${reviewData.date}</span>
      </div>
  </div>
  <div class="review-body">
    <p class="teacherReviewDescription">${reviewData.review}</p>
  </div>
  <hr>
  `;

    reviewsContainer.appendChild(reviewCard);
  }
}

function loadMoreReviews() {
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const endIndex = currentPage * reviewsPerPage;
  displayReviews(startIndex, endIndex);
  currentPage++;

  if (endIndex >= sortedData.length) {
    document.getElementById("load-more-button").style.display = "none";
  }
}

displayReviews(0, reviewsPerPage);
currentPage++;

document
  .getElementById("load-more-button")
  .addEventListener("click", loadMoreReviews);


         		      }  // end of else part
         			}  // end of success function        			
         		});	 // ajax end


  document.addEventListener("DOMContentLoaded", function () {
		
    const startModalBtn = document.querySelector(".startModalBTN");
    console.log(startModalBtn)
    startModalBtn.addEventListener("click", function () {
      const currentModal = document.getElementById('LodingPopupModal');
      document.getElementById("LodingPopupModal").style.display = "none";
      modalInstance.hide();
      
      const newModal = new bootstrap.Modal(document.getElementById('NewModal'));
      newModal.show();
      
      const modalInstance = bootstrap.Modal.getInstance(currentModal);
    });
  });

/*  $(document).ready(function() {
    $('#HomeBack').on('click', function() {
      $('#ConfirmationModal').modal('show');
      $('#NewModal').modal('hide');
    });

    $('#confirmYes').on('click', function() {
      $('#NewModal').modal('hide');
      $('#ConfirmationModal').modal('hide');
    });
    
    $('#keepHere').on('click', function() {
      $('#NewModal').modal('show');
      $('#ConfirmationModal').modal('hide');
    });
  });*/


function Sendcontact_tutor(){	
	var contx = $("#contactOfTutor").val();	
	var cityy = $("#city_name").val();

	document.getElementById("contactoftutor1").value=contx;
	document.getElementById("cityname").value=cityy;
	triggerForm();
}

  function triggerForm()
  {
	  document.getElementById("contact_bus").submit();
  }

    function validateNumber(input) {
      // Remove non-numeric characters
      input.value = input.value.replace(/\D/g, '');
    }