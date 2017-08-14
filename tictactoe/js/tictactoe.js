function chooseSide(){
  swal({
    title: "Tic tac toe",
    text: "Select your side",
    type: "info",
    showCancelButton: true,
    confirmButtonText: "X",
    cancelButtonText: "O"
  }, function(isConfirm){
    const option = isConfirm ? "X" : "O"

    selectRow(option)
  })
}

function selectRow(option){
  console.log(`selectRow() You choose ${option}`)
  var row0 = document.getElementById("0")
  if (row0.addEventListener) {  // all browsers except IE before version 9
    row0.addEventListener("click", onRowClick, false);
  } else {
    if (row0.attachEvent) {   // IE before version 9
      row0.attachEvent("click", onRowClick);
    }
  }
}

function onRowClick(event){
  console.log(`onRowClick() event ${this.id}`)
}

chooseSide()