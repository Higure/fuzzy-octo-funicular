var configurateur = require('configurateur');


Memory.mySpawns = null;

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
}