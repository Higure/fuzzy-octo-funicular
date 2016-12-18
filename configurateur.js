var configurateur = 
{
    run: function() 
	{
		if(Memory.mySpanws==null)
		{
			var spawn = null;
			for(var x in Game.spawns)
			{
				spawn = Game.spawns[x];
				console.log(spawn);
				/*if(Memory.mySpawns.spawn==undefined)
				{
					addSpawn(spawn);
				}*/
			}
		}
	}
	
	addSpawn: function(spawn)
	{
		Memory.mySpawn = spawn;
	}
};

module.exports = configurateur;