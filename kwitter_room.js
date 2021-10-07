
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD8Q505l2p2UOpXHXs0HyfBq88i9ReUn4s",
      authDomain: "kwitter-fa5cf.firebaseapp.com",
      databaseURL: "https://kwitter-fa5cf-default-rtdb.firebaseio.com",
      projectId: "kwitter-fa5cf",
      storageBucket: "kwitter-fa5cf.appspot.com",
      messagingSenderId: "417309350891",
      appId: "1:417309350891:web:362f50bc93a56a571857ae"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
