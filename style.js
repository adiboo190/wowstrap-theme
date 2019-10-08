$(function() {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    $('#download-nstbl').click(function() {

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success mx-2',
                cancelButton: 'btn btn-danger mx-2'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Kamu Yakin?',
            html: "<p>Apakah kamu mau mengunduh versi yang gak stabil ini?</p><p class=\"alert-danger alert m-0\">Versi yang gak stabil akan merusak pengaturan situs loh!</p>",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Biarin, suka-suka saya?!?!',
            cancelButtonText: 'Gak Jadi Deh...',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                Swal.fire({
                    title: 'Sukses Mengunduh',
                    html: '<p>Anda akan mengunduhnya dalam 5 detik lagi. Jika tidak terjadi apa-apa, klik <a href="">Tautan Ini</a>.</p><p class=\"alert-info alert m-0\">Versi yang gak stabil akan merusak pengaturan situs loh!</p>',
                    type: 'warning'
                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Oke',
                    'Untuk mengunduhnya, nunggu versi stabil dulu ya? Jangan keburu nyoba yang gak stabil...',
                    'success'
                )
            }
        })

    });
});