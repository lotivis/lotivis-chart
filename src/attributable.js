export function attributable(src, attr) {
  // iterate attr keys and create access function for each
  Object.keys(attr).forEach((key) => {
    // do not override existing symbols
    if (src[key]) {
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
