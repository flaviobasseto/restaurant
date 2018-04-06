function mask_cpf(field) {
    $(field).mask('000.000.000-00', {
        reverse: true
    });
}

function mask_fone(field) {
    $(field).mask('00 00000-0000', {
        reverse: true
    });
}

function mask_rg(field) {
    $(field).mask('00.000.000-0', {
        reverse: true
    });
}

function mask_data(field) {
    $(field).mask('00/00/0000', {
        reverse: true
    });
}