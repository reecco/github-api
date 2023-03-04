import axios from 'axios';

import { userBaseURL, commitBaseURL } from "../utils/index.js";

export async function getUser(user) {
  const url = userBaseURL(user);

  return await axios.get(url).then(res => res).catch((error) => error);
}

export async function getCommit(user) {
  const url = commitBaseURL(user);

  return await axios.get(url).then(res => res).catch(error => error);
}