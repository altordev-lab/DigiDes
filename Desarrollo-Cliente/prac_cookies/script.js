function setCookie(name, value, days) {
    let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    if (days) {
        const date = new Date();
        date.setDate(date.getDate() + days);
        cookie += `; expires=${date.toUTCString()}`;
    }
    cookie += "; path=/; SameSite=Lax";
    document.cookie = cookie;
};

function getCookie(name) {
    const prefix = encodeURIComponent(name) + "=";
    const cookies = document.cookie.split("; ");
    for (const c of cookies) {
        if (c.startsWith(prefix)) return decodeURIComponent(c.substring(prefix.length));
    }
    return null;
};

function deleteCookie(name) {
    document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax`;
};

function modifyCookie(name, newValue) {
    setCookie(name, newValue, 3);
}

document.getElementById('crear').onclick = () => setCookie('usuario', 'Carlos', 3);
document.getElementById('leer').onclick = () => alert('Usuario: ' + getCookie('usuario'));
document.getElementById('borrar').onclick = () => deleteCookie('usuario');
document.getElementById('modificar').onclick = () => modifyCookie('usuario', 'Carlos Modificado');