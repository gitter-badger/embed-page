document.getElementById("external").checked=true;
[...document.getElementsByTagName('button')].forEach( b => b.onclick = ()=>ToggleCb(b) );

function ToggleCb( b )
{   let a = document.getElementsByClassName( b.getAttribute('for') );
    for( let x of a )
        x.checked = !x.checked;
}
const   $ = css => document.querySelector(css)
,       winLocation = $('.win-location')
,       docLocation = $('.doc-location')
,       docCookie   = $('.doc-cookie'  );


winLocation.value = window.location;
docLocation.value = document.location;
document.querySelector('.win-location~*[value=get]').onclick = x => winLocation.value = window.location;
document.querySelector('.doc-location~*[value=get]').onclick = x => docLocation.value = document.location;
document.querySelector('.win-location~*[value=set]').onclick = x => window.location   = winLocation.value;
document.querySelector('.doc-location~*[value=set]').onclick = x => document.location = docLocation.value;
document.querySelector('*[value="location get"]'   ).onclick = x => winLocation.value = window.location;
document.querySelector('*[value="location set"]'   ).onclick = x => location          = winLocation.value;
document.querySelector('*[value=href-get]').onclick = x => winLocation.value    = window.location.href ;
document.querySelector('*[value=href-set]').onclick = x => window.location.href = winLocation.value ;
document.querySelector('*[value="other properties"]').onclick = x => winLocation.value = JSON.stringify(
    {   protocol    : window.location.protocol
    ,   host        : window.location.host
    ,   hostname    : window.location.hostname
    ,   port        : window.location.port
    ,   pathname    : window.location.pathname
    ,   search      : window.location.search
    ,   hash        : window.location.hash
    ,   username    : window.location.username
    ,   password    : window.location.password
    ,   origin      : window.location.origin
    });

document.querySelector('*[value="assign()"]' ).onclick = x => window.location.assign ( winLocation.value );
document.querySelector('*[value="replace()"]').onclick = x => window.location.replace( winLocation.value );
document.querySelector('*[value="reload()"]' ).onclick = x => window.location.reload() ;
document.querySelector('*[value=location-win-doc]').onclick = x=> winLocation.value =
                                        location === window.location && location === document.location ;
document.querySelector('*[value="this===window"]' ).onclick = x=> winLocation.value = window === this;

document.querySelector('.doc-cookie~*[value=get]').onclick = x => docCookie.value = document.cookie.split(';').join(';\n');
document.querySelector('.doc-cookie~*[value=set]').onclick = x => document.cookie = docCookie.value;

const pgc = 'lastpage='+window.location.pathname.split('/').pop();
docCookie.value = pgc;
document.cookie = pgc;
