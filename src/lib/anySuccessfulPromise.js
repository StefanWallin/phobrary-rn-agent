export default class AnySuccessfulPromise {
  constructor(promises) {
    this.promises = promises;
    this.successes = [];
    this.errors = [];
    this.thenCallback = () => { console.error('then not defined'); };
    this.catchCallback = () => { console.error('catch not defined'); };
    this.finallyCallback = () => {};
    this.raceActive = true;
    this.awaitPromises();
  }

  then(callback) { this.thenCallback = callback; return this; }

  catch(callback) { this.catchCallback = callback; return this; }

  finally(callback) { this.finallyCallback = callback; return this; }

  awaitPromises() {
    this.promises.forEach((promise) => {
      promise
        .then(result => {
          if(this.raceActive) this.thenCallback(result);
          this.raceActive = false;
          this.successes.push(result);
        })
        .catch(result => this.errors.push(result))
        .finally(() => {
          const finishedLength = this.successes.length + this.errors.length;
          if (finishedLength === this.promises.length) {
            this.executeCallbacks();
          }
        });
    });
  }

  executeCallbacks() {
    this.catchCallback(this.errors);
    this.finallyCallback(this.successes, this.errors);
  }
}
