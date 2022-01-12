import { Projects } from '../../../Database/mongo/models.js';

export const postProjectModel = async (projectName, description, startDate) => {
    let project = new Projects({ projectName, description, startDate });
    await project.save();
    return project;
};

export const getProjectsModel = async (org_id) => {
    let projects = await Projects.find();

    return projects;
};

export const putProjectsodel = async (projectName, description, startDate, _id) => {
    await Projects.findByIdAndUpdate({ _id }, { projectName, description, startDate });
};

export const deleteProjectsodel = async (_id) => {
    await Projects.findByIdAndDelete({ _id });
};
