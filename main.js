//console.log("start");
if(Memory.myRooms == undefined)
{
    Memory.myRooms = null;
	
	Memory.roles = ["recolteur", "ameliorateur"];
	Memory.unitsMax = {};
	
	for(var i in Memory.roles)
	{
		Memory.unitsMax[Memory.roles[i]] = new Array();
	}
	
	Memory.unitsMax.recolteur[1] = 3;
	Memory.unitsMax.recolteur[2] = 3;
	Memory.unitsMax.recolteur[3] = 2;
	Memory.unitsMax.recolteur[4] = 2;
	Memory.unitsMax.recolteur[5] = 2;
	Memory.unitsMax.recolteur[6] = 2;
	Memory.unitsMax.recolteur[7] = 2;
	Memory.unitsMax.recolteur[8] = 2;
	
	Memory.unitsMax.ameliorateur[1] = 3;
	Memory.unitsMax.ameliorateur[2] = 3;
	Memory.unitsMax.ameliorateur[3] = 2;
	Memory.unitsMax.ameliorateur[4] = 2;
	Memory.unitsMax.ameliorateur[5] = 2;
	Memory.unitsMax.ameliorateur[6] = 2;
	Memory.unitsMax.ameliorateur[7] = 2;
	Memory.unitsMax.ameliorateur[8] = 2;
	
	Memory.roles = {};
	Memory.roles.recolteur = new Array();
	Memory.roles.recolteur[1] = [WORK, CARRY, CARRY, MOVE, MOVE]; // MAX : 300
	Memory.roles.recolteur[2] = [WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE]; // MAX : 550
	Memory.roles.recolteur[3] = [WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE]; // MAX : 800
	Memory.roles.recolteur[4] = [WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE]; // MAX : 1300
	Memory.roles.recolteur[5] = [WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE]; // MAX : 1800
	Memory.roles.recolteur[6] = [WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE]; // MAX : 2300
	Memory.roles.recolteur[7] = [WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE]; // MAX : 2800
	Memory.roles.recolteur[8] = [WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE]; // MAX : 3300

	Memory.roles.ameliorateur = new Array();
	Memory.roles.ameliorateur[1] = [WORK, CARRY, CARRY, MOVE, MOVE]; // MAX : 300
	Memory.roles.ameliorateur[2] = [WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE]; // MAX : 550
	Memory.roles.ameliorateur[3] = [WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE]; // MAX : 800
	Memory.roles.ameliorateur[4] = [WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE]; // MAX : 1300
	Memory.roles.ameliorateur[5] = [WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]; // MAX : 1800
	Memory.roles.ameliorateur[6] = [WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]; // MAX : 2300
	Memory.roles.ameliorateur[7] = [WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE]; // MAX : 2800
	Memory.roles.ameliorateur[8] = [WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]; // MAX : 3300
	
}

var configurateur = require('configurateur');



module.exports.loop = function() 
{
	var pop = {};
	if(Memory.myRooms==null)
	{
		configurateur.run();
	}
	for(var r in Memory.myRooms)
	{
		for (var i in Game.creeps) 
		{
			var creep = Game.creeps[i];
			if(creep.memory.role==role)
			{
				pop[creep.memory.role]++;
			}
		}
		for(var i in Memory.roles)
		{
			if(pop[i]==undefined)
			{
				pop[i] = 0;
			}
			if(pop[i]<=Memory.unitsMax[i][Memory.myRooms[r].tech])
			{
				console.log("Créer un creep : "+i);
			}
		}
	}
}