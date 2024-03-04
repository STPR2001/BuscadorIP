console.log("codigo agregado correctamente")

const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3d93b626abmsh62bd45b6513f879p1651fajsn93541b94aaf0',
		'X-RapidAPI-Host': 'ip-geolocation-find-ip-location-and-ip-info.p.rapidapi.com'
	}
}

const fetchIpInfo = ip => {
    return fetch(`https://ip-geolocation-find-ip-location-and-ip-info.p.rapidapi.com/backend/ipinfo/?ip=${ip}`, OPTIONS)
    .then(res => res.json())
    .catch(err => console.error(err))
}

const $form = document.querySelector("#form")
const $input = document.querySelector("#input")
const $submit = document.querySelector("#submit")
const $results = document.querySelector("#results")
//Datos del JSON
const $city = document.querySelector("#city")
const $ip = document.querySelector("#ip")
const $region = document.querySelector("#region")
const $pais = document.querySelector("#pais")
const $accederJSON = document.querySelector("#accederJSON")


$form.addEventListener("submit", async (event) => {
  event.preventDefault()
  const value = $input.value // Accede al valor del input
  console.log("Valor de la IP ingresada:", value) // Verificar el valor capturado
  if (!value) return

  $submit.setAttribute("disabled", "")
  $submit.setAttribute("aria-busy", "true")

  const ipInfo = await fetchIpInfo(value)
  console.log("Respuesta de la API:", ipInfo) // Verificar la respuesta de la API

  if (ipInfo) {
    //$results.innerHTML = JSON.stringify(ipInfo, null, 2)
    $accederJSON.innerHTML = "Datos relevantes:"
    $ip.innerHTML = "IP: " + ipInfo.ip;
    $city.innerHTML = "Ciudad: " + ipInfo.city;
    $region.innerHTML = "Region: " + ipInfo.region
    $pais.innerHTML = "Pais: " + ipInfo.country_name

  }


  $submit.removeAttribute("disabled")
  $submit.removeAttribute("aria-busy")
})
