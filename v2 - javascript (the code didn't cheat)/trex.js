var INTERVAL = 0.5;
window.tRexBot = setInterval(function() {
    var tRex = Runner.instance_.tRex;
    var obstacles = Runner.instance_.horizon.obstacles;
    if (!tRex.ducking && !tRex.jumping && 
    	(obstacles.length > 0) && 
    	(obstacles[0].xPos + obstacles[0].width) <= 
    	((parseInt(Runner.instance_.currentSpeed - 5.1)) * 34 + 100) && 
    	(obstacles[0].xPos + obstacles[0].width) > 20) {
        if(obstacles[0].yPos == 75)
        	tRex.setDuck(true);
        else if(obstacles[0].yPos != 50)
        	tRex.startJump(Runner.instance_.currentSpeed);
    }
    if(tRex.ducking && obstacles[0].yPos != 75)
    	tRex.setDuck(false);
}, INTERVAL);
