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
        changeColors(darkMode)
    }else{
        logo_prosangue.setAttribute("src", "./img_index/logo_prosangue_header.png")
        changeColors(initialColors)
    }
}
