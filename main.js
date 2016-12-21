//console.log("start");
if(Memory.mySpawns == undefined)
{
    Memory.mySpawns = null;
}


var configurateur = require('configurateur');



module.exports.loop = function () 
{
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