

var currentStep = 0;
var course, subject, name, phone, localit, modeOnline1, location, lat, lng, gender,start_time, optradio, specific_req,email;
var user_type;
var subject_name;
var  sessionsinaweek,otpid;
var tracking_source;
var url = window.location.href;
var nakeddomaain = url.search('www.');

if (nakeddomaain == -1) 
{
	//url="http://localhost:8080/";
	url="https://teachbuddies.com";
    //  url="https://3-dot-gpschat.appspot.com";	
} 
else 
{
	//url="http://localhost:8080/";
	
	url="https://www.teachbuddies.com";
    // url="https://www.3-dot-gpschat.appspot.com";
}

var sec = 30;


var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate.
var animating; //flag to prevent quick multi-click glitches.

var robot = false;



$(document).ready(function() {
    current_fs = $('#enqformstep0');
    current_fs.show();
    


});


var flag=false;      
var neww;
var preNAme;
var numOTP;
var verifyOTP_Number;
var sessionId_var;
var match_Var;

function class_selection(id) {

    currentStep = 0;
    switch (id) {
        case "nursery":
            $("#section0").show();
            $("#section1,#section2,#section3,#section4,#section5").hide();
            break;
        case "class1_5":
            $("#section1").show();
            $("#section0,#section2,#section3,#section4,#section5").hide();
            break;
        case "class6_8":
            $("#section2").show();
            $("#section0,#section1,#section3,#section4,#section5").hide();
            break;
        case "class9_10":

            $("#section3").show();
            $("#section0,#section1,#section2,#section4,#section5").hide();
            break;
        case "class11_12":
            $("#section4").show();
            $("#section0,#section1,#section2,#section3,#section5").hide();
            break;
        case "graduation":
            $("#section0,#section1,#section2,#section4,#section3,#section5").show();
            break;
        case "language":
            $("#section5").show();
            $("#section0,#section1,#section2,#section3,#section4").hide();
            break;
    }
    $('#enqformstep0').css({
        'display': 'block',
        'opacity': '1'
    });
    current_fs = $('#enqformstep' + (currentStep - 1));
    next_fs = $('#enqformstep' + (currentStep - 1)).next();
    robot = true;
    //document.getElementById('step1Next').setAttribute("id", 'step2Next'); 
    current_fs.hide();
    next_fs.show();
    //  nextbuttonclick('step'+(currentStep+1)+'Next');
    robot = false;
}

function contact_tutor(id) {

    currentStep = 0;
    $('#enqformstep0').css({
        'display': 'block',
        'opacity': '1'
    });
    $('#enqformstep1').hide();
    $(".modal-header h3").html("Connect with " + id + " and tutors alike");
    current_fs = $('#enqformstep' + (currentStep - 1));
    next_fs = $('#enqformstep' + (currentStep - 1)).next();
    robot = true;
    current_fs.hide();
    next_fs.show();
    robot = false;
}

function contact_tutor1() {
    currentStep = 0;
    $('#enqformstep0').css({
        'display': 'block',
        'opacity': '1'
    });
    $('#enqformstep1').hide();
    $(".modal-header h3").html("Get a Home Tutor Within 30 Minutes");
  //  document.getElementById("modalH3").innnerHTML=neww;
    current_fs = $('#enqformstep' + (currentStep - 1));
    next_fs = $('#enqformstep' + (currentStep - 1)).next();
    robot = true;
    current_fs.hide();
    next_fs.show();
    robot = false;

}


function contact_student() {
    currentStep = 12;


    current_fs = $('#enqformstep0');
    next_fs = $('#enqformstep12');
    next_fs.show();
    $("#enqformstep0").css({
        "opacity": "0",
        "transform": "scale(1)",
        "position": "relative",
        "display": "none"
    });
    $("#enqformstep12").css({
        "opacity": "1",
        "display": "block"
    });
    //	$("#enqformstep1").css({"opacity": "0", "transform": "scale(1)","position":"relative","display":"none"});
    $("#previous,#step12Next,#step1Next").hide();
    $(".modal-header h3").html("Become Part of Our Team");

}


function subject_selection(id) {
    //   $("#previous").css({'display':'block'});
    //alert(id);
    $(".modal-header h3").html("Looking for " + id + " Classes");
    subject_name = id;

    currentStep = 0;
    $('#enqformstep0').css({
        'display': 'block',
        'opacity': '1'
    });
    current_fs = $('#enqformstep' + (currentStep - 1));
    next_fs = $('#enqformstep' + (currentStep - 1)).next();
    robot = true;
    //document.getElementById('step1Next').setAttribute("id", 'step2Next'); 
    current_fs.hide();
    next_fs.show();
    //  nextbuttonclick('step'+(currentStep+1)+'Next');
    robot = false;
    $("#section0,#section1,#section2,#section3,#section4,#section5").show();
/*
    $('#enqformstep0').css({
        'transform': 'scale(1)',
        'position': 'relative',
        'opactiy': '1'
    });*/
    //$('#previous').hide();


}



function clearForm(event) {
	event.preventDefault();
	
	
   	$('input[name="Select1"]').prop('checked', false);
	$('input[name="mode"]').prop('checked', false);
	$('input[name="gender"]').prop('checked', false);
	$('input[name="sessionsinaweek"]').prop('checked', false);
	$('input[name="optradio"]').prop('checked', false);
	$('input[name="start_time"]').prop('checked', false);
	

 document.getElementById("error1").innerHTML="";
 document.getElementById("err-msg2").innerHTML="";
 document.getElementById("err-online").innerHTML="";
 document.getElementById("err-msg1").innerHTML="";
 document.getElementById("err-msgONli").innerHTML="";
 document.getElementById("err-msg3").innerHTML="";
 document.getElementById("err-msg6").innerHTML="";
 document.getElementById("err-msg4").innerHTML="";
 document.getElementById("err-msg5").innerHTML="";
 document.getElementById("err-msg8").innerHTML="";
 document.getElementById("speciERR").innerHTML="";
 document.getElementById("msgid").innerHTML="";
 document.getElementById("err-msg10").innerHTML="";

 
 document.getElementById("enquirystepsform").reset();
 
	$("#oneTOoneSeleted").hide();
	$("#step1Next").css({'display':'inline-block'});
	$("#previous").css({'display':'none'});
	
	

    //	alert(currentStep);
    $('#enqformstep' + (currentStep)).css({
        'display': 'none',
        'opacity': '0',
        'transform': 'scale(1)',
        'position': 'relative'
    });
    $("#mainFormTitle").html("Get a Home Tutor Within 30 Minutes");
    $("#section1,#section2,#section3,#section4,#section5").show();
    course = "";
    subject = "";
    name = "";
    modeOnline1 = "";
    phone = 0;
    localit = 0;
    mode = "";
//   	location= ""; 
    lat = 0;
    lng = 0;
    gender = "";
    optradio = "";
    start_time = "";
    specific_req = "";
    subject_name = undefined;
    sessionsinaweek = "";
    otpid = 0;
    tracking_source = "";
    user_type = "";
    robot = false;
    $('#enqformstep' + currentStep).hide();

    currentStep = 0;
    //$("#section1,#section2,#section3,#section4,#section5").show();
   

    //$('#enqformstep0').css({'transform':'scale(1)', 'position':'relative'});
    $("#enqformstep0").css("opacity", "1");
    $("#enqformstep0").css("display", "block");

    current_fs = $('#enqformstep0');
    //next_fs = $('#enqformstep0').next();
    //currentStep=0; 

    current_fs.show();
    //$("#enqformstep1,#enqformstep2,#enqformstep3,#enqformstep4,#enqformstep5,#enqformstep5,#enqformstep6,#enqformstep7,#enqformstep8,#enqformstep9,#enqformstep10,#enqformstep11,#enqformstep12").css("opacity", "1");
   // document.getElementById("enquirystepsform").reset();
    //document.getElementById("tutorregister").reset();
    //	$("#step"+currentStep+"Next").show();
    $("#step12Next,#step1Next").show();
    //$("#previous").css({'display':'block'});
 document.getElementById("MainQueryForm").reset();
    document.getElementById("ErrOTP").innerHTML="";
    $('#verifyOTPdiv').css({'display':'none'});
}


function nextbuttonclick(id) {
    //alert(id);
	if(currentStep < 0){
		$("#HomeBack").css({
            'display': 'block'
        });
	}else{
			$("#HomeBack").css({
            'display': 'none'
        });	
	}
	
    if (currentStep >= 1) {
        $("#previous").css({
            'display': 'inline-block'
        });
    } else
        $("#previous").css({
            'display': 'block'
        });
    switch (currentStep) {
        case 0:
            step0Next();
            break;
        case 1:
            step1Next();
            break;
        case 2:
            step2Next();

            break;
        case 3:
            step3Next();
            break;
        case 4:
            step4Next();
            break;
        case 5:
            step5Next();
            break;
        case 6:
            step6Next();
            break;
    	case 7: 
    		step7Next();
    		break;
    	case 8: 
    		step8Next();
        	break;	
    	case 9: 
    		step9Next();
    		break;
    	case 10:
    		step10Next();
    		break;
    	case 11:
    		step11Next();
    		break;	

    }
    if (!robot) {

        //  document.getElementById(id).setAttribute("id", 'step'+currentStep+'Next');
    }

    animate();

}

function animate() {

    if (true) {
        //    $('#navStep' + currentStep).removeClass('disabled');
        // alert("working");
        //      $('#navStep' + currentStep).click();

        if (animating)
            return false;
        animating = true;
        //	alert(current_fs.attr('id'));
        //	alert(next_fs.attr('id'));

        //	current_fs = $(this).parent();
        //	next_fs = $(this).parent().next();

        //activate next step on progressbar using the index of next_fs
        //	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //	next_fs.addClass("active");

        //show the next fieldset
        next_fs.show();
        if (!robot) { //hide the current fieldset with style
            current_fs.animate({
                opacity: 0
            }, {
                step: function(now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale current_fs down to 80%
                    scale = 1 - (1 - now) * 0.2;
                    //2. bring next_fs from the right(50%)
                    right = (now * 50) + "%";
                    //3. increase opacity of next_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({
                        'transform': 'scale(' + scale + ')',
                        'position': 'absolute',
                        'min-height': '4'
                    });
                    next_fs.css({
                        'left': left,
                        'opacity': opacity
                    });
                },
                duration: 800,
                complete: function() {
                    current_fs.hide();
                    current_fs.css({
                        'transform': 'scale(1)',
                        'position': 'relative',
                        'min-height': '4'
                    });
                    animating = false;
                },
                //this comes from the custom easing plugin
                easing: 'easeInOutBack'
            });
        } else {
            current_fs.hide();
            current_fs.css({
                'transform': 'scale(1)',
                'position': 'relative',
                'min-height': '4'
            });
            animating = false;

        }

    }
}


function step0Next() {
    /*//$("#previous").css({'display':'none'});
	//$("#previous").hide();
	user_type=document.querySelector('input[name="Select2"]:checked').value ;
	if(user_type=="Tutor")
	{
		// alert(user_type);
		currentStep = 12;
	
		 current_fs = $('#enqformstep0');
		 next_fs = $('#enqformstep12');
		 next_fs.show();
		$("#enqformstep0").css({"opacity": "0", "transform": "scale(1)","position":"relative","display":"none"});
		$("#enqformstep12").css({"opacity": "1","display":"block"});
$("#previous,#step12Next,#step1Next").hide();
 $(".modal-header h3").html("Become Part of Our Team");

//$('#step0Next').attr('id','step12Next');		 
	}
else
	{
	//	alert("else");
	//alert(currentStep);
	currentStep += 1;
	//alert(currentStep);
	//$("#previous").css({'display':'inline-block'});
  current_fs = $('#enqformstep'+(currentStep-1));
	next_fs = $('#enqformstep'+(currentStep-1)).next();
	
//	$('#step0Next').attr('id','step1Next');
	}	*/


    updatesubjectlist();
    $("input:checkbox[value=" + subject_name + "]").each(function() {
        $(this).prop('checked', true);
    });

    course = document.querySelector('input[name="Select1"]:checked').value;
    // alert(course);
    if (course == "") {
        document.getElementById('error1').innerHTML = "Select atleast one class/course";
        return false;
    }

    currentStep += 1;
    current_fs = $('#enqformstep' + (currentStep - 1));
    next_fs = $('#enqformstep' + (currentStep - 1)).next();

    //$('#step1Next').attr('id','step2Next');
}

function sendName(data) {

    name = document.getElementById("getName").value


}

function sendPhone(data) {

    phoneNumber = document.getElementById("getPhone").value


}
 var class_selected;
function selectClass(data) {
     class_selected = data;


}

function myfun() {

    document.getElementById(class_selected).checked = true;
    document.getElementById("query_getname").value = name;
    document.getElementById("phone").value = phoneNumber;



}






function step1Next() {
	 //  'use strict';  //force the context to be undefined
    $("#previous").show();
    $("#previous").css({
        'display': 'inline-block !important'
    });

   // alert(neww);
    
    

    subject = "";

    var selectedsubject = document.querySelectorAll('input[name="subjects"]:checked');
    for (var index = 0; index < selectedsubject.length; index++) {
        subject += selectedsubject[index].value + ",";
    }

    if (subject == "") {
        document.getElementById('err-msg2').innerHTML = "Select atleast one Subject";
        return false;
    }
    
    else if(neww=="Student / Parent - Looking to Hire Teacher for one-to-one class"){
   //  alert(neww);
    	document.getElementById("one2oone").checked = true;
    	document.getElementById("onlineCC").disabled=true;
    	document.getElementById("query_getname").value = preNAme;
    	document.getElementById("phone").value=numOTP;
	  }
  
    
    else if(neww=="Student / Parent - Looking for online courses"){
    	//alert("Online===");
    	document.getElementById("onlineCC").checked = true;
    	document.getElementById("one2oone").disabled=true;
    	document.getElementById("query_getname").value= preNAme;
    	document.getElementById("phone").value=numOTP;
	  }
    
    currentStep += 1;
    current_fs = $('#enqformstep' + (currentStep - 1));
    next_fs = $('#enqformstep' + (currentStep - 1)).next();
}


var abc;


var O2O;





var hh1;
var hh2;
var hh3;

var separate ; 
function Hcheck(a){
	
	if($("#"+a.id).prop('checked')){
		hh1="Online Class"
	}else{
		hh1=""
	}

	
}


function Hcheck2(a){
	
	if($("#"+a.id).prop('checked')){
		hh2="Home Tuition at Student's Home"
	}else{
		hh2=""
	}
	

	
}


function Hcheck3(a){
	
	if($("#"+a.id).prop('checked')){
		hh3="Home Tuition at Your Home";
	}else{
		hh3="";
	}
	

	
}

//$("#enqformstep4").hide();
function step2Next() {


 
mode="";
	
    var value100 = $("#enquirystepsform input[name='mode']:checked").val();
     
    
    modeOnline1=value100;
    

    if (value100 === "One To One") {

        O2O = value100;
        homeTuition = "Home Tuition at Student's Home";
        teacherHome = "Home Tuition at Your Home";
        onlineSkype="Online Class";
        

        if(hh1=="Online Class" || hh2=="Home Tuition at Student's Home" || hh3=="Home Tuition at Your Home"){
        	
           // alert('done');
      	  
        	modeOnline1= hh1+','+hh2+ ','+hh3;
      	  
      	 // console.log(separate);
        }
    
     
      else{
      //	alert('nanananan');
        	document.getElementById("err-online").innerHTML = "Please Select Aleast One Mode";
            return false;

      }
        

    } else if (value100 === "Online class") {

        O2O = value100;
        
        modeOnline1= value100;
        
      //  alert(O2O + " =Right");
    }
    
   

    
    
    else if(neww=="Student / Parent - Looking to Hire Teacher for one-to-one class"){
    	//alert("ONE@ONE");
    	document.getElementById("one2oone").checked = true;
    	document.getElementById("onlineCC").disabled=true;
    	document.getElementById("query_getname").value = preNAme;
    	document.getElementById("phone").value=numOTP;
    	
    	modeOnline1= hh1+','+hh2+ ','+hh3;
      
	  }
  
    
    else if(neww=="Student / Parent - Looking for online courses"){
    //	alert("Online===");
    	document.getElementById("onlineCC").checked = true;
    	document.getElementById("one2oone").disabled=true;
    	document.getElementById("query_getname").value= preNAme;
       	document.getElementById("phone").value=numOTP;
       	
       	modeOnline1= value100;
    
	  }
    
    

    else {

        document.getElementById("err-online").innerHTML = "Please Select Aleast One Mode";
        return false;

    }
    
    
    
    currentStep += 1;


    current_fs = $('#enqformstep' + (currentStep - 1));
    next_fs = $('#enqformstep' + (currentStep - 1)).next();



}

var qq;
var numm;



function applyCSS()
{
	
	 $("#enqformstep4").css({'opacity': '1','display': 'block','transform': 'scale(1)','position': 'relative',});
	 animate();
}
function step3Next() {

   // alert(currentStep);
    qq = O2O;
    abc = qq;
    name = document.getElementById('query_getname').value;
    phone = document.getElementById('phone').value;
	email=document.getElementById('queryEmail').value;

		  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
			var emailMatch=emailRegex.test(email);
  var regExp = "[6789][0-9]{9}";
    var match = phone.match(regExp);
    // alert(match);	
    if (name == "" && phone == "") {
        document.getElementById('err-msg1').innerHTML = "Enter Name and Phone Number";
        return false;
    } else if (name == "") {
        document.getElementById('err-msg1').innerHTML = "Enter name";
        return false;
    } else if (phone == "") {
        document.getElementById('err-msg1').innerHTML = "Enter Phone Number";
        return false;
    } else if (!match) {
        document.getElementById('err-msg1').innerHTML = "Please Enter Correct Phone Number";
        return false;

    } else if(email=="")
{
	document.getElementById('err-msg1').innerHTML="Enter email address";
	return false;
	
}
else if(!emailMatch)
{
	document.getElementById('err-msg1').innerHTML="Enter valid email address";
	return false;
} else if (qq === "One To One") {

        currentStep += 2;
        current_fs = $('#enqformstep3');
        next_fs = $('#enqformstep5');
        abc = qq;

	var msg=" Name: "+name+" Phone: "+phone+" Course: "+course+" Subjects: "+subject+" Class Mode: "+mode+"email: "+email;  
	 	var sendurl=url+"/ajax.jsp?msg="+msg+"&name="+name+"&phone="+phone+"&course="+course+"&subject="+subject+"&mode="+mode+"&email="+email;  
	 	  
	 	if(window.XMLHttpRequest){  
	 	request=new XMLHttpRequest();  
	 	}  
	 	else if(window.ActiveXObject){  
	 	request=new ActiveXObject("Microsoft.XMLHTTP");  
	 	}  
	 	  
	 	try  
	 	{  
	 	request.onreadystatechange=getInfo;  
	 	request.open("GET",sendurl,true);  
	 	request.send();  
	 	}  
	 	catch(e)  
	 	{  
	 	//alert(e);  
	 	}  
        //currentStep += 1;
        //  current_fs = $('#enqformstep'+(currentStep-1));

        // next_fs = $('#enqformstep'+(currentStep-1)).next();

    }
    else if (qq === "Online class") {
    	
	$("input#phone").on('change',function() {
    		
    		document.getElementById('step1Next').style.display = 'block';
    		  document.getElementById("err-msg1").innerHTML="";
   			  document.getElementById("showLogin").innerHTML="";
   			
    			
    		});

    	
      	document.getElementById('numberdisplay').innerHTML = phone;

        
   	 $.ajax({
   		 type:"POST",
   		 url:"https://api.teachbuddies.com/OnlineCourseStudentLogin/studentSignUpLanding",
   		 
   		 data:{"name":name,"course":course,"phone":phone,},
   		 success:function(data){
   			 // alert(data.Message);
   			 /*if(data.Message==="Account already exists"){
				 
				window.location="https://learn.teachbuddies.com/url/"+document.getElementById("phone").value+"/"+document.getElementById("phone").value;
					
				return false;
			 }
   			 */
   			 
   			  if(data.result==="Error")
   			 {
   				 
   				 				  
   			  document.getElementById("err-msg1").innerHTML=data.Message;
   			  document.getElementById("showLogin").innerHTML='<a href="https://learn.teachbuddies.com/login" target=\"_blank\" style=\"background: #236cb5;padding: 5px 20px; color: #fff;\">Sign IN Here!</a>';
   			 document.getElementById('step1Next').style.display = 'none';
   			  return false;
   			  
   			  
   			 }
   			 
   			/**/
   			 
   			 else 
   			 {
   				 				 
   			 document.getElementById("landingPhone").value=data.phone;
   			 document.getElementById("otp_phone").value=data.phone;
   			   
   			 numm=data.phone;
   			//alert(currentStep);
   			
    
   			applyCSS();

   		     currentStep += 1;
   	   	     current_fs = $('#enqformstep' + (currentStep - 1));
   	   	     next_fs = $('#enqformstep' + (currentStep - 1)).next();
   	      
   	   	   }
   			  
   			 }//success function
   		 
   		 
   		 
   	}); //ajax
       	
    


    }// Online Else If

}

//never delete this function
function getInfo(){  
	   if(request.readyState==4){  
	 
	   }  
	   }

var  sendD;



function step4Next() {

	sendD=qq;
	
    var board = document.getElementById('board').value;
    var city = document.getElementById('city').value;
    var school = document.getElementById('school').value;
  
    
    //var email = document.getElementById('email').value;
    
    if (board == "" && city == "" && school == "" && StateNameFrom == "") {
        document.getElementById('err-msgONli').innerHTML = "Select your board,select your state, enter your city, and school name";
        return false;
    } else if (board == "") {
        document.getElementById('err-msgONli').innerHTML = "Select Your Board";
        return false;
    } else if (city == "") {
        document.getElementById('err-msgONli').innerHTML = "Enter Your City Name";
        return false;
    } else if (school == "") {
        document.getElementById('err-msgONli').innerHTML = "Enter Your School Name";
        return false;
    }

    else if (StateNameFrom == "") {
        document.getElementById('err-msgONli').innerHTML = "Select your state";
        return false;
    }
    

    else if(neww=="Student / Parent - Looking for online courses"){
		
      //	alert(numOTP+" =====s");
      	
        var boardM=document.getElementById("board").value;
        var cityM=document.getElementById("city").value;
        var schoolM=document.getElementById("school").value;

      	$.ajax({
			 type:"POST",
			 url:"https://api.teachbuddies.com/OnlineCourseStudentLogin/studentInfoLanding",
			 //data:$("#formnew2").serialize(),
			 data:{"board":boardM,"city":cityM,"school":schoolM,"phone":numOTP,"state":StateName},
			 
			 success:function(data){
				 
				 window.location="https://learn.teachbuddies.com/url/"+document.getElementById("sendOtpId").value+"/"+document.getElementById("sendOtpId").value;

			      	
		
				 }
		 
			 
		}); 
		

		
      	
		}
    


    else if (sendD === "Online class" && currentStep== 4) {
    	 
  
  var board1=document.getElementById("board").value;
  var city1=document.getElementById("city").value;
  var school1=document.getElementById("school").value;
  var StateNameFrom= document.getElementById("SelectedStatesForm").value;
		 $.ajax({
			 type:"POST",
			 url:"https://api.teachbuddies.com/OnlineCourseStudentLogin/studentInfoLanding",
			 //data:$("#formnew2").serialize(),
			 data:{"board":board1,"city":city1,"school":school1,"phone":numm,"state":StateNameFrom},
			 
			 success:function(data){
				 
				 
				 if(data.result==="Error")
				 {
					 
				 document.getElementById("ErrorMessage2").innerHTML="Account Not Registered";
				
				// return false;
				 }
				 else
				 {
					 			 
				 if(data.OtpSent==="True")
				 {
				 				 
				 document.getElementById("sessionIdId").value=data.SessionId;
				 document.getElementById("otp_phone").value=data.phone;
				
				  
				 }
				 
				 else
				 {
					 
					 document.getElementById("ErrorMessage2").innerHTML="Phone Number Not Correct";	 
					 
				 }
		
				 }
		
		 		 
			 }
		});  
		
        $('#previous').hide();
        $('#step1Next').hide();

        currentStep = 11;
        current_fs = $('#enqformstep4');
        next_fs = $('#enqformstep11');
    }
   
    
    
    
    
    
}



function step5Next() {
   // alert(currentStep);
   
  //  console.log('hgasxhgxgahg')
    gender = $('#enquirystepsform input[name="gender"]:checked').val();
    
    
    

    if (gender == null) {
        document.getElementById('err-msg3').innerHTML = "Select Gender Preference";
        return false;
    }

    //if(O2O){}

    currentStep += 1;
    current_fs = $('#enqformstep' + (currentStep - 1));
    next_fs = $('#enqformstep' + (currentStep - 1)).next();




}




function step6Next(){
	//alert(mode);
	
	sessionsinaweek = $("#enquirystepsform input[name='sessionsinaweek']:checked").val();
	
	 //sessionsinaweek=document.querySelector('input[name="sessionsinaweek"]:checked').value;
		
	if(sessionsinaweek==null||sessionsinaweek=="")
		 {
		 document.getElementById('err-msg6').innerHTML="Select number of sessions needed";
		  return false;
		   
		 }
		
//	if((mode=="Home Tuition at Your Home,") || (mode=="Online Class,") || (mode=="Home Tuition at Your Home,Online Class,") || (mode=="Home Tuition at Student's Home,Home Tuition at Your Home,Online Class,") || (mode=="Home Tuition at Student's Home,Home Tuition at Your Home,") || (mode=="Home Tuition at Student's Home,Online Class,"))
	if((mode=="Home Tuition at Your Home,"))
				
	{
			//	alert('selected');
				currentStep = 7;
				//alert(currentStep);
				
              current_fs = $('#enqformstep6');
	          next_fs = $('#enqformstep8');
              next_fs.show();	
              $("#enqformstep6").css({"opacity": "0", "transform": "scale(1)","position":"relative","display":"none"});
              $("#enqformstep6").hide();
              
		      $("#enqformstep8").css({"opacity": "1","display":"block"});
		
	}
	
	
	currentStep += 1;
		
	feeslist(course,sessionsinaweek);

    current_fs = $('#enqformstep'+(currentStep-1));
    
	next_fs = $('#enqformstep'+(currentStep-1)).next();
	
	  // $('#step6Next').attr('id','step7Next');		   

}



function step7Next(){
	
	optradio = $("#enquirystepsform input[name='optradio']:checked").val();
	
	
	// optradio=document.querySelector('input[name="optradio"]:checked').value;
		if(optradio==null)
		 	 {
		 	 document.getElementById('err-msg4').innerHTML="Select Your Budget";
		 	  return false;	 	   
		 	 }

currentStep += 1;

	current_fs = $('#enqformstep'+(currentStep-1));
	next_fs = $('#enqformstep'+(currentStep-1)).next();
	  // $('#step7Next').attr('id','step9Next');		   
}





function step8Next() {
    //alert(currentStep);
    currentStep += 1;


    current_fs = $('#enqformstep' + (currentStep - 1));
    next_fs = $('#enqformstep' + (currentStep - 1)).next();
    //  $('#step8Next').attr('id','step9Next');		   



}


function step9Next(){
	
	start_time = $("#enquirystepsform input[name='start_time']:checked").val();
	
	
	// start_time=document.querySelector('input[name="start_time"]:checked').value;
		 if(start_time==null)
			 {
			 document.getElementById('err-msg8').innerHTML="Select when you like to start";
			  return false;		   
			 }
		 
		 
		 else  if(neww=="Student / Parent - Looking to Hire Teacher for one-to-one class"){
				
		    	
			   //      alert("Bbbbbbbbb====")
			         
			         displayButtonn();
			     }
		 
currentStep += 1;
	

current_fs = $('#enqformstep'+(currentStep-1));
	next_fs = $('#enqformstep'+(currentStep-1)).next();
 //$('#step9Next').attr('id','step10Next');	
		

}




function displayButtonn(){
	
	document.getElementById('IndexPageSubmit').style.display = 'block';
	document.getElementById('step1Next').style.display = 'none';
	document.getElementById('previous').style.display = 'none';
}






function SendIndexPage()
{

    specific_req = document.getElementById("specific_req").value;
    
	var lat1 = document.getElementById("latbox1").value;
	
    var lng1 = document.getElementById("lngbox1").value;
    
    var location1;
    
    if (document.getElementById("autocomplete") == undefined) 
    {
        
    	location1 = document.getElementById("autocomplete1").value;
    	
    } 
    else 
    {
        
    	location1 = document.getElementById("autocomplete").value;
    	
    }
  	
  	//STep 8 Code
    

    var xhttp1 = new XMLHttpRequest();
    xhttp1.open("GET",url +"/ajax.jsp?msg=" + msg + "&name=" + name + "&phone=" + phone + "&course=" + course + "&subject=" + subject +"&mode="+ modeOnline1 + "&optradio=" + optradio + "&lat=" + lat1 + "&lng=" + lng1 + "&location="+ location1 +"&start_time="+start_time+"&specific_req=" +specific_req + "&gender="+gender+"&sessionsinaweek="+sessionsinaweek, true);
    xhttp1.send();
    xhttp1.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

        }
    };
  	
    
    //Final Step code
    
    
    
	 var xhttp = new XMLHttpRequest();
	   xhttp.open("POST", "/enquiry", true);
	   xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	   xhttp.send("otp="+verifyOTP_Number+"&otpid="+sessionId_var+"&name="+name+"&phone="+phone+"&location="+location1+"&subject="+subject+"&mode="+modeOnline1+"&Select1="+course+"&gender="+gender+"&source="+"Google"+"&lat="+lat1+"&lng="+lng1+"&optradio="+optradio+"&start_time="+start_time+"&specific_req="+specific_req+"&tracking_source="+source+"&sessionsinaweek="+sessionsinaweek+"&email="+email);
	   xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
	  		    
 	  	    	 var obj = JSON.parse(this.responseText);
 	  	    	 
 	  	 //   	 alert(obj.Status);
 	
 	
 	 if(obj.Status==='Success')
    {
 		
 		if(obj.Message==='/student/StudentAccount.jsp')
 		{
 		 
 		window.location.href=obj.Message;
 	
        document.getElementById("previous").style.display="block";
        document.getElementById("callotp").style.display="none";
        document.getElementById("countdown").style.display="none";

        gtag_report_conversion();	
        dataLayer.push({
    'event':'purchase',
    'order_value':'100',
    'order_id':'order_id',
    'enhanced_conversion_data': {
      "email": 'email',   
      "phone_number": phone,
      "first_name": name,
      "last_name": name,
      "street": location1,
      "city": 'yourCityVariable',
      "region": 'yourRegionVariable',
      "postal_code": 'yourPostalCodeVariable',
      "country": 'yourCountryVariable'
    }
  });
 		}
 		
 		else
 		{
 			
 			
 			document.getElementById("speciERR").innerHTML=obj.Message;
 		}
    
    }
 	else 
    { 	 
 		
 	//	document.getElementById("err-msg10").innerHTML = obj.Message;

   //     $('#stepFinal').show();
  
     }
 	 
  }
	   };
	  
   ///END CODE FINAL STEP    
  
	   
	
} 




var msg;
function step10Next() {

   // alert(currentStep);
     
    if(neww=="Student / Parent - Looking to Hire Teacher for one-to-one class"){
			
      	//alert("MainIndexFOrm");
      	
    	 sessionsinaweek=document.querySelector('input[name="sessionsinaweek"]:checked').value;
      	

        msg = "name=" + name + " phone=" + phone + " course=" + course + " subject=" + subject + "mode"+ modeOnline1 +" optradio=" + optradio +  " start_time="+start_time+ " specific_req=" + specific_req + " gender=" + gender +" classesinaweek="+sessionsinaweek;
       specific_req = document.getElementById("specific_req").value;
      	
		// " lat=" + lat1 + " lng=" + lng1 + " location=" + location1 +
			  
		   
    }//else IF
   
    
    else{
   
    var sessionsinaweek=document.querySelector('input[name="sessionsinaweek"]:checked').value;

     msg = "name=" + name + " phone=" + phone + " course=" + course + " subject=" + subject + "mode="+ modeOnline1 +" optradio=" + optradio + " start_time="+start_time+  " specific_req=" + specific_req + "gender="+gender+" classesinaweek="+sessionsinaweek;  
    specific_req = document.getElementById("specific_req").value;
// " lat=" + lat1 + " lng=" + lng1 + " location=" + location1 + 


    document.getElementById('numberdisplay').innerHTML = phone;
    currentStep += 1;

    var xhttp1 = new XMLHttpRequest();
    xhttp1.open("GET", url + "/ajax.jsp?msg=" + msg + "&name=" + name + "&phone=" + phone + "&course=" + course + "&subject=" + subject + "&mode="+ modeOnline1 + "&optradio=" + optradio  +"&start_time="+start_time+"&specific_req=" + specific_req + "&gender=" + gender+"&sessionsinaweek="+sessionsinaweek, true);
    xhttp1.send();
    // + "&lat=" + lat1 + "&lng=" + lng1 + "&location=" + location1
    xhttp1.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

        }
    };

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url + "/ajax/sendotp.jsp?phone=" + phone, true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            otpid = this.responseText;
            document.getElementById('otpid').value = otpid;

        }
    };

    var Timer = setInterval(ntimer, 1000);

    function ntimer() {
        if (sec == 0) {
            clearInterval(Timer);
            document.getElementById('callotp').href = "javascript:otp()";
            document.getElementById('callotp').style.color = "blue";
            document.getElementById('countdown').style.color = "blue";
            document.getElementById('countdown').innerHTML = '';
        }
        if (sec > 9) {
            document.getElementById('countdown').innerHTML = '00:' + sec + '&nbsp ';
        } else {
            document.getElementById('countdown').innerHTML = '00:0' + sec + '&nbsp ';
        }
        sec--;
    }

    $('#previous').hide();
    $('#step1Next').hide();


    current_fs = $('#enqformstep' + (currentStep - 1));
    next_fs = $('#enqformstep' + (currentStep - 1)).next();
    //$('#step10Next').attr('id','step11Next');		   


}
}




function otp() {
    sec = 30;
    var xhttp = new XMLHttpRequest();
				   xhttp.open("GET", url+"/ajax/sendotp.jsp?phone="+phone, true);
				   xhttp.send();
				   xhttp.onreadystatechange = function() {
				     if (this.readyState == 4 && this.status == 200) {
				    	 otpid = this.responseText;
				    	 document.getElementById('otpid').value=otpid;
						    	 
				     }}; 
		
    document.getElementById('callotp').removeAttribute("href");
    document.getElementById('callotp').style.color = "#cccccc";
    document.getElementById('countdown').style.color = "#cccccc";

    var Timer = setInterval(ntimer, 1000);

    function ntimer() {
        if (sec == 0) {
            clearInterval(Timer);
            document.getElementById('callotp').href = "javascript:otp()";
            document.getElementById('callotp').style.color = "blue";
            document.getElementById('countdown').style.color = "blue";
            document.getElementById('countdown').innerHTML = '';
        }
        if (sec > 9) {
            document.getElementById('countdown').innerHTML = '00:' + sec + '&nbsp ';
        } else {
            document.getElementById('countdown').innerHTML = '00:0' + sec + '&nbsp ';
        }
        sec--;
    }

}

var  source=document.getElementsByClassName("tracking_source")[0].value;

function step11Next(){
	

	
	if(abc=="One To One"){
		

		
		
		var lat1=document.getElementById("latbox1").value;
	    	   var lng1=document.getElementById("lngbox1").value;
	    	   var location1;
	    	   if(document.getElementById("autocomplete")==undefined)
	    		  {
	    		   location1=document.getElementById("autocomplete1").value;
	    		  }
	    	   else
	    	   { location1=document.getElementById("autocomplete").value;
	    	   }
	    	   var otp=document.getElementById("otpp").value;
	    	   var otpid=document.getElementById("otpid").value;
	    	
	    	 var  source=document.getElementsByClassName("tracking_source")[0].value;
	    	 sessionsinaweek=document.querySelector('input[name="sessionsinaweek"]:checked').value;
	    	   	 
	    	 if(otp==null||otp=="")
	  		 {
	  		 document.getElementById('err-msg10').innerHTML="Please Enter OTP";
	  		  return false;		   
	  		 }
	  		 document.getElementById("err-msg10").innerHTML="<img id=\"loading-image\" src=\"https://www.teachbuddies.com/images/loading.gif\" alt=\"Loading...\" />";
	  		documentst .getElementById("stepFinal").style.display="none";
	  		
	  		 var xhttp = new XMLHttpRequest();
	  		   xhttp.open("POST", "/enquiry", true);
	  		   xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	  		   xhttp.send("otp="+otp+"&otpid="+otpid+"&name="+name+"&phone="+phone+"&location="+location1+"&subject="+subject+"&mode="+modeOnline1+"&Select1="+course+"&gender="+gender+"&source="+"Google"+"&lat="+lat1+"&lng="+lng1+"&optradio="+optradio+"&start_time="+start_time+"&specific_req="+specific_req+"&tracking_source="+source+"&sessionsinaweek="+sessionsinaweek);
	  		   xhttp.onreadystatechange = function() {
	  		     if (this.readyState == 4 && this.status == 200) {
	  		    
	  		    	  	    	 var obj = JSON.parse(this.responseText);
	  		    	
	  		    	
	  		    	 if(obj.Status=='Success')
	  		       {
	  		    		 
	  		    		window.location.href=obj.Message;
	  		    		 //document.getElementById("success-result").innerHTML =obj.Message;
	  		     //document.getElementById("err-msg10").innerHTML = "";
	  		 //  document.getElementById("finalresult").innerHTML = "";
	  		  //   document.getElementById("finalresult").innerHTML = "<input type=\"button\" onclick=\"firststep()\" value=\"Give Another Enquiry\" class=\"next action-button\" >";
	  		  document.getElementById("previous").style.display="block";
	  		document.getElementById("callotp").style.display="none";
	  		document.getElementById("countdown").style.display="none";
		//	    goog_report_conversion();
	  		gtag_report_conversion();	
	dataLayer.push({
    'event':'purchase',
    'order_value':'100',
    'order_id':'order_id',
    'enhanced_conversion_data': {
      "email": 'email',   
      "phone_number": phone,
      "first_name": name,
      "last_name": name,
      "street": location1,
      "city": 'yourCityVariable',
      "region": 'yourRegionVariable',
      "postal_code": 'yourPostalCodeVariable',
      "country": 'yourCountryVariable'
    }
  });    	       
	  		       }
	  		    	else 
	  		       { 	 document.getElementById("err-msg10").innerHTML = obj.Message;
	  		//	 document.getElementById("finalresult").innerHTML = "<input  type=\"button\"  id=\"stepFinal\" value=\"Enquire\"  class=\"next action-button\" />";	      
	  		   //  document.getElementById("stepFinal").style.display="block";
	  		     $('#stepFinal').show();
	  		     
	      	        }
	  		    	 
	  		     }
	  		     
	  		   };
	  		   return false;
		
		
	}
	
	
	else if(abc=="Online class"){
		
		
		//alert("inside Verify Otp!");
		
		var optDial= document.getElementById("otpp").value;
		
		var sess=document.getElementById("sessionIdId").value;
		
		var otp_P=document.getElementById("otp_phone").value;
		
		document.getElementById("numberdisplay").innerHTML;
		
	//	alert(optDial + " hsgdshdhsdgsjh");
		//alert(sess);
		//alert(otp_P);
		
		
		 $.ajax({
			 
			 type:"POST",
			 url:"https://api.teachbuddies.com/OnlineCourseStudentLogin/verifyotp",
			data:{"otp":optDial,"sessionId":sess,"otp_phone":otp_P},
			 //data:$("#enquirystepsform").serialize(),
			 success:function(data){
				 
				 
				 var status = JSON.parse(data);
				 				 				 
				 if(status.result==="Not Matched")
				 {
					 
			     document.getElementById("err-msg10").innerHTML="Otp Not Correct";
				 
				 }
				 else
				 {
				 
				 window.location="https://learn.teachbuddies.com/url/"+document.getElementById("otp_phone").value+"/"+document.getElementById("otp_phone").value;
		
				 }
		
		 		 
			 }
		});
		
		
		
		
	}
	
	
}









function Previousbutton() { //  console.log("BEFORE FUNCTON CALL PREVIOUS :" + previous_fs);
 //   console.log("BEFORE FUNCTON CALL CURRENT:" + current_fs);

    document.getElementById('step1Next').style.display = 'block';
    document.getElementById("err-msg1").innerHTML="";
		  document.getElementById("showLogin").innerHTML="";

   // console.log(currentStep + " ===========");
    currentStep -= 1;

	if(currentStep == 0){
		$("#HomeBack").css({
            'display': 'block'
        });
	}else{
			$("#HomeBack").css({
            'display': 'none'
        });	
	}

    //alert(currentStep);
/*
    if (((mode == "Home Tuition at Your Home,") || (mode == "Online Class,") || (mode == "Home Tuition at Your Home,Online Class,") || (mode == "Home Tuition at Student's Home,Home Tuition at Your Home,Online Class,") || (mode == "Home Tuition at Student's Home,Home Tuition at Your Home,") || (mode == "Home Tuition at Student's Home,Online Class,")) && currentStep == 7) {

        currentStep = 6;

        $("#enqformstep8").css({ "opacity": "0","transform": "scale(1)", "position": "relative","display": "none" });
        $("#enqformstep8").hide();

    }*/

    if (abc == "One To One" && currentStep == 4) {
     
    //	alert(abc+ " :-ABCDEFGHIJKLMNOP");
        currentStep = 3;
        $("#enqformstep5").css({ "opacity": "0","position": "relative","display": "none"});
        $("#enqformstep5").hide();


        $("#enqformstep6").css({ "opacity": "0","position": "relative", "display": "none" });
        $("#enqformstep6").hide();
        
        $("#enqformstep4").css({ "opacity": "0","position": "relative", "display": "none" });
        $("#enqformstep4").hide();
    }

    if (currentStep > 0) {
        $("#previous").show();
    } else {
        $("#previous").hide();
    }
    if (animating)
        return false;
    animating = false;

    //	current_fs = $(this).parent();
    //	previous_fs = $(this).parent().prev();

    current_fs = $('#enqformstep' + (currentStep + 1));
    previous_fs = $('#enqformstep' + (currentStep));

   // console.log(previous_fs);
   // console.log(current_fs);

    //de-activate current step on progressbar
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

    //show the previous fieldset
    previous_fs.show();
    //hide the current fieldset with style
    current_fs.animate({
        opacity: 0
    }, {
        step: function(now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale previous_fs from 80% to 100%
            scale = 0.8 + (1 - now) * 0.2;
            //2. take current_fs to the right(50%) - from 0%
            right = ((1 - now) * 50) + "%";
            //3. increase opacity of previous_fs to 1 as it moves in
            opacity = 1 - now;
            previous_fs.css({
                'transform': 'scale(' + scale + ')',
                'position': 'absolute',
                'min-height': '4'
            });
            current_fs.css({
                'left': left
            });
            previous_fs.css({
                'transform': 'scale(' + scale + ')',
                'opacity': opacity
            });
        },
        duration: 800,
        complete: function() {
            current_fs.hide();
            previous_fs.css({
                'transform': 'scale(1)',
                'position': 'relative',
                'min-height': '4'
            });

            animating = false;
        },
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
    });
    return false;
  
}

