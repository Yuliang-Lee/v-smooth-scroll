import { Plugin } from "vue";

// augment typings of Vue.js
import "./vue-injections";

export interface SmoothScrollOptions {
  scrollTo: Element;
  duration?: number;
  offset?: number;
  container?: Element | string;
  updateHistory?: boolean;
  hash?: string; // required if updateHistory is true
}

declare const VueSmoothScroll: Plugin<SmoothScrollOptions>;

export default VueSmoothScroll;
