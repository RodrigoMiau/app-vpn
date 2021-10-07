$(document).ready(function () {
    $('.clock').text('00:00')
    $('.my-ip').text('000.000.000.000')

    meuIp()
})

$(document).on('click', '.start', function() {
    startClock()
})

const startClock = () => {
    let i = 0
    let count = 0
    var timer
    
    timer = setInterval(function() {
        i++
        $('#btn-clock').css('background', '#FB5877')
        $('.fa-7x').css('color', '#0194FC')
        $('#btn-clock').removeClass('start').addClass('stop')

        let pais = $('#select').val()

        if(i == 11) {
            clearInterval(timer)
            $('#btn-clock').css('background', '#0194FC')
            $('.fa-7x').css('color', '#FFFFFF')
            $('#btn-clock').removeClass('stop').addClass('start')
            return
        }

        $(document).on('click', '.stop', function() {
            clearInterval(timer)
            $('#btn-clock').css('background', '#0194FC')
            $('.fa-7x').css('color', '#FFFFFF')
            $('#btn-clock').removeClass('stop').addClass('start')
            return
        })

        if(pais == 'Brazil') {
            var val_up = 12
            var val_down = 56
        }
        else if(pais == 'United states') {
            var val_up = 124
            var val_down = 198
        }
        else {
            var val_up = 340
            var val_down = 835
        }

        var upload = val_up + Math.floor(Math.random() * 6);
        var download = val_down + Math.floor(Math.random() * 6);

        count = i < 10 ? '0'+i : i

        $('.clock').text('00:'+count)
        $('.val-upload').text(upload)
        $('.val-download').text(download)
    }, 1000)
}

const meuIp = () => {
    $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
        function(json) {
        $('.my-ip').text(json.ip);
        }
    )
}