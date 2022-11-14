console.log("test test are you there");

// If the user did not press `New quote` button
let newQuotesRequested = 0;

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


			// Enable the twitter button
			let newLink="";
			newLink = `https://twitter.com/intent/tweet?text=${data.content} by ${data.author}`;
			//newLink = newLink.replace(" ", "zzzzzzzz");
			newLink = newLink.replace(/\s/g, "+");
			$("#tweet-quote").attr("href", newLink);
			console.log("newLink for twitter=", newLink);

			newQuotesRequested = newQuotesRequested + 1;
		}
	})







});


if (newQuotesRequested == 0 ){

	let newLink="";
	newLink = `https://twitter.com/intent/tweet?text= It does not matter how slowly you go as long as you do not stop. by Confucius `;
	//newLink = newLink.replace(" ", "zzzzzzzz");
	newLink = newLink.replace(/\s/g, "+");
	$("#tweet-quote").attr("href", newLink);
	console.log("newLink for twitter=", newLink);


}





//$("blockquote").css("backgroundColor", "yellow");





























