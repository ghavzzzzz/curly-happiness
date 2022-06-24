const firebaseConfig = {
    apiKey: "AIzaSyASyPSJOhy7bV_wt9i_19dbRIt-Q6GxmfQ",
    authDomain: "kwitter-2edaa.firebaseapp.com",
    databaseURL: "https://kwitter-2edaa-default-rtdb.firebaseio.com",
    projectId: "kwitter-2edaa",
    storageBucket: "kwitter-2edaa.appspot.com",
    messagingSenderId: "73104060194",
    appId: "1:73104060194:web:a5b704f44f9ea076933f7b"
  };
  firebase.initializeApp(firebaseConfig);

  n=localStorage.getItem("user_name");
  r=localStorage.getItem("room_name");

  function send(){
        msg=document.getElementById("msg").value;
        firebase.database().ref(r).push({
         name:n,
          message:msg,
          like:0
        });
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
  }
