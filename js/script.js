/*--RESPONSIVE NAVIGATION BAR HANDLING--*/
var flag = false; // Flag used to know if the dropdown menu is displayed or not.

//Changes the value of the attribute 'display'. 
var responsiveNavBar = function(){			
	flag = !flag;
	if (flag) {
		$(".dropdownMenu").css("display", "block");
	}else{
		$(".dropdownMenu").css("display", "none");
	}					
};

//Hides the dropdown menu if the screen size is more than 600px. 
var hideDropdownMenu = function(){			
	if($("html").css("width") > "600px"){
		console.log($("body").css("width"));
		$(".dropdownMenu").css("display", "none");
		flag = false;	
	} 	
}

//Hides the dropdown menu after a section has been selected.
var hideDropdownMenuOnClick = function(){
	$(".dropdownMenu").css("display", "none");
	flag = false;
}

