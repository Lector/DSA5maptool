const Importer = {
  components: {
    AnnotationField,
  },
  methods: {
    async onInputChange(ev) {
      const pdfjslib = window["pdfjs-dist/build/pdf"];
      console.log("Changed input", ev);
      this.pages = [];
      /**
       * @type {File}
       */
      const file = ev.target.files[0];
      const arrBuff = await file.arrayBuffer();
      const loadingTask = pdfjslib.getDocument(arrBuff);
      loadingTask.onProgress = function ({ loaded, total }) {
        console.log("Progress:", (loaded / total) * 100);
      };
      loadingTask.promise.then(async (pdf) => {
        console.log("Pages:", pdf.numPages);
        for (let i = 1; i <= pdf.numPages; i++) {
          /** @type {{getTextContent: () => any, getAnnotations: () => any}} */
          const page = await pdf.getPage(i);
          console.log(`Parsed page ${i}`);
          /** @type {{fieldName: string, subtype: string, fieldValue: string, textContent: string[]}[]} */
          const annotations = await page.getAnnotations();
          //   const annotationFieldNames = annotations.map(
          //     (annotation) => annotation.fieldName
          //   );
          //   console.log({ annotationFieldNames });
          //   annotations.forEach((annotation) => {
          //     const mappedField = this.mapping[annotation.fieldName];
          //     if (mappedField) {
          //       console.log({ annotation });
          //       this[mappedField] = annotation.textContent.join("");
          //     }
          //   });
          this.pages.push({ id: i, annotations });
        }
        pdf.destroy();
      });
    },
  },
  data() {
    return {
      MU: "",
      name: "",
      KL: "",
      mapping: {
        MU_1: "MU",
        KL_1: "KL",
        Held_Name: "name",
      },
      pages: [],
    };
  },
  template: `
        <input id="fileSelector" type="file" accept=".pdf" @change="onInputChange" >
        <div id="charDetails">
            <div :id="page.id" v-for="page in pages" :key="page.id">
                <p style="border: 3px solid red;">Page: {{ page.id }}</p>
                <p>Felder:</p>
                <AnnotationField v-for="annotation in page.annotations" :annotation="annotation"></AnnotationField>
            </div>
        </div>
    `,
};
