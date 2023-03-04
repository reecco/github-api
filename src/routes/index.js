import { getUser, getCommit } from "../service/index.js";

export default (app) => {
  app.get('/user/:user', async (req, res) => {
    const { user } = req.params;

    const result = await getUser(user).then(res => res).catch(error => error);

    const { status, data } = result;

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');

    res.status(status).json({ data, status });
  });

  app.get('/user/:user/commit', async (req, res) => {
    const { user } = req.params;

    const result = await getCommit(user).then(res => res).catch(error => error);

    const { status, data } = result;

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');

    res.status(status).json({ data, status });
  });
}