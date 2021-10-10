let hora = new Date();
if(hora.getHours() > 18 || hora.getHours() < 6) {
    $("body").addClass("noite");
    $("body").removeClass("dia");
    $(".header__titulo").addClass("noite");
    $(".header__titulo").removeClass("dia");
    $(".header__input-cidade").addClass("noite");
    $(".header__input-cidade").removeClass("dia");
    $(".header__logo").attr("src", "assets/img/lua.png");
    $(".favicon").attr("href", "assets/img/favicons/lua.ico");
} else {
    $("body").addClass("dia");
    $("body").removeClass("noite");
    $(".header__titulo").addClass("dia");
    $(".header__titulo").removeClass("noite");
    $(".header__input-cidade").addClass("dia");
    $(".header__input-cidade").removeClass("noite");
    $(".header__logo").attr("src", "assets/img/sol.svg");
    $(".favicon").attr("href", "assets/img/favicons/sol.ico");
}