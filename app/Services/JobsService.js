import { ProxyState } from "../AppState.js";
import { Job } from "../Models/Job.js";
import { api } from "./AxiosService.js";

class JobsService {

  async getAllJobs() {
    const res = await api.get('jobs')
    console.log('JobsService: getAllJobs', res.data)
    ProxyState.jobs = res.data.map(rj => new Job(rj))
  }

}

export const jobsService = new JobsService()