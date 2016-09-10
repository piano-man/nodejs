var wtime=3000;
var ctime=0;
var winterval=500;
function wpercent(wpercentage)
{
	process.stdout.clearLine()
	process.stdout.cursorTo(0)
	process.stdout.write(`waiting ... ${wpercentage}`)

}
setTimeout(function(){
	clearInterval(interval);
	wpercent(100);
	console.log("done");


},wtime)

var interval=setInterval(function()
{
	ctime = ctime + winterval
	wpercent(Math.floor((ctime/wtime*100)))

},500)
wpercent(0);
