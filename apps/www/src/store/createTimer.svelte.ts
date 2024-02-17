interface ICreateTimer {
  // observables
  secondsPassed: number
  // computed
  double: number
  // actions
  increase: () => void
  reset: () => void
}

export class createTimer implements ICreateTimer {
  // Define state and make it observable
  secondsPassed = $state(0);
  // Computed
  double = $derived(this.secondsPassed * 2); // All derived values should be pure. Do not recommend to change state.

  // Updating state using actions
  increase() {
    this.secondsPassed += 1
  }

  reset() {
    this.secondsPassed = 0
  }
}
