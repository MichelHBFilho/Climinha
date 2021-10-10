$(".main__reload").click(() => {
    $(".main__reload__img").addClass("girando");
    setTimeout(() => {
        $(".main__reload__img").removeClass("girando");
    }, 1000)
})