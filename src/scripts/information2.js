/** OTHERS
  lastLogin: datetime;
**/
//var lastLogin;

/** PLAYER TABLE JSON FORMAT
 *{ playerID:,
 *    currency:,
 *    activeItem:,
 *    activePet:,
 *    accountEmail: }
 **/
var playerInfo;
var playerID;

/** PLAYERPET TABLE JSON FORMAT
 *[ { currentHappiness: 0
      currentHunger: 0
      petID: 1
      petName: "petA"
      playerID: 1
      playerPetID: 1
      totalHappiness: 0
      totalHunger: 0 } ]
 **/
var playerPetInfo;

/** INVENTORY TABLE JSON FORMAT
   [ { inventoryID: 1
      itemID: 1
      itemQty: 2
      playerID: 1 },
    { inventoryID: 2
      itemID: 2
      itemQty: 4
      playerID: 1 }]
 **/
var inventoryInfo;

/** TASKLIST TABLE JSON FORMAT
 *{ playerID: 1
    taskIDa: 1
    taskIDb: 2
    taskIDc: 3
    taskListID: 1 }
 **/
var taskListInfo;

initGameInfo();
function initGameInfo() {
  var parameters = new URLSearchParams(window.location.search);
  playerEmail = parameters.get('email');
  getPlayerInfo(playerEmail);
  getPlayerPet();
  getInventory();
  getTaskList();
  getlastLogin();
  console.log(playerInfo);
}

function getlastLogin(email)
{
  //Ajax call to get lastLogin from  table
  $.ajax({
    url: "/getlastlogin/" + "'" + email + "'",
    dataType: "json",
    port: "8000",
    type: "GET",
    async: false,
    success: function(data) {
      //playerInfo = JSON.parse(data);
      //data[0] because there will always only be 1 playerInfo per email
      lastLogin = data;
      console.log("lastlogin" + lastLogin);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("ERROR:", jqXHR, textStatus, errorThrown);
    }
  });
}

function getPlayerInfo(email)
{
  //Ajax call to get info from player table
  $.ajax({
    url: "/getinitialinfo/" + "'" + email + "'",
    dataType: "json",
    port: "8000",
    type: "GET",
    async: false,
    success: function(data) {
      //playerInfo = JSON.parse(data);
      //data[0] because there will always only be 1 playerInfo per email
      playerInfo = data[0];
      playerID = playerInfo.playerID;
      console.log(playerInfo);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("ERROR:", jqXHR, textStatus, errorThrown);
    }
  });
}

  //Get info from PlayerPet table
function getPlayerPet()
{
  //Ajax call to get info from playerPet table
  $.ajax({
    url: "/getplayerpetinfo/" + "'" + playerID + "'",
    dataType: "json",
    port: "8000",
    type: "GET",
    async: false,
    success: function(data) {
      //playerInfo = JSON.parse(data);
      playerPetInfo = data;
      console.log(playerPetInfo);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("ERROR:", jqXHR, textStatus, errorThrown);
    }
  });
}
  //Get info from Inventory table
function getInventory()
{
    //Ajax call to get info from Inventory table
    $.ajax({
      url: "/getinventoryinfo/" + "'" + playerID + "'",
      dataType: "json",
      port: "8000",
      type: "GET",
      async: false,
      success: function(data) {
        //playerInfo = JSON.parse(data);
        inventoryInfo = data;
        console.log(inventoryInfo);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }
    });
}
  //Get info from TaskList table
function getTaskList()
{
    //Ajax call to get info from TaskList table
    $.ajax({
      url: "/gettasklistinfo/" + "'" + playerID + "'",
      dataType: "json",
      port: "8000",
      type: "GET",
      async: false,
      success: function(data) {
        //playerInfo = JSON.parse(data);
        //data[0] because there will always only be 1 tasklist per email
        taskListInfo = data[0];
        console.log(taskListInfo);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }
    });
}

////////////////////////////////////////////////////////////////////////////////
// function updateAttribute(table, attribute, listLevel, newValue _callback)
// {
//   //Ajax call to get info from TaskList table
//   $.ajax({
//     url: "/gettasklistinfo/" + "'" + playerID + "'",
//     dataType: "json",
//     port: "8000",
//     type: "GET",
//     async: false,
//     success: function(data) {
//       //playerInfo = JSON.parse(data);
//       //data[0] because there will always only be 1 tasklist per email
//       taskListInfo = data[0];
//       console.log(taskListInfo);
//     },
//     error: function(jqXHR, textStatus, errorThrown) {
//       console.log("ERROR:", jqXHR, textStatus, errorThrown);
//     }
//   });
// }
