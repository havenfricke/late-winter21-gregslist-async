import { Job } from "../Models/Job.js";

export function getJobForm(job = {}) {
  const jobData = new Job(job)
  return `
  <form class="row  p-2" onsubmit="app.jobsController.handleSubmit('${jobData.id}')">
                  <h3 class="col-12">Post a job</h3>
                  <div class="mb-3 col-5">
                    <label for="" class="form-label">Company</label>
                    <input required type="text" class="form-control" name="company" id="company" aria-describedby="helpId"
                      placeholder="" min="1" max="20" value="${jobData.company}">
                  </div>
                  <div class="mb-3 col-5">
                    <label for="" class="form-label">Job Title</label>
                    <input required type="text" class="form-control" name="jobtitle" id="jobtitle" aria-describedby="helpId"
                      placeholder="" maxlength="25" value="${jobData.jobTitle}">
                  </div>
                  <div class="mb-3 col-2">
                    <label for="" class="form-label">Description</label>
                    <input required type="text" class="form-control" name="description" id="description" aria-describedby="helpId"
                      placeholder=""  maxlength = "300" value="${jobData.description}">
                  </div>
                  <div class="mb-3 col-12">
                    <label for="" class="form-label">Hours</label>
                    <input min="10" max="40" required type="number" class="form-control" name="hours" id="hours"
                      aria-describedby="helpId" placeholder="" value="${jobData.hours}">
                  </div>
                  <div class="mb-3 col-6">
                    <label for="" class="form-label">Rate</label>
                    <input required type="number" class="form-control" name="price" id="price" aria-describedby="helpId"
                      placeholder="" value="${jobData.rate}">
                  </div>
                 
                    <button class="col-4 offset-8 btn btn-success"> ${jobData.id ? 'Edit' : 'Create'}</button>
                </form>`
}