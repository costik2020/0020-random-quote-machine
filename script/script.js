console.log("test test are you there");



$("#new-quote").click(()=>{
	//console.log("color is:", rgb(200, 255, 10) );

	//$("body").get(0).style.setProperty("$("body").get(0).style.setProperty("--bg-color", "hotpink");", "black");
	//$("body").get(0).style.setProperty("--bg-color", "hotpink");	
	let redNumber = 0 + Math.floor(Math.random() * 255);		
	let greenNumber = 0 + Math.floor(Math.random() * 255);	
	let blueNumber = 0 + Math.floor(Math.random() * 255);	

	$("body").get(0).style.setProperty("--bg-color",`rgb(${redNumber}, ${greenNumber} , ${blueNumber})`  );	
});


//$("blockquote").css("backgroundColor", "yellow");

































