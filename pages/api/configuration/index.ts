import { NextApiRequest, NextApiResponse } from 'next';

const apiPath = 'http://localhost:5000/configuration';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;
    switch (method) {
      case 'PUT': {
        const result = await fetch(`${apiPath}`, {
          method,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: req.body,
        });
        res.status(result.status).json(result.body);
        break;
      }

      case 'GET': {
        const result = await fetch(apiPath);
        res.status(result.status).json(result.body);
        break;
      }

      default:
        res
          .status(500)
          .json({ statusCode: 500, message: 'Unsupported HTTP method' });
        break;
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
