function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    var close= document.createElement('span');
    var txt=document.createTextNode('\u00D7');
    close.className='close';
    close.appendChild(txt);
    li.appendChild(close);

    close.addEventListener('click',function(){
        this.parentElement.style.display='none';
    })}
var elements = document.querySelector('ul');
elements.addEventListener('click', (e)=>{
    if(e.target.tagName==='LI') {
        e.target.classList.toggle("checked");

    }
});

