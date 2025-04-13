import { isString } from "lodash-es";

export default function nextOrSource(source) {
  return isString(source) ? source : source.src;
}
