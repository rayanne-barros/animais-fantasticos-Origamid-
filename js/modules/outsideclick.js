export default function outsideClick(element, events, callback) {
  const htm = document.documentElement;
  const outside = 'data-outside';

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => { htm.addEventListener(userEvent, handleOutsideClick); })
    });

    element.setAttribute(outside, '');
  };

  function handleOutsideClick(e) {
    if (!element.contains(e.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        htm.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    };

  };
}; 