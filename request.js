// запрос на сервер
async function fetchAsinc(){ // it`s Promise
    console.log(`starts request`)

    try{
        const response = await fetch("URL")
        const data = await response.json()
        console.log(`data: ${data}`)
    } 

    catch(err) {
        console.log(`err: ${err}`)
    } 

    finally {

    }

}