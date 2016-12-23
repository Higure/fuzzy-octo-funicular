
var run = function(creep)
{
	if(creep.memory.working && creep.carry.energy == 0) 
	{
		creep.memory.working = false;
	}
	if(!creep.memory.working && creep.carry.energy == creep.carryCapacity) 
	{
		creep.memory.working = true;
	}
	var targets = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3);
	if(targets.length > 0) 
	{
		var path = creep.pos.findPathTo(targets[0]);
		switch (path[0].direction)
		{
			case TOP:
				creep.move(BOTTOM);
			break;
			case TOP_RIGHT:
				creep.move(BOTTOM_LEFT);
			break;
			case RIGHT:
				creep.move(LEFT);
			break;
			case BOTTOM_RIGHT:
				creep.move(TOP_LEFT);
			break;
			case BOTTOM:
				creep.move(TOP);
			break;
			case BOTTOM_LEFT:
				creep.move(TOP_RIGHT);
			break;
			case LEFT:
				creep.move(RIGHT);
			break;
			case TOP_LEFT:
				creep.move(BOTTOM_RIGHT);
			break;
		}
	}
	
	switch(creep.memory.role)
	{
		case "recolteur":
			roleRecolteur(creep, creep.memory.working);
		break;
		case "ameliorateur":
			roleAmeliorateur(creep, creep.memory.working);
		break;
	}
};

var roleRecolteur = function(creep, working)
{
	var targetsCol = null;
	if(working)
	{
		var target = Game.getObjectById(creep.memory.source);
		if(creep.harvest(source) == ERR_NOT_IN_RANGE) 
		{
			creep.moveTo(target, {reusePath: 100});
		}
	}
	else
	{
		targetsCol = creep.pos.findClosestByRange(FIND_STRUCTURES, 
		{
				filter: (structure) => 
				{
					return (structure.structureType == STRUCTURE_CONTAINER && _.sum(structure.store) < structure.storeCapacity);
				}
		});
		if(targetsCol!=undefined)
		{
			var target = targetsCol;
		}
		else
		{
			var roomName = creep.room.name;
			target = Game.spawns[Memory.myRooms[roomName].spawn];
		}
		if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) 
		{
			creep.moveTo(target, {reusePath: 100});
		}
	}
};

var roleAmeliorateur = function(creep, working)
{
	var target = null;
	if(working)
	{
		target = creep.room.controller;
		if(creep.upgradeController(target) == ERR_NOT_IN_RANGE) 
		{
			creep.moveTo(target, {reusePath: 100});
		}
	}
	else
	{
		target = creep.pos.findClosestByRange(FIND_STRUCTURES, 
		{
				filter: (structure) => 
				{
					return ((structure.structureType == STRUCTURE_CONTAINER && _.sum(structure.store) < structure.storeCapacity) || structure.structureType == STRUCTURE_SPAWN);
				}
		});
		if(creep.withdraw(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) 
		{
			creep.moveTo(target, {reusePath: 100});
		}
	}
};

module.exports = 
{
    run: run,
	roleRecolteur: roleRecolteur,
	roleAmeliorateur: roleAmeliorateur
};