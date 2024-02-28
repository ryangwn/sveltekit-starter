# Model the application state
Using state model of mobx

```js
type CreateTimerProps = {

}

export function createTimer(props: CreateTimerProps) {
  // Define state and make it observable
  let secondsPassed = $state(0);
  // Computed
  let double = $derived(secondsPassed * 2); // All derived values should be pure. Do not recommend to change state.

  return {
    refs: {},
    states: {
      secondsPassed,
      double
    },
    methods: {
      increase() {
        secondsPassed += 1
      },

      reset() {
        secondsPassed = 0
      }
    }
  }
}
```
