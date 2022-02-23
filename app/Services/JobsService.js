import { ProxyState } from "../AppState";
import { api } from "./AxiosService";

class JobsService {

  async getAllJobs() {
    const res = await api.get('jobs')
    console.log('JobsService: getAllJobs', res.data)
    ProxyState.jobs = res.data.map(rj => new)
  }

}