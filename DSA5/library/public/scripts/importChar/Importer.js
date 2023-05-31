const Importer = {
  methods: {
    async onInputChange(ev) {
      const pdfjslib = window["pdfjs-dist/build/pdf"];
      console.log("Changed input", ev);
      /**
       * @type {File}
       */
      const file = ev.target.files[0];
      const arrBuff = await file.arrayBuffer();
      const loadingTask = pdfjslib.getDocument(arrBuff);
      loadingTask.promise.then(async (pdf) => {
        console.log("Pages:", pdf.numPages);
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          console.log(`Page ${i}`);
          const textContent = await page.getTextContent();
          const structTree = await page.getStructTree();
          const opList = await page.getOperatorList();
          const jsActions = await page.getJSActions();
          console.log({ textContent });
          console.log({ structTree });
          console.log({ opList });
          console.log({ jsActions });
          /** @type {{fieldName: string, subtype: string, fieldValue: string, textContent: string[]}[]} */
          const annotations = await page.getAnnotations();
          const annotationFieldNames = annotations.map(
            (annotation) => annotation.fieldName
          );
          console.log({ annotationFieldNames });
          annotations.forEach((annotation) => {
            const mappedField = this.mapping[annotation.fieldName];
            if (mappedField) {
              console.log({ annotation });
              this[mappedField] = annotation.textContent.join("");
            }
          });
          this.pages.push({ id: i, annotationFieldNames });
        }
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
                <p v-for="annotationFieldName in page.annotationFieldNames" :key="annotationFieldName"> {{annotationFieldName}}</p>
            </div>
        </div>
    `,
};
