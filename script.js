const html = document.querySelector("html")
const checkbox = document.getElementById("darkmode-toggle")
let sobre = document.getElementById("sobre-nos")
let gov = document.getElementById("img_gov")
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
}
const darkMode = {
    bodyBg: "#303030",
    comodoarBg:"#252525",
    headerBg: "#3f3f3f",
    bodyColor: "#eaeaea"
}

const transformKey = key =>
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
    )
}
function mudar({target}){
    if (target.checked){
        gov.setAttribute("src", "./img_index/logo_sp_dark.png")
        logo_prosangue.setAttribute("src", "./img_index/logo_prosangue._footer.png")
        sobre.style.backgroundImage = "url(./img_index/Sobre-nos-img.png)"
        changeColors(darkMode)
    }else{
        gov.setAttribute("src", "./img_index/logo_sp.png")
        logo_prosangue.setAttribute("src", "./img_index/logo_prosangue_header.png")
        sobre.style.backgroundImage = "url(./img_index/img_sobre_nos.jpg)"
        changeColors(initialColors)
    }
}