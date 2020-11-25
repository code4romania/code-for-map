const targetOrigin = "http://d0abb63334f0.eu.ngrok.io";

export default function postMessage(object) {
  if (window.origin !== targetOrigin) return

  parent.postMessage(object, targetOrigin)
}
