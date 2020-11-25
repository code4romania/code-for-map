const targetOrigin = "http://d0abb63334f0.eu.ngrok.io";

export default function postMessage(object) {
  parent.postMessage(object, targetOrigin)
}
