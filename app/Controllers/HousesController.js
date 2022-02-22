import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../Components/HouseForm.js";
import { housesService } from "../Services/HousesService.js";
import { Pop } from "../Utils/Pop.js";

function _draw() {
  let template = ''
  ProxyState.houses.forEach(h => template += h.Template)
  document.getElementById('listings').innerHTML = template

}

export class HousesController {
  constructor() {
    ProxyState.on('houses', _draw)
    console.log('house controller loaded');
  }

  async viewHouses() {
    try {
      await housesService.getAllHouses()
      document.getElementById('modal-body-slot').innerHTML = getHouseForm()
      document.getElementById('create-button').classList.remove('visually-hidden')

    } catch (error) {
      console.log(error.message, 'error')
      Pop.toast(error.message, 'error')
    }
  }

  async handleSubmit(id) {
    try {
      window.event.preventDefault()
      let form = window.event.target
      console.log('handlesubmit - HousesController');
      let rawHouseData = {
        bedrooms: form.bedrooms.value,
        bathrooms: form.bathrooms.value,
        year: form.year.value,
        price: form.price.value,
        description: form.description.value,
        levels: form.levels.value,
        imgUrl: form.imgUrl.value
      }
      if (!id) {
        housesService.createHouse(rawHouseData)
      } else {
        housesService.editHouse(rawHouseData, id)
      }
      let modal = document.getElementById('new-listing')
      form.reset()
      bootstrap.Modal.getOrCreateInstance(modal).hide()
      Pop.toast('Complete')
    } catch (error) {
      console.error(error);
      Pop.toast(error.message, 'error')
    }
  }
  async deleteHouse(houseId) {
    console.log('delete house initiatied - HousesController');
    try {
      if (await Pop.confirm()) {
        await housesService.deleteHouse(houseId)
      }
    } catch (error) {
      console.log(error);
      Pop.error(error)
      console.log('delete house end - HousesController')
    }
  }

  editHouse(houseId) {
    const house = ProxyState.houses.find(h => h.id == houseId)
    document.getElementById('modal-body-slot').innerHTML = getHouseForm(house)
    let modal = document.getElementById('new-listing')
    bootstrap.Modal.getOrCreateInstance(modal).toggle()
  }

}