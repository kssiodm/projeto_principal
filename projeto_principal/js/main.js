$(document).ready(function(){

    // validação dos modais

    $("#modal_b_1").click(function() {
        var nome1 = $("#nome_modal1").val();
        var num1 = $("#tel_modal1").val();
        var endereco1 =$('#endereco1').val()

        if (nome1 === "" || num1 == "" || endereco1 == "") {
        alert("Por favor, preencha todos os campos!");
        return false;
        }

        alert("Formulário enviado com sucesso!");
        $("#formulario").submit();
    });

    $("#modal_b_2").click(function() {
        var nome2 = $("#nome_modal2").val();
        var num2 = $("#tel_modal2").val();
        var endereco2  =$('#endereco2').val()

        if (nome2 === ""  || num2 == "" || endereco2 == "") {
        alert("Por favor, preencha todos os campos!");
        return false;
        }

        alert("Formulário enviado com sucesso!");
        $("#formulario").submit();
    });

    $("#modal_b_3").click(function() {
        var nome3 = $("#nome_modal3").val();
        var num3 = $("#tel_modal2").val();
        var endereco3 = $('#endereco3').val()

        if (nome3 === ""  || num3 == "" || endereco3 == "") {
        alert("Por favor, preencha todos os campos!");
        return false;
        }

        alert("Formulário enviado com sucesso!");
        $("#formulario").submit();
    });

    // validação da matricula e do contato

    $("#submit_button1").click(function() {
        var nome1 = $("#nome1").val();
        var email1 = $("#email1").val();
        var num1 =$('#telefone1').val()

        if (nome1 === "" || email1 === "" || num1 == "") {
        alert("Por favor, preencha todos os campos!");
        return false;
        }

        alert("Formulário enviado com sucesso!");
        $("#formulario").submit();
    });

    $("#submit_button2").click(function() {
        var nome2 = $("#nome2").val();
        var email2 = $("#email2").val();

        if (nome2 === "" || email2 === "") {
        alert("Por favor, preencha todos os campos!");
        return false;
        }

        alert("Formulário enviado com sucesso!");
        $("#formulario").submit();
    })

    // validando nomes dos modais

    $('#nome_modal1').bind('keyp blur', function(){
        let i = $(this);
        i.val(i.val().replace(/[^a-z A-Z]/g, ''));
    })

    $('#nome_modal2').bind('keyp blur', function(){
        let i = $(this);
        i.val(i.val().replace(/[^a-z A-Z]/g, ''));
    })

    $('#nome_modal3').bind('keyp blur', function(){
        let i = $(this);
        i.val(i.val().replace(/[^a-z A-Z]/g, ''));
    })

    // validando nomes da matricula e do contato

    $('#nome1').bind('keyp blur', function(){
        let i = $(this);
        i.val(i.val().replace(/[^a-z A-Z]/g, ''));
    })

    // mask dos modais

    $('#nome2').bind('keyp blur', function(){
        let i = $(this);
        i.val(i.val().replace(/[^a-z A-Z]/g, ''));
    })

    $('#tel_modal1').mask('(00) 00000-0000', {
        placeholder: '(43)87496-8264'
    })

    $('#tel_modal2').mask('(00) 00000-0000', {
        placeholder: '(43)87496-8264'
    })

    $('#tel_modal3').mask('(00) 00000-0000', {
        placeholder: '(43)87496-8264'
    })

    // mask da matricula e do  conntato

    $('#telefone1').mask('(00) 00000-0000', {
        placeholder: '(43)87496-8264'
    })

    $('#telefone2').mask('(00) 00000-0000', {
        placeholder: '(43)87496-8264'
    })
});