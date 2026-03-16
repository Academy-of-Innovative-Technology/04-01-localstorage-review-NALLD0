var key = "myDataKey";


// SAVE
document.querySelector(".save").onclick = function() {

    var value = document.getElementById("saveValue").value;

    localStorage.setItem(key, value);

    document.getElementById("saveValue").value = "";
    alert("Data saved!");

};


// LOAD
document.querySelector(".load").onclick = function() {
    var storedValue = localStorage.getItem(key);

    document.getElementById("loadValue").value = storedValue ? storedValue : "";
};

// LOAD
document.querySelector(".update").onclick = function() {

    var newValue = document.getElementById("updateValue").value;

    localStorage.setItem(key, newValue );

    document.getElementById("updateValue").value = "";

    alert("Data updated!");

};

// DELETE
function deleteData () {

    var deleteKeyInput = document.getElementById("deleteKey").value;

    localStorage.removeItem(deleteKeyInput);

    document.getElementById("deleteKey").value = "";
    
    alert("Data deleted!");
}
