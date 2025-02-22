var myform=document.getElementById('myform');
myinput=document.getElementById9('myinput');
myitem=document.getElementById('myitem');


myform.addEventListener("submit",function(event)
{event.preventDefault()
    createItem(myinput.value)})
function createItem(inputItems)
{var items=`<li>${inputItems}<button onclick='deleteElement(this)'>DELETE</button></li>`
myitem.insertAdjacentElementHTML('beforeend',items)
myinput.value=''
myinput.focus()}
function deleteElement(ElementToDelete)
{ElementToDelete.parentElement.remove()}