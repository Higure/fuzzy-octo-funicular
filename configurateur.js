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

var run = function() 
{
	var mySpawn = null;
	var myRoom = null;
	
	if(Memory.myRooms==null)
	{
		for(var x in Game.spawns)
		{
			myRoom = Game.spawns[x].room.name;
			mySpawn = x;
			Memory.myRooms = {};
			Memory.myRooms[myRoom] = {};
			addSpawn(myRoom, mySpawn);
			setTech(myRoom, 1);
			setEnergyMax(myRoom, 300, 0);
		}
	}
};

module.exports = 
{
    run: run,
    setTech: setTech,
    setEnergyMax: setEnergyMax,
	addSpawn: addSpawn
};