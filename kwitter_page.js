var firebaseConfig = {
    apiKey: "AIzaSyBpMlrfRt1qfWPks3o9kteXyaiXBhcgG4M",
    authDomain: "project-93-97-3ad6b.firebaseapp.com",
    projectId: "project-93-97-3ad6b",
    storageBucket: "project-93-97-3ad6b.appspot.com",
    messagingSenderId: "414061408778",
    appId: "1:414061408778:web:9856a34bcbab6d966ba5f3"
  };
  
firebase.initializeApp(firebaseConfig);

room_name = localStorage.getItem("Roomname");
    user_name = localStorage.getItem("Username");

    console.log("room name "+room_name);
    console.log("user name "+user_name);

    function logout() {
          localStorage.removeItem("Roomname");
          localStorage.removeItem("Username");
          window.location.replace("index.html");
    }
    function send() {
          msg = document.getElementById("msg").value;
          console.log("Message "+msg);
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0,
                dislike:0
          });
          document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();