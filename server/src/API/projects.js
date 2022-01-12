import express from 'express';
import { postProject, getProjects, deleteProject, putProject } from '../Services/projects/projects.js';
import { asyncHandler } from '../Middleware/asyncErrorHandler.js';
import { requireAuth } from '../Middleware/auth.js';
const router = express.Router();

/* Get Todos */
router.get('/get/projects', asyncHandler(getProjects));

/* Post Projects */
router.post('/post/project', asyncHandler(postProject));

/* Edit Todo */
router.put('/put/project', asyncHandler(putProject));

/* Delete Todo */
router.delete('/delete/project', asyncHandler(deleteProject));

export default router;
