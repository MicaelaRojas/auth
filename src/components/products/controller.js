/**
 * Routes for products
 */

export const getProducts = (req, res) => {
  res.status(200).json({
    ok: true,
    body: "Test Docker 123456789 - Micaela Rojas",
  });
};
