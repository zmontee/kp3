
    var Theme_number = 1;
    var Default_theme = 1;
    var Ext = "less";
    //var Ext = "css";

    function getUrl(num) {
    return Ext + "/" + Ext + ".style" + num + ".css";
}

    function getThemeNumber() {
    Theme_number = Theme_number % 2 === 0 ? 1 : 2;
    console.log(Theme_number);
    return Theme_number;
}

    function initialize() {
    var link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", getUrl(Default_theme));
    document.head.appendChild(link);
}

    function initListener() {
    document
        .querySelector(".mynav__theme")
        .addEventListener("click", changeTheme);
}

    function changeTheme() {
    document.head
        .querySelector("link")
        .setAttribute("href", getUrl(getThemeNumber()));
}

    initialize();

    window.addEventListener("load", initListener);
