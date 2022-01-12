import {
    postProjectModel,
    getProjectsModel,
    putProjectsodel,
    deleteProjectsodel
} from '../../Model/mongo/projects/projects.js';

export const postProject = async (req, res) => {
    let projectName = req.body.projectName;
    let description = req.body.description;
    let startDate = new Date(req.body.startDate);

    await postProjectModel(projectName, description, startDate);

    res.status(200).send('Post Successful');
};

export const getProjects = async (req, res) => {
    let result = await getProjectsModel();

    res.status(200).send(result);
};

export const putProject = async (req, res) => {
    let projectName = req.body.projectName;
    let description = req.body.description;
    let startDate = new Date(req.body.startDate);
    let project_id = req.body.project_id;

    await putProjectsodel(projectName, description, startDate, project_id);

    res.status(200).send('Put Successful');
};

export const deleteProject = async (req, res) => {
    let project_id = req.query.project_id;

    await deleteProjectsodel(project_id);

    res.status(200).send('Delete Successful');
};