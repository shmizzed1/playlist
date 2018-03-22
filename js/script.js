// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	"title":"24K Magic",
	"artist":"Bruno Mars",
	"mp3-url":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
	"image-url":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
}

var myPlayList = [
	{
		"title":"24K Magic",
		"artist":"Bruno Mars",
		"mp3url":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
		"imageurl":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
	},
	{
		"title":"Sir Duke",
		"artist":"Stevie Wonder",
		"mp3url":"https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		"imageurl":"https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Songs_in_the_key_of_life.jpg/220px-Songs_in_the_key_of_life.jpg",
	},
	{
		"title":"Sorry",
		"artist":"Justin Bieber",
		"mp3url":"https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"imageurl":"http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	}

]



// DOCUMENT READY FUNCTION
$( document ).ready(function() {

displayList();
	$('button').click(function(){
	
		var titt = $("#title").val();
		var art = $("#artist").val();
		var len = $("#length").val();
		var url = $("#imageurl").val();
	
		addSong(titt, art, len, url);
		clearList();
		displayList();  
	
	});
	
});


function displayList(){
	for (var i = 0; i < myPlayList.length; i++){
	        $('.songs').append('<h2>' + myPlayList[i].title +'<h2>');
	        $('.songs').append('<p>' + myPlayList[i].artist +'<p>');
	    	var linky = myPlayList[i].mp3url;
	        $('.songs').append('<div> <a href =' + linky + '>Click here for a listen </a> </div>');
	        var pic =   myPlayList[i].imageurl ;
	        $('.songs').append('<img src =' + pic + ' height="300" width="300" > ');
	    }
}

function clearList(){
   $('.songs').empty();
}

function addSong(titt, art, len, url){
 myPlayList.push({
        title: titt,
        artist: art,
        mp3url:len,
        imageurl: url,
        });
}
  
  

