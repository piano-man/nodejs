var readline = require('readline');
var rl = readline.createInterface(process.stdout,process.stdin);
real={
	name=""
	say:[]
}
rl.question('what is your name?',function(answer){
	real.name=answer
	rl.setPrompt(`what would ${real.name} say`)
	rl.Prompt();
	rl.on('line',function(saying){
		if(saying == 'exit')
			rl.close()
		else
		{
			rl.setPrompt(`what else would he/she say ?`)
			rl.Prompt();
		}

	})
})