function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = document.getElementById("years").value;

    document.getElementById('result').innerHTML = (p*r*t)/100;
}
        