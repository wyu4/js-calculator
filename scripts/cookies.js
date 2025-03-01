var enabled = navigator.cookieEnabled

if (enabled) {
    console.log("Cookies are enabled.")
} else {
    console.warn("Cookies are not enabled. Saving will be disabled.")
}

function nextExpiryDate() {
    const now = new Date();
    now.setFullYear(now.getFullYear() + 10); // Cookie will expire in ten years

    return now.toUTCString();
}

function save(name, value) {
    if (!enabled) {
        return;
    }

    try {
        document.cookie = `${name}=${value}; expires=${nextExpiryDate()}; path=/`;
    }
    catch(error) {
        console.error("Could not save cookies: " + error);
    }
}

function load(name) {
    if (!enabled) {
        return '';
    }

    try {
        const cookies = decodeURIComponent(document.cookie).split(';');
        let result = '';

        cookies.forEach(element => {
            if (element.indexOf(name) == 0) {
                result = element.substring(name.length + 1);
            }
        });

        return result;
    }
    catch(error) {
        console.error('Could not load cookies: ' + error);
        return '';
    }
    
}