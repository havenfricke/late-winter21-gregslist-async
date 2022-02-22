import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"
import { Pop } from "../Utils/Pop.js"
import { api } from "./AxiosService.js"

class HousesService {

  async editHouse(updatedHouse, id) {
    const res = await api.post('houses' + id, updatedHouse)
    console.log('HousesService - editHouse', res.data);
    const houseIndex = ProxyState.houses.findIndex(h => h.id == id)
    ProxyState.houses.splice(houseIndex, 1, new House(res.data))
    ProxyState.houses = ProxyState.houses
  }

  async createHouse(newHouse) {
    const res = await api.post('houses', newHouse)
    console.log('HousesService - createHouse', res.data);
    let realHouse = new House(res.data)
    ProxyState.houses = [...ProxyState.houses, realHouse]

  }
  async getAllHouses() {
    // @ts-ignore
    const res = await api.get('houses')
    console.log('[HousesService]: getAllHouses', res.data)
    ProxyState.houses = res.data.map(rh => new House(rh))
  }

  async deleteHouse(houseId) {
    console.log('house delete started - HousesService');
    const res = await api.delete(`houses/${houseId}`)
    console.log('house delete finished - HousesService', res.data);

    ProxyState.houses = ProxyState.houses.filter(h => h.id != houseId)

  }
}

export const housesService = new HousesService()