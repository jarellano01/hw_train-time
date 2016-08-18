$(function(){
	var database = firebase.database();
	var dbObject;

	$("#submit").click(function() {
		var trainName = $("#train-name").val();
		var destination = $("#destination").val();
		var firstTrainTime = $("#first-train-time").val();
		var frequency = $("#frequency").val();

		console.log(trainName + " " + destination + " " + firstTrainTime + " " + frequency);
		addToDatabase(trainName, destination, firstTrainTime,frequency);
		return false;
	});

	function addToDatabase(trainName, destination, firstTrainTime, frequency){
		database.ref().push({
			TrainName: trainName,
			Destination: destination,
			FirstTrainTime: firstTrainTime,
			Frequency: frequency
		});
	}
	$("#trigger").click(function() {
		addToDatabase();
	});

	database.ref().on("value", function(snapshot) {
		
		dbObject = snapshot.val();
		$("#train-table").empty();
		snapshot.forEach(function(childSnapshot) {	
			addRow(childSnapshot.val());
		})

	}, function (errorObject) {
	  	console.log("The read failed: " + errorObject.code);
	});

	function addRow(trainObj){
		var newRow = $("<tr>");

		var trainName = $("<td>" + trainObj.TrainName + "</td>");
		var destination = $("<td>" + trainObj.Destination + "</td>");
		var firstTrainTime = $("<td>" + trainObj.FirstTrainTime + "</td>");
		var frequency = $("<td>" + trainObj.Frequency + "</td>");

		var firstTrainTime = moment(trainObj.FirstTrainTime, "h:mm a");
		var mFrequency = moment.duration(parseInt(trainObj.Frequency), "minutes");
		var nextArrival = getNextTime(firstTrainTime, mFrequency);
		

		var minutesAway = $("<td>" + nextArrival.fromNow() + "</td>");


		newRow.append(trainName).append(destination).append(frequency).append("<td>" + nextArrival.format("hh:mm a") + "</td>").append(minutesAway);

		$("#train-table").append(newRow);
	}

	function getNextTime(firstTrainTime, frequency){
			var currentTime = moment();
			var nextTrainTime = firstTrainTime;

			while(currentTime.isAfter(nextTrainTime, 'minute')){
				nextTrainTime.add(frequency);
			}

			return nextTrainTime;
		}
})