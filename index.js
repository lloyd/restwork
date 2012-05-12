module.exports = function(opts) {
  opts = opts || {};
  opts.mountPoint = opts.mountPoint || "/";
  return function(req, resp, next) {
    if (req.path.indexOf(opts.mountPoint) !== 0) {
      return next();
    }
    resp.send(404);
  };
};
