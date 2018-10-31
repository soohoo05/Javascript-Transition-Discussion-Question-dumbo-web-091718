$('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
let lincoln=document.getElementById('save_lincoln')
let inter=document.getElementById('interval').value

lincoln.addEventListener('click',()=>saveLincoln(inter))
function saveLincoln(interval) {
  
  if(isNaN(interval)) {
    interval = 10000
  }
  $('#foreground').fadeOut(interval);
}
