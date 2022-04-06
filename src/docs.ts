import { ComponentOptions, ref, computed } from 'vue';
import Introduction from './docs/introduction.md'
import App from './App.vue';
import slugify from 'slugify'
import { useRoute } from 'vue-router'
import MacrameIndexes from './docs/macrame/indexes.md'
import MacrameForms from './docs/macrame/forms.md'
import MacrameTrees from './docs/macrame/trees.md'
import MacrameTranslatable from './docs/macrame/translatable.md'
import OtherDevelopment from './docs/other/development.md'

const docs: {[k:string]: ComponentOptions} = {
    // base
    introduction: Introduction,

    // macrame
    [`macrame/indexes`]: MacrameIndexes,
    [`macrame/forms`]: MacrameForms,
    [`macrame/translatable`]: MacrameTranslatable,
    [`macrame/trees`]: MacrameTrees,
    [`other/development`]: OtherDevelopment,
}

function useDocs() {
    return docs;
}

export {
    useDocs,
}