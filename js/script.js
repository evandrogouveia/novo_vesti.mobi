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
    var prefix;
    if (pg == 0) {
        $("#back6").attr("src", "img/arrow1.svg");
        $("#back6").attr("class", "btn_left1");
        $("#back6").removeAttr("onclick");
        $("#next6").attr("src", "img/arrow2.svg");
        $("#next6").attr("class", "btn_right0 ativo");
        $("#next6").attr("onclick", "marcas(1)");
        start = 0;
        final = 55;
    } else if (pg == 1) {
        $("#back6").attr("src", "img/arrow3.svg");
        $("#back6").attr("class", "btn_left1 ativo");
        $("#back6").attr("onclick", "marcas(0)");
        $("#next6").attr("src", "img/arrow2.svg");
        $("#next6").attr("class", "btn_right0 ativo");
        $("#next6").attr("onclick", "marcas(2)");
        start = 56;
        final = 111;
    } else {
        $("#back6").attr("onclick", "marcas(1)");
        $("#next6").attr("src", "img/arrow1.svg");
        $("#next6").attr("class", "btn_right0 rotate");
        $("#next6").removeAttr("onclick");
        start = 111;
        final = 127;
    }
    for (i = start; i <= final; i++) {
        prefix = i < 10 ? '00' : i < 100 ? "0" : "";
        console.log(`prefix ${prefix}`);
        marcas += "<img src='img/clientes/" + prefix + i + ".svg' class='marcas'>";
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