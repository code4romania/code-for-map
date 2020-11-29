const targetOrigin = "*";

export default function postMessage(object) {
  parent.postMessage(object, targetOrigin);
}

export const postMessageHeight = () => {
  const height = Math.max(
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );

  postMessage({
    height,
  });
};
