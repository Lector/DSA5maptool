const AnnotationField = {
  props: {
    annotation: Object,
    /*: {
      type: Object,
      default(rawProps) {
        return {
          fieldName: "",
          subtype: "",
          fieldValue: "",
          defaultFieldValue: "",
          textContent: [],
        };
      },
    },*/
  },
  mounted: function () {
    console.log(this.annotation);
  },
  template: `
    <p>
        <div>Key: {{annotation.fieldName}}</div>
        <div>Default value: {{annotation.defaultFieldValue}}</div>
        <div>Value: {{annotation.fieldValue}}</div>
        <div>Shown Text: {{annotation.textContent?.join("")}}</div>
    </p>
  `,
};
