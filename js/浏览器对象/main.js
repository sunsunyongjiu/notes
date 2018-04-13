(function(){
    // window
    console.log(`window inner size${window.innerWidth}x ${window.innerHeight}`)
    console.log(`window outer size${window.outerWidth}x ${window.outerHeight}`)
    // navigator
    console.log(`appName ${navigator.appName}`)
    console.log(`appVersion ${navigator.appVersion}`)
    console.log(document.cookie);
    window.onload=function(){
        var test=document.querySelector('#test');
        var ps=test.querySelectorAll('p')
        var last=test.lastElementChild;
        var first=test.firstElementChild;
        test.appendChild(first)
        test.insertBefore(first,last);
        var fourth=ps[3];
        var parent=fourth.parentElement;
        parent.removeChild(fourth)
    }
    var a=111
})()