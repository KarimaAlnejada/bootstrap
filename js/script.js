


var tooltipTriggerList = [].slice.call(document.querySelectorAll(' [data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)

})




var popoverTriggerList = [].slice.call(document.querySelectorAll('  [data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})


    
// $(document).ready(function(){
//   $(this).popover({
//     content : $(this).attr("popover-content"),
//     title : $(this).attr("popover-title")
//   })
//   $(this).tooltip({
//     placement : 'bottom',
//     title : $(this).attr("tooltip-title") 
//   });
// }
// );