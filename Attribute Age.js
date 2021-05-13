function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero= "homem"
            if (idade >= 0 && idade <= 3){
                //Bebê
                img.setAttribute("src", "Bebê-masc.png")
            }else if(idade <= 13 ){
                //Criança
                img.setAttribute("src", "Criança-masc.png")
            }else if(idade <= 21){
                //Adolescente 
                img.setAttribute("src", "Jovem-masc.png")
            }else if (idade > 22 && idade <= 50){
                //Adulto
                img.setAttribute("src", "Adulto-masc.png")
            } else if (idade > 50){
                //Idoso
                img.setAttribute("src", "Idoso-masc.png")
            }
        } else if (fsex[1].checked) {
            gênero= "mulher"
            if (idade >= 0 && idade <= 3){
                //Bebê
                img.setAttribute("src", "Bebê-fem.png")
            }else if(idade <= 13 ){
                //Criança
                img.setAttribute("src", "Criança-fem.png")
            }else if(idade <= 21){
                //Adolescente 
                img.setAttribute("src", "Jovem-fem.png")
            }else if (idade >= 22 && idade <= 50){
                //Adulto
                img.setAttribute("src", "Adulto-fem.png")
            } else if (idade > 50) {
                //Idoso
                img.setAttribute("src", "Idoso-fem.png")
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML= `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
