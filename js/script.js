function detect_mobile() {
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
    ) {
        $("#css").attr("href", "css/mobile.css");
        $(".top1").attr("class", "navbar navbar-light fixed-top bg-white");
    } else {
        $("#css").attr("href", "css/style.css");
        $(".top0").attr("class", "navbar navbar-light bg-white");
    }
}

const go = (elem) => {
    window.scroll({
        top: document
            .querySelector(elem)
            .offsetTop,
        left: 0,
        behavior: 'smooth'
    });
}

function marcas(pg) {
    var marcas = "";
    var start;
    var final;
    if (pg == 0) {
        start = 1;
        final = 54;
    } else {
        start = 55;
        final = 73;
    }
    for (i = start; i <= final; i++) {
        marcas += "<img src='img/clientes/0" + i + ".svg' class='marcas'>";
    }
    document.getElementById("marcas").innerHTML = marcas;
}

$(document).ready(function () {

    detect_mobile();

    marcas(0);

    $('.collapse>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    $("#next0").click(function () {
        $(".quem").hide()
        $(".missao").show()
    });

    $("#back0").click(function () {
        $(".missao").hide()
        $(".quem").show()
    });

    $("#next1").click(function () {
        $(".missao").hide()
        $(".visao").show()
    });

    $("#back1").click(function () {
        $(".visao").hide()
        $(".missao").show()
    });

    $("#next2").click(function () {
        $(".visao").hide()
        $(".valores").show()
    });

    $("#back2").click(function () {
        $(".valores").hide()
        $(".visao").show()
    });

    $("#next3").click(function () {
        $(".whatsapp").hide()
        $(".sua_marca").show()
    });

    $("#back3").click(function () {
        $(".sua_marca").hide()
        $(".whatsapp").show()
    });

    $("#next4").click(function () {
        $(".sua_marca").hide()
        $(".instagram").show()
    });

    $("#back4").click(function () {
        $(".instagram").hide()
        $(".sua_marca").show()
    });

    $("#next5").click(function () {
        $(".instagram").hide()
        $(".appmoda").show()
    });

    $("#back5").click(function () {
        $(".appmoda").hide()
        $(".instagram").show()
    });

    $("#next6").click(function () {
        marcas(1);
        $(".btn_left1").attr("src", "img/arrow3.svg");
        $(".btn_left1").attr("class", "btn_left1 ativo");
        $(".btn_right0").attr("src", "img/arrow1.svg");
        $(".btn_right0").attr("class", "btn_right0 rotate");
    });

    $("#back6").click(function () {
        marcas(0);
        $(".btn_left1").attr("src", "img/arrow1.svg");
        $(".btn_left1").attr("class", "btn_left1");
        $(".btn_right0").attr("src", "img/arrow2.svg");
        $(".btn_right0").attr("class", "btn_right0 ativo");
    });

    $('#telefone').mask('(00) 00000-000#');

    $('body').on('focus', '.tel', function () {
        var maskBehavior = function (val) {
                return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
            },
            options = {
                onKeyPress: function (val, e, field, options) {
                    field.mask(maskBehavior.apply({}, arguments), options);

                    if (field[0].value.length >= 14) {
                        var val = field[0].value.replace(/\D/g, '');
                        if (/\d\d(\d)\1{7,8}/.test(val)) {
                            field[0].value = '';
                            alert('Telefone Invalido');
                        }
                    }
                }
            };
        $(this).mask(maskBehavior, options);
    });

    function myFunction() {
        var d = new Date();
        var n = d.getFullYear();
        document.getElementById("year").innerHTML = n;
    };
    myFunction();
});