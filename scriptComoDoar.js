const html = document.querySelector("html")
const checkbox = document.getElementById("darkmode-toggle")
let logo_prosangue = document.getElementById("logo_prosangue")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)

const initialColors = {
    bodyBg: getStyle(html, "--body-bg"),
    comodoarBg: getStyle(html, "--comodoar-bg"),
    headerBg: getStyle(html, "--header-bg"),
    bodyColor: getStyle(html, "--body-color"),
    subnavBg: getStyle(html, "--subnav-bg"),
}
const darkMode = {
    bodyBg: "#303030",
    comodoarBg:"#252525",
    headerBg: "#3f3f3f",
    bodyColor: "#eaeaea",
    subnavBg: "#4f4f4f",
}

const transformKey = key =>
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
    )
}
console.log(changeColors)
function mudar({target}){
    if (target.checked){
        logo_prosangue.setAttribute("src", "./img_index/logo_prosangue._footer.png")
        document.querySelector("#imagem1").style.filter="invert(100%)"
        document.querySelector("#imagem2").style.filter="invert(100%)"
        document.querySelector("#imagem3").style.filter="invert(100%)"
        document.querySelector("#imagem4").style.filter="invert(100%)"
        document.querySelector("#imagem5").style.filter="invert(100%)"
        document.querySelector("#imagem6").style.filter="invert(100%)"
        document.querySelector("#imagem7").style.filter="invert(100%)"
        document.querySelector("#imagem8").style.filter="invert(100%)"
        document.querySelector("#imagem9").style.filter="invert(100%)"
        document.querySelector("#imagem10").style.filter="invert(100%)"
        document.querySelector("#imagem11").style.filter="invert(100%)"
        document.querySelector("#imagem12").style.filter="invert(100%)"
        document.querySelector("#imagem13").style.filter="invert(100%)"
        document.querySelector("#imagem14").style.filter="invert(100%)"
        changeColors(darkMode)
    }else{
        logo_prosangue.setAttribute("src", "./img_index/logo_prosangue_header.png")
        document.querySelector("#imagem1").style.filter="invert(0)"
        document.querySelector("#imagem2").style.filter="invert(0)"
        document.querySelector("#imagem3").style.filter="invert(0)"
        document.querySelector("#imagem4").style.filter="invert(0)"
        document.querySelector("#imagem5").style.filter="invert(0)"
        document.querySelector("#imagem6").style.filter="invert(0)"
        document.querySelector("#imagem7").style.filter="invert(0)"
        document.querySelector("#imagem8").style.filter="invert(0)"
        document.querySelector("#imagem9").style.filter="invert(0)"
        document.querySelector("#imagem10").style.filter="invert(0)"
        document.querySelector("#imagem11").style.filter="invert(0)"
        document.querySelector("#imagem12").style.filter="invert(0)"
        document.querySelector("#imagem13").style.filter="invert(0)"
        document.querySelector("#imagem14").style.filter="invert(0)"
        changeColors(initialColors)
    }
}
