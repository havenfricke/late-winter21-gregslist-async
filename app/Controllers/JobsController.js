import { ProxyState } from "../AppState.js"
import { getJobForm } from "../Components/JobForm.js"
import { jobsService } from "../Services/JobsService.js"
import { Pop } from "../Utils/Pop.js"

function _draw() {
  console.log('does it work start');
  let template = ''
  ProxyState.jobs.forEach(j => template += j.Template)
  document.getElementById('listings').innerHTML = template
  console.log('does it work end');
}


export class JobsController {
  constructor() {
    ProxyState.on('jobs', _draw)
    console.log('jobs controller loaded');
  }

  async viewJobs() {
    try {
      await jobsService.getAllJobs()
      document.getElementById('modal-body-slot').innerHTML = getJobForm()
      document.getElementById('create-button').classList.remove('visually-hidden')

    } catch (error) {
      console.log(error.message, 'error')
      Pop.toast(error.message, 'error')

    }
  }
}