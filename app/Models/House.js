export class House {
  constructor(data) {
    this.id = data.id || ''
    this.bedrooms = data.bedrooms || ''
    this.bathrooms = data.bathrooms || ''
    this.year = data.year || 2000
    this.price = data.price || 0
    this.description = data.description || ''
    this.levels = data.levels || ''
    this.imgUrl = data.imgUrl || ''
  }

  get Template() {
    return `
      <div class="col-md-4">
        <div class="bg-white rounded shadow">
          <img class="object-fit-img rounded-top" src="${this.imgUrl}" alt="house image">
          <div class="p-3 clip-text">
            <p>${this.year} | ${this.bedrooms} | ${this.bathrooms}</p>
            <p></p>
            <p>${this.description}</p>
            <p>$${this.price}</p>
            <div class="d-flex align-items-center">
              <p class="m-0">Levels:</p>
              <div class="ms-2">${this.levels}</div>
            </div>
            <div class="text-end">
            <button class="btn btn-outline-warning" onclick="app.housesController.editHouse('${this.id}')"> Edit </button>
            <button class="btn btn-outline-danger" onclick="app.housesController.deleteHouse('${this.id}')"> delete </button>
            </div>
          </div>
        </div>
      </div>
    `
  }
}