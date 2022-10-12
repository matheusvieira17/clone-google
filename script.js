let input = document.querySelector(".searchInput")
let searchBtn = document.querySelector(".searchBtn")

const search = () => {
    if(input.value === "") {
        return
    } else {
        let url = `https://www.google.com/search?q=${input.value}`
        window.open(url, "_self") 
        input.value = ""
    }
}
searchBtn.addEventListener("click", search)