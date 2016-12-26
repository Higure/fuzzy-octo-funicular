//console.log("start");
if(Memory.myRooms == undefined)
{
    Memory.myRooms = null;
	
	Memory.roles = ["recolteur", "ameliorateur", "constructeur"];
	Memory.unitsMax = {};
	
	for(var i in Memory.roles)
	{
		Memory.unitsMax[Memory.roles[i]] = new Array();
	}
	
	Memory.unitsMax.recolteur[1] = 6;
	Memory.unitsMax.recolteur[2] = 3;
	Memory.unitsMax.recolteur[3] = 2;
	Memory.unitsMax.recolteur[4] = 2;
	Memory.unitsMax.recolteur[5] = 2;
	Memory.unitsMax.recolteur[6] = 2;
	Memory.unitsMax.recolteur[7] = 2;
	Memory.unitsMax.recolteur[8] = 2;
	
	Memory.unitsMax.ameliorateur[1] = 4;
	Memory.unitsMax.ameliorateur[2] = 3;
	Memory.unitsMax.ameliorateur[3] = 2;
	Memory.unitsMax.ameliorateur[4] = 2;
	Memory.unitsMax.ameliorateur[5] = 2;
	Memory.unitsMax.ameliorateur[6] = 2;
	Memory.unitsMax.ameliorateur[7] = 2;
	Memory.unitsMax.ameliorateur[8] = 2;
	
	Memory.unitsMax.constructeur[1] = 0;
	Memory.unitsMax.constructeur[2] = 0;
	Memory.unitsMax.constructeur[3] = 0;
	Memory.unitsMax.constructeur[4] = 0;
	Memory.unitsMax.constructeur[5] = 0;
	Memory.unitsMax.constructeur[6] = 0;
	Memory.unitsMax.constructeur[7] = 0;
	Memory.unitsMax.constructeur[8] = 0;
	
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

	Memory.roles.constructeur = new Array();
	Memory.roles.constructeur[1] = [WORK, CARRY, CARRY, MOVE, MOVE]; // MAX : 300
	Memory.roles.constructeur[2] = [WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE]; // MAX : 550
	Memory.roles.constructeur[3] = [WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE]; // MAX : 800
	Memory.roles.constructeur[4] = [WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE]; // MAX : 1300
	Memory.roles.constructeur[5] = [WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]; // MAX : 1800
	Memory.roles.constructeur[6] = [WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]; // MAX : 2300
	Memory.roles.constructeur[7] = [WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE]; // MAX : 2800
	Memory.roles.constructeur[8] = [WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]; // MAX : 3300
	
}

var configurateur = require('configurateur');
var comportement = require('comportement');
var creerCreep = require('creerCreep');



module.exports.loop = function() 
{
	var pop = {};
	var constructions = null;
	
	if(Memory.myRooms==null)
	{
		configurateur.run();
	}
	for(var i in Memory.creeps)
	{
		if(!Game.creeps[i]) 
		{
			delete Memory.creeps[i];
		}
	}
	for(var r in Memory.myRooms)
	{
		for(var z in Memory.myRooms[r].sources)
		{
			Memory.myRooms[r].sources[z] = 0;
		}
		for (var i in Game.creeps)
		{
			var creep = Game.creeps[i];
			comportement.run(creep);
			if(creep.room.name==r)
			{
				if(pop[creep.memory.role]==null)
				{
					pop[creep.memory.role] = 1;
				}
				else
				{
					pop[creep.memory.role]++;
				}
				if(creep.memory.role=="recolteur")
				{
					Memory.myRooms[r].sources[creep.memory.source]++;
				}
				constructions = Game.spawns[Memory.myRooms[r].spawn].room.find(FIND_CONSTRUCTION_SITES);
				if(constructions.length>0 && pop.constructeur==0) 
				{
					pop.constructeur = -1;
				}
			}
		}
		if(Game.spawns[Memory.myRooms[r].spawn].spawning==null)
		{
			for(var i in Memory.roles)
			{
				if(pop[i]==undefined)
				{
					pop[i] = 0;
				}
				if(pop[i]<Memory.unitsMax[i][Memory.myRooms[r].tech])
				{
					creerCreep.run(i, r);
					break;
				}
			}
		}
	}
}