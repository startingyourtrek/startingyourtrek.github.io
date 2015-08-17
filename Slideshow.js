<script type="text/javascript">
var slideimages = new Array() // create new array to preload images
slideimages[0] = new Image() // create new instance of image object
slideimages[0].src = "http://i61.tinypic.com/dfbyt.jpg" 
slideimages[1] = new Image()
slideimages[1].src = "http://i60.tinypic.com/2vjrcat.jpg"
slideimages[2] = new Image()
slideimages[2].src = "http://i57.tinypic.com/2eex08l.jpg"
</script>
		
<img class="displayed" height="400" width="900" style=vertical-align:"middle" src="http://i61.tinypic.com/dfbyt.jpg" id="slide"  />
<script type="text/javascript">

//variable that will increment through the images
var step=0

function slideit(){
 //if browser does not support the image object, exit.
if (!document.images)
return
document.getElementById('slide').src = slideimages[step].src
if (step<2)
step++
else
step=0
//call function "slideit()" every 2.5 seconds
setTimeout("slideit()",2500)
}
slideit()
</script>

