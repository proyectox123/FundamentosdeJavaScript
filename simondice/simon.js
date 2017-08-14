const levels = 15
let keys = generateKeys(levels)

function nextRound(actualLevel){
  if(actualLevel == levels){
    //return alert('You win!')
    return swal({
      title : 'You win!',
      type : 'success',
      showConfirmButton: false
    })
  }

  //alert(`Level ${actualLevel + 1}`)
  swal({
    timer : 1500,
    title : `Level ${actualLevel + 1}`
  })

  for(let i = 0; i <= actualLevel; i++){
    setTimeout(() => activate(keys[i]), 1000 * (i+1))
  }

  let i = 0
  let actualKey = keys[i]
  window.addEventListener('keydown', onkeydown)

  function onkeydown(event) {
    if(event.keyCode == actualKey){
      activate(actualKey, {success : true})
      i++
      if(i > actualLevel){
        window.removeEventListener('keydown', onkeydown)
        setTimeout(() => nextRound(i), 1500)
      }

      actualKey = keys[i]
    } else {
      activate(event.keyCode, { fail : true })
      window.removeEventListener('keydown', onkeydown)
      //setTimeout(() => alert('Perdiste :('), 1500)
      swal({
        title : 'You lose! :(',
        text: 'Do you want to try again?',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        closeOnConfirm: true
      }, function(ok) {
        if(ok){
          keys = generateKeys(levels)
          nextRound(0)
        }
      })
    }
  }
}

nextRound(0)

function generateKeys(levels){
  return new Array(levels).fill(0).map(generateKey)
}

function generateKey(){
  const min = 65
  const max = 90
  return Math.round(Math.random() * (max - min) + min)
}

function getElementByKeyCode(keyCode) {
  return document.querySelector(`[data-key="${keyCode}"]`)
}

function activate(keyCode, opts = {}){
  const el = getElementByKeyCode(keyCode)
  el.classList.add('active')
  if(opts.success){
    el.classList.add('success')
  }else if(opts.fail){
    el.classList.add('fail')
  }

  setTimeout(deactivate.bind(null, el), 500)
}

function deactivate(el){
  el.className = 'key'
}