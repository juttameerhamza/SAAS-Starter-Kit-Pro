import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: String,
  email: String,
  firebase_user_id: String
});

const orgSchema = new Schema({
  org_name: String,
  primary_email: String
});

const todosSchema = new Schema({
  title: String,
  description: String,
  author: String,
  org_id: { type: Schema.Types.ObjectId, ref: 'Organizations' }
});

const projectsSchema = new Schema({
  projectName: String,
  description: String,
  startDate: Date,
});

export const Users = mongoose.model('Users', usersSchema);
export const Todos = mongoose.model('Todos', todosSchema);
export const Organizations = mongoose.model('Organizations', orgSchema);
export const Projects = mongoose.model('Projects', projectsSchema);
