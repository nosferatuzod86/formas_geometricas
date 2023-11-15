var raio = 40;
var diametro = 30;

if ((raio != 0) && (diametro == 0)) {
    var area= (Math.PI*(raio**2))
    console.log(`A area do circulo é igual à ${area} metros².`)
} else if ((raio == 0) && (diametro != 0)) {
    raio = (diametro / 2)
    var area = (Math.PI*(raio**2))
    console.log(`A area do circulo é igual à ${area} metros².`)
} else{
    console.log(`Valores inseridos são inválidos, quando o valor do raio estiver preenchido o valor do diametro não pode estar preenchido e vice-versa.`)
}

