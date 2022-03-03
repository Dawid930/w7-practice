


//itt a send button egy submit esemeny

const formHTML = () => {
    return`
    <form>
        <input placeholder="Name" id="input1" name="input1"/><br>
        <input placeholder="Name" id="input2" name="input2"/><br>
        <input placeholder="Name" id="input3" name="input3"/><br>
        <select name="animals" id="animals">
            <option value="cats555">cats</option>
            <option value="dogs555">dogs</option>
            <option value="both555">both</option>
        </select>
        <p id="nameResult"></p><br>
        <button>Send</button>
    </form>
    `    
};

// input elonye minden platfronnmon normlisan fut, change nem fut le mindenhol 

const loadEvent = async _ => { //a fetch miatt kell az asnyc
    const rootElement = document.getElementById("root")
    rootElement.insertAdjacentHTML("beforeend", formHTML())

    const form = rootElement.querySelector("form")

    const inputList = document.querySelectorAll("input") //arrayt csinal (node list, ezert plusz lepcso kell a map-nel, ==> Array.from,,, ez atalakitja a node listet array-e)

    /*          // igy kell for ciklussal

    for (const input of inputList) {
        input.addEventListener("input", function(event){
            console.log(event.target.value);
        })   //inputra tessuk az esemenyfigyelot,  e=event
    } */


    // igy kell map-el   map-nek array kell, map arrayt ad vizza a callback functionbol ez ayert jo mert nem kell nekukn arrayt csinalni mert megcsinalja helyettunk, fenntarthato szintaktikat ad, kenyelmesebb,atekinthetobb lesz a kesobbiekben 

    console.log(typeof inputList);
    console.log(Array.isArray(inputList));
    Array.from(inputList).map(function(input){
        input.addEventListener("input", function(event){
            console.log(event.target.value);
        })
    });
/* 
    rootElement.querySelector("form").addEventListener("submit", function(event){
        event.preventDefault()
        console.log(event.target);
    }) */

    form.querySelector("select").addEventListener("input", function(event){
        console.log(event.target.value);
    })

    form.addEventListener("submit", function(event){
        event.preventDefault()
        console.log(event.target);
    })


    /* const nameInput = document.getElementById("namePlace")
    const log = document.getElementById("nameResult")

    nameInput.addEventListener("input", function(e) {
        log.textContent = e.target.value
    }) */


    const nasaApiKey = "ep5OHxaacseBEOPZH1erX49uP5PxEqkdxgXKHDGT"
    const requestedDate = "2022-02-22"
    const apod = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}&date=${requestedDate}`)
    //console.log(apod);

    const apodJson = await apod.json()
    //console.log(apodJson.explanation);

    // ez ugyanaz mint folotte csak mas modszerrel
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}&date=${requestedDate}`).then(
        function(apodResponse){
            console.log(apodResponse);
            apodResponse.json().then(
                function(apodResponseJson){
                    console.log(apodResponseJson.explanation);
                }
            )
        }



    )

}

window.addEventListener("load", loadEvent)

