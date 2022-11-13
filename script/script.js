console.log("test test are you there");



$("#new-quote").click(()=>{
	//console.log("color is:", rgb(200, 255, 10) );

	//$("body").get(0).style.setProperty("$("body").get(0).style.setProperty("--bg-color", "hotpink");", "black");
	//$("body").get(0).style.setProperty("--bg-color", "hotpink");	
	let redNumber = 0 + Math.floor(Math.random() * 255);		
	let greenNumber = 0 + Math.floor(Math.random() * 255);	
	let blueNumber = 0 + Math.floor(Math.random() * 255);	

	$("body").get(0).style.setProperty("--bg-color",`rgb(${redNumber}, ${greenNumber} , ${blueNumber})`  );


	
	// Fetch some data from an API.
	// I will use Quotable, a free and open source api, repository address: 
	// https://github.com/lukePeavey/quotable#get-random-quote
	// Special thanks to: lukePeavey for making this possible.

	$.ajax({
		type: "GET", 
		url: "https://api.quotable.io/random",
		success: function(data){
		console.log("data=", data);

		$("#text").text(data.content);
		$("#author").text(data.author);

		}
	})








});


//$("blockquote").css("backgroundColor", "yellow");





























