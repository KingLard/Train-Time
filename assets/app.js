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
  


  //start JS logic-------------------------------------------------------

  $("#submit").on("click", function() {

    event.preventDefault();

    trainName = $("#train-name").val().trim();
    destination = $("#destination").val().trim();
    firstTrain = $("#first-train").val().trim();
    frequency = $("#frequency").val().trim();

    console.log(trainName);
    console.log(destination);
    console.log(firstTrain);
    console.log(frequency);

   


  $("table").append("<tr><td>" + snapshot.val().name + "</td><td>" + snapshot.val().destination + "</td><td>" + snapshot.val().firstTrain + "</td><td>" + frequency + "</td><td>" + nextArrival + "</td><td>" + minutesAway + "</td></tr>");