var video;
var playbackRate = 1.0;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay)
	console.log("Loop is set to " + video.loop) 
});

 document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
 });

document.querySelector("#pause").addEventListener("click", function() {
 	video.pause();
	console.log("Pause Video");
});



document.querySelector("#slower").addEventListener("click", function() {
    playbackRate -= 0.1;
    video.playbackRate = playbackRate;
	console.log("Slow Down");
	console.log(playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
    playbackRate += 0.1;
    video.playbackRate = playbackRate;
	console.log("Speed Up");
	console.log(playbackRate);

});

document.querySelector("#skip").addEventListener("click", function() {
    video.currentTime += 10;
	console.log("Skip Ahead");
});

document.querySelector("#mute").addEventListener("click", function() {
    video.muted = !video.muted; 
	console.log("Mute");
});

document.querySelector("#slider").addEventListener('change', function() {
    video.volume = this.value / 100;
		document.querySelector('#volume').innerHTML = video.volume * 100 + '%';
		console.log('Volume is', video.volume);
});

document.querySelector('#vintage').addEventListener('click', function() {
	video.classList.add('oldSchool');
	console.log('Style is vintage');
})
document.querySelector('#orig').addEventListener('click', function() {
	video.classList.remove('oldSchool');
	console.log('Style is original');
})