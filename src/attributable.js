export function attributable(src, attr) {
  // Iterate attr keys and create access function for each
  Object.keys(attr).forEach((key) => {
    // do not override existing functions
    if (src[key] && typeof src[key] === "function") {
      return;
    }

    src[key] = function (_) {
      return arguments.length ? ((attr[key] = _), src) : attr[key];
    };
  });

  attr.get = function (name, fb) {
    return attr.hasOwnProperty(name) ? attr[name] || fb : fb;
  };

  return src;
}
