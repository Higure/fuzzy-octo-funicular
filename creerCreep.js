var run = function(role, roomName)
{
	var tech = Memory.myRooms[roomName].tech;
	var mem = {role: role, working: true};
	var parts = Memory.roles[role][tech];
	switch(role)
	{
		case "recolteur":
			var n = 0;
			var s = 0;
			for(var x in Memory.myRooms[roomName].sources)
			{
				if(n==0)
				{
					n = Memory.myRooms[roomName].sources[x];
					s = x;
				}
				if(Memory.myRooms[roomName].sources[x]==0 || Memory.myRooms[roomName].sources[x]<n)
				{
					s = x;
					break;
				}
			}
			mem.source = s;
		break;
		default:
		break;
	}
	var exe = Game.spawns[Memory.myRooms[roomName].spawn].createCreep(parts, null, mem);
	if(exe != ERR_NOT_ENOUGH_ENERGY)
	{
		console.log(exe+" est né !");
	}
};




module.exports = 
{
    run: run
};