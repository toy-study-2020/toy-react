const docSelector = ({
  el: el,
  all: isAll
}) => {
  if (isAll) return document.querySelectorAll(el);
  else return document.querySelector(el);
};

const createEl = ({
  tag: tag
}) => {
  return document.createElement(tag);
};

const insertEl = ({
  target: target,
  position: pos = 'beforebegin',
  element: el
}) => {
  target.insertAdjacentElement(pos, el);
}

const toggleClassMethod = ({
  el: el,
  methodType: methodType,
  toggleClass: toggleClass
}) => {
  el.classList[methodType](toggleClass);
};

const toggleClassAll = ({
  el: el,
  methodType: type,
  toggleClass: toggleClass
}) => {
  const elements = docSelector({el, all: true});
  elements.forEach(element => {
    element.classList[type](toggleClass);
  })
};
}

export {
  docSelector,
  createEl,
  insertEl,
  toggleClassMethod,
  toggleClassAll
}