function translatePage(event) {
    if (event.target.getAttribute("class") == "ar") {
        alterLangBtn("en", "English");
        alterHTML("rtl", "ar", "text-right");
        alterContent(arabic);
    } else if (event.target.getAttribute("class") == "en") {
        alterLangBtn("ar", "العربية");
        alterHTML("ltr", "en", "text-left");
        alterContent(english);
        alterFloating("float-left", "float-right");
    }
}

function alterLangBtn(className, lang) {
    document.getElementById("lang-btn").setAttribute("class", className);
    document.getElementById("lang-btn").innerHTML = lang;
}

function alterHTML(dir, lang, textAlign) {
    document.getElementsByTagName("html")[0].setAttribute("dir", dir);
    document.getElementsByTagName("html")[0].setAttribute("lang", lang);
    document.getElementsByTagName("body")[0].setAttribute("class", textAlign);
}

function alterContent(langObj) {
    for (var param in langObj) {
        if (document.getElementById(param)) {
            if (document.getElementById(param).getAttribute("data-type") == "input") {
                document.getElementById(param).setAttribute("placeholder", langObj[param]);
            }
            document.getElementById(param).innerHTML = langObj[param];
        }
    }
}