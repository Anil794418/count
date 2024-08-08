let c2= document.getElementById('count')
let c = 0;
function incr ()
{
    c++;
    c2.textContent = c
    alert("haiiiiiiiiiiiii")
}
function decr ()
{
    c--;
     c2.textContent = c
}
function reset ()
{
    c = 0;
     c2.textContent = c
}