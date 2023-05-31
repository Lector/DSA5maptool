const ChildComponent = {
  props: {
    myMessage: String,
  },
  template: `<div style="border: 1px solid blue;"> {{myMessage}} <slot>No Slot content provided.</slot></div>`,
};
