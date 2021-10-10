let horasIniciais = new Date();
$(".main__horas").text(`${horasIniciais.getHours()}:${horasIniciais.getMinutes()}`)
setInterval(() => {
    horasIniciais = new Date();
    $(".main__horas").text(`${horasIniciais.getHours()}:${horasIniciais.getMinutes()}`)
}, 30000)
