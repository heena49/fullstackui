 let c = 0;
 const para = document.getElementById('count')
 const counter = document.getElementById("counter")

 function openbox ()
{
    counter.style.display="flex"
}
function incr ()
{
     c++;
     para.textContent = c
}
function decr ()
{
    c--;
    para.textContent=c
}