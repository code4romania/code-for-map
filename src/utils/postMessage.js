const targetOrigin = "*";

export default function postMessage(object) {
  parent.postMessage(object, targetOrigin)
}
