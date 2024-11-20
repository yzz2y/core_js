import globals from "globals";
import pluginJs from "@eslint/js";

const types = {
  isObject:true,
  isArray:true,
  isString:true,
  isNumber:true,
  isNull:true,
  isUndefined:true,
  isFunction:true
}

const dom = {
  getNode:true,
  getNodes:true,
  insertLast:true
}

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...types,
        ...dom,
        gsap:true,
      },
    },
    rules: {
      "no-unused-vars": "off",
    },
  },
];
