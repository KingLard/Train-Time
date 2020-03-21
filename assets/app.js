//Global Variables-------------------------------------------------------
var database;
var nextArrival = 1;
var minutesAway = 1;

//Firebase setup---------------------------------------------------------


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA4pHXDN9-0j5u5Xi1mWtyEb6z3nxnd2iU",
    authDomain: "my-awesome-project-44bb0.firebaseapp.com",
    databaseURL: "https://my-awesome-project-44bb0.firebaseio.com",
    projectId: "my-awesome-project-44bb0",
    storageBucket: "my-awesome-project-44bb0.appspot.com",
    messagingSenderId: "657814899295",
    appId: "1:657814899295:web:056b6f5f793e932186a9ea",
    measurementId: "G-D1H0N9NXS7"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  var database = firebase.database();
  var currentTime = moment();
  console.log("current time :" + currentTime);
  console.log(moment(currentTime, "X"));
  


  //start JS logic-------------------------------------------------------

  $("#submit").on("click", function() {

    event.preventDefault();

    trainName = $("#train-name").val().trim();
    destination = $("#destination").val().trim();
    trainTime = $("#first-train").val().trim();
    frequency = $("#frequency").val().trim();

    database.ref().push({
        name: trainName,
        destination: destination,
        trainTime: trainTime,
        frequency: frequency
      });
  });





    database.ref().on("child_added", function(snapshot) {
        
        
        var snapTrain = snapshot.val().name;
        var snapDestination = snapshot.val().destination;
        var snapTime = snapshot.val().trainTime;
        var snapFrequency = snapshot.val().frequency;

        var converted = moment(snapTime, "HH:mm").subtract(1, "years");
        var difference = moment().diff(moment(converted), "minutes");
        var remainder = difference % snapFrequency;
        var away = snapFrequency - remainder;
        var next = moment().add(away, "minutes");
        next = moment(next).format("HH:mm");

        var newRow = $("<tr>").append(
            $("<td>").text(snapTrain),
            $("<td>").text(snapDestination),
            $("<td>").text(snapFrequency),
            $("<td>").text(next),
            $("<td>").text(away)
        );

        $("tbody").append(newRow);
  

        });

