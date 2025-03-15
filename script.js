// Get Element
image = document.getElementById('image')
text = document.getElementById('text')
yes_button = document.getElementById('yes_button')
no_button = document.getElementById('no_button')

// Padding
let i = 20

yes_button.addEventListener('click', () => {
    text.textContent = "Merci on se capte à la Réunion le sang <3 !!"
    image.setAttribute('src', "https://media.tenor.com/v0FhxoZtDXsAAAAi/peach-goma-peach-and-goma.gif")
    yes_button.remove()
    no_button.remove()
})

no_button.addEventListener('click', () => {
    i += 10
    switch (i) {
        case 30:
            text.textContent = "Allez stppppp"
            yes_button.style.padding = "30px"
            
            break
        case 40:
            text.textContent = "Je suis un bon wsh fais moi confiance"
            yes_button.style.padding = "40px"
           
            break
        case 50:
            text.textContent = "Allez au moins un free trial "
            yes_button.style.padding = "50px"

            break
        case 60:
            text.textContent = "EH VASY NIQUE TA GRAND MERE !!!"
            image.setAttribute('src', "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjRpMnphMTZ3ZHIxcjg4ZHdxbmM3Y3M1OW5pb2U5NnVtYW5hOGl3ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KzGCAlMiK6hQQ/giphy.gif")
            yes_button.remove()
            no_button.remove()

            break
    }
})