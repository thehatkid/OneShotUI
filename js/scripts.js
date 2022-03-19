window.onload = function() {
    // Set icons as draggable
    draggable(document.getElementById('icon-oneshot'));
    draggable(document.getElementById('icon-customize'));

    // Run clock displaying function every 0.5 seconds
    setInterval(displayTime, 500);
}

// Function for make div (icons) draggable
function draggable(el) {
    el.addEventListener('mousedown', function(e) {
        var offsetX = e.clientX - parseInt(window.getComputedStyle(this).left);
        var offsetY = e.clientY - parseInt(window.getComputedStyle(this).top);

        function mouseMoveHandler(e) {
            el.style.top = (e.clientY - offsetY) + 'px';
            el.style.left = (e.clientX - offsetX) + 'px';
        }

        function reset() {
            window.removeEventListener('mousemove', mouseMoveHandler);
            window.removeEventListener('mouseup', reset);
        }

        window.addEventListener('mousemove', mouseMoveHandler);
        window.addEventListener('mouseup', reset);
    });
}

// Function for displaying clock on Task Bar
function displayTime() {
    var clock = document.getElementById('tb-clock');
    var date = new Date();

    var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var am_pm = date.getHours() >= 12 ? "PM" : "AM";

    hours = hours < 10 ? "0" + hours : hours;
    time = hours + ":" + minutes  + " " + am_pm;

    if (time === clock.innerHTML) {
        return false;
    } else {
        clock.innerHTML = time;
        return true;
    }
}