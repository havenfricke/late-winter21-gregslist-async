export class Job {
  constructor(data) {
    this.id = data.id
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.description = data.desctription
    this.hours = data.hours
    this.rate = data.rate
  }

  get Template() {
    return `
      <div class="col-md-4">
        <div class="bg-white rounded shadow">
          <div class="p-3 clip-text">
            <p>${this.jobTitle} | ${this.description} | ${this.hours} | ${this.company}</p>
            <p>${this.description}</p>
            <p>$${this.rate}</p>
            <div class="text-end">
            <button class="btn btn-outline-warning" onclick="app.housesController.editJob('${this.id}')"> Edit </button>
            <button class="btn btn-outline-danger" onclick="app.jobsController.deleteJob('${this.id}')"> delete </button>
            </div>
          </div>
        </div>
      </div>
    `
  }

}