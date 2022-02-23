import { ProxyState } from "../AppState"

function _draw() {
  let template = ''
  ProxyState.jobs.forEach(j => template += j.Template)
  document.getElementById('listings').innerHTML = template
}


export class JobsController {
  constructor() {
    ProxyState.on('jobs', _draw)
    console.log('jobs controller loaded');
  }
}