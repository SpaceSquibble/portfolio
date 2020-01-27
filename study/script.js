$(".addEvent").on("submit", function(event) {
  event.preventDefault();
  var date = $(this).find('[type=date]').val();
  console.log(date);
  
  var eventText = $(this).find('[type=text]').val(); 
  var $event = $("<p>" + eventText + "</p>");
  console.log(eventText);
  
  var type = $(this).find('[class=types]').val();
  console.log(type);
  
  switch(type) {
    case "1":
      console.log("sf");
      $event.addClass("exam");
      break;
    case "2":
      $event.addClass("summative");
      break;
    case "3":
      $event.addClass("test");
      break;
    case "4":
      $event.addClass("quest");
      break;
    case "5":
      $event.addClass("quiz");
      break;
    case "6":
      $event.addClass("assignment");
      break;
    case "7":
      $event.addClass("project");
      break;
    case "8":
      $event.addClass("homework");
      break;
  }
  
  $($event).appendTo("[datetime=" + date + "]");
});


var darkTheme = function() {
  $("[class=blue1]").removeClass("blue1").addClass("darkBlue1");
  $("[class=blue2]").removeClass("blue2").addClass("darkBlue2");
  $("[class=calculatorBackground]").removeClass("calculatorBackground").addClass("darkCalculatorBackground");
  $("[class=whiteBackground]").removeClass("whiteBackground").addClass("blackBackground");
  $("[class=blackText]").removeClass("blackText").addClass("whiteText");
};

var lightTheme = function() {
  $("[class=darkBlue1]").removeClass("darkBlue1").addClass("blue1");
  $("[class=darkBlue2]").removeClass("darkBlue2").addClass("blue2");
  $("[class=darkCalculatorBackground]").removeClass("darkCalculatorBackground").addClass("calculatorBackground");
  $("[class=blackBackground]").removeClass("blackBackground").addClass("whiteBackground");
  $("[class=whiteText]").removeClass("whiteText").addClass("blackText");
};

if(sessionStorage.getItem("theme") === "dark") {
  darkTheme();
}
else {
  lightTheme();
}

$("#themeChange").on("click", function(event) {
  var theme = sessionStorage.getItem("theme");
  if (theme !== "dark") {
    darkTheme();
    sessionStorage.setItem("theme", "dark");
  }
  else {
    lightTheme();
    sessionStorage.removeItem("theme");
  }
});
