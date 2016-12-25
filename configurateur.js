// Ajoute un spawn dans Memory.myRooms.NOM_SALLE
// myRoom : Nom de la salle du spawn
// mySpawn : Nom du spawn

var addSpawn = function(myRoom, mySpawn)
{
	Memory.myRooms[myRoom].spawn = mySpawn;
};

// Défini le niveau de tech dans Memory.myRooms.NOM_SALLE
// myRoom : Nom de la salle du spawn
// tech : Niveau de tech

var setTech = function(myRoom, tech)
{
	Memory.myRooms[myRoom].tech = tech;
};

// Défini le niveau d'énergie maximum dans Memory.myRooms.NOM_SALLE
// myRoom : Nom de la salle du spawn
// energyMax : Energie Max
// ajout : Si energyMax = 0, on ajoute ajout au total d'énergie max précédent

var setEnergyMax = function(myRoom, energyMax, ajout)
{
	if(energyMax!=0)
	{
		Memory.myRooms[myRoom].energyMax = energyMax;
	}
	else
	{
		Memory.myRooms[myRoom].energyMax = Memory.myRooms[myRoom].energyMax + ajout;
	}
};

// Ajoute l'id d'une source de la room en mémoire
// myRoom : Nom de la salle de la source
// source_id : Identifiant de la source

var addSource = function(myRoom, source_id)
{
	Memory.myRooms[myRoom].sources[source_id] = 0;
}

var run = function() 
{
	var mySpawn = null;
	var myRoom = null;
	var sources = null;
	
	if(Memory.myRooms==null)
	{
		for(var x in Game.spawns)
		{
			myRoom = Game.spawns[x].room.name;
			sources = Game.spawns[x].room.find(FIND_SOURCES);
			mySpawn = x;
			Memory.myRooms = {};
			Memory.myRooms[myRoom] = {};
			Memory.myRooms[myRoom].sources = {};
			addSpawn(myRoom, mySpawn);
			setTech(myRoom, 1);
			setEnergyMax(myRoom, 300, 0);
			for (var z in sources)
			{
				addSource(myRoom, sources[z].id);
			}
		}
	}
};

module.exports = 
{
    run: run,
    setTech: setTech,
    setEnergyMax: setEnergyMax,
	addSpawn: addSpawn,
	addSource: addSource
};