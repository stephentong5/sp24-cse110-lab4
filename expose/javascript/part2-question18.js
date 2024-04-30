function timeOfDay()
{
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(timeOfDay, 1000);
