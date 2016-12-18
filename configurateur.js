var run = function() 
{
	var mySpawn = null;
	var myRoom = null;
	
	if(Memory.mySpawns==null)
	{
		for(var x in Game.spawns)
		{
			myRoom = Game.spawns[x].room.name;
			mySpawn = x;
			Memory.mySpawns = new Array(myRoom);
			Memory.mySpawns.myRoom = new Array();
			addSpawn(myRoom, mySpawn);
		}
	}
};

// Ajoute un spawn dans Memory.mySpawn.NOM_SALLE
// myRoom : Nom de la salle du spawn
// mySpawn : Nom du spawn

var addSpawn = function(myRoom, mySpawn)
{
	return Memory.mySpawns.myRoom.push(mySpawn);
};

module.exports = 
{
    run: run,
	addSpawn: addSpawn
};