function montyhall(tests = 1000, doors = 3) {
	var prizeDoor, chosenDoor, shownDoor, switchDoor, stayWins = 0, switchWins = 0;
	
	// randomly pick a door excluding input doors
	function pick(excludeA, excludeB) {
		var door;
		do {
			door = Math.floor(Math.random() * doors);
		} while (door === excludeA || door === excludeB);
		return door;
	}
	
	// run tests
	for (var i = 0; i < tests; i ++) {
		
		// pick set of doors
		prizeDoor = pick();
		chosenDoor = pick();
		shownDoor = pick(prizeDoor, chosenDoor);
		switchDoor = pick(chosenDoor, shownDoor);

		// test set for both choices
		if (chosenDoor === prizeDoor) {
			stayWins ++;
		} else if (switchDoor === prizeDoor) {
			switchWins ++;
		}
	}
	
	// results
	return {
		stayWins: stayWins + ' ' + (100 * stayWins / tests) + '%',
		switchWins: switchWins + ' ' + (100 * switchWins / tests) + '%'
	};
}
montyhall(1000, 9)
