import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;

    switch (method) {
      case 'PUT': {
        const { exportDisabled } = JSON.parse(req.body);
        res.status(200).json({
          exportDisabled,
        });
        break;
      }

      case 'GET': {
        res.status(200).json({
          exportDisabled: false,
        });
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
