
export default class {

  constructor() {
    this.to = false;
  }

  debounce(callback, timeout) {
    if(!this.to) {
      this.to = true;
      try {
        setTimeout(() => {
          callback();
          this.to = false;
        }, timeout);
      } catch (e) {
        throw new Error(e);
      }
    }

}
}
