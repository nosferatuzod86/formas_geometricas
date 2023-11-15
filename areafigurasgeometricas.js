function calcularAreaCirculo() {
    var txtr = window.document.getElementById('txtraio')
    var raio = Number(txtr.value)
    var txtd = window.document.getElementById('txtdiametro')
    var diametro = Number(txtd.value)
    var res = window.document.getElementById('res')
    
if ((raio != 0) && (diametro == 0)) {
var area= (Math.PI*(raio**2))
//res.innerHTML = `<br>`
res.innerHTML = `</p>A area do circulo é igual à ${area} metros².</p>`
} else if ((raio == 0) && (diametro != 0)) {
raio = (diametro / 2)
var area = (Math.PI*(raio**2))
res.innerHTML = `<p>A area do circulo é igual à ${area} metros².</p>`
} else {
res.innerHTML = `<p>Valores inseridos são inválidos, quando o valor do raio estiver preenchido o valor do diametro não pode estar preenchido e vice-versa.</p>`
}
}

function calcularAreaQuadrado() {
    var txtareaquad = window.document.getElementById('txtareaquadrado')
    var lado = Number(txtareaquad.value)
    var res2 = window.document.getElementById('res2')
        
    if ((lado > 0)) {
        var area= (lado**2)
    } else {
        res2.innerHTML = `<p>Valores inseridos devem ser maiores que zero.</p>`
        return
    }
    res2.innerHTML = `<p> A área do círculo é igual a ${area} metros².</p>`
}

function calcularAreaRetangulo() {
    var txtrbase = window.document.getElementById('txtretbase')
    var base = Number(txtrbase.value)
    var txtraltura = window.document.getElementById('txtretaltura')
    var altura = Number(txtraltura.value)
    var res3 = window.document.getElementById('res3')
        
if ((base > 0) && (altura > 0)) {
    var area= (base*altura)
    res3.innerHTML = `</p>A area do retangulo é igual à ${area} metros².</p>`
} else {
    res3.innerHTML = `<p>Valores inseridos são inválidos, base e altura devem ter valores maiores que zero.</p>`
}
}

function calcularAreaTriangulo() {
    var txttbase = window.document.getElementById('txttribase')
    var basetri = Number(txttbase.value)
    var txttaltura = window.document.getElementById('txttrialtura')
    var alturatri = Number(txttaltura.value)
    var res4 = window.document.getElementById('res4')
        
if ((basetri > 0) && (alturatri > 0)) {
    var areatri= ((basetri*alturatri)/2)
    res4.innerHTML = `</p>A area do triângulo é igual à ${areatri} metros².</p>`
} else {
    res4.innerHTML = `<p>Valores inseridos são inválidos, base e altura devem ter valores maiores que zero.</p>`
}
}