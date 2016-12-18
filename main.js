
Memory.mySpawns = null;


var configurateur = require('configurateur');



module.exports.loop = function () 
{
	console.log(Game.time);
	console.log(Memory);
	if(Memory.mySpawns==null)
	{
		configurateur.run();
	}
	//console.log(Game.time);
    /*for (var i in Game.creeps) 
    {
	}*/
	// console.log(Memory);
}