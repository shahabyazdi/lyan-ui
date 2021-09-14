import peerDepsExternal from "rollup-plugin-peer-deps-external";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import cssvariables from "postcss-css-variables";
import svgr from "@svgr/rollup";
import url from "@rollup/plugin-url";
import fs from "fs";
import { terser } from "rollup-plugin-terser";

const external = [
  "react",
  "react-dom",
  /@babel\/runtime/,
  "prismjs",
  /react-multi-date-picker/,
  "react-element-popper",
  "react-date-object",
  "react-draggable",
  "react-simple-code-editor",
];

const presets = ["@babel/preset-react", "@babel/preset-env"];

export default build("components").concat(build("components/table"));

function build(dirName) {
  return fs
    .readdirSync("./src/" + dirName)
    .filter((path) => !path.endsWith(".js"))
    .map((path) => {
      let outputPath = dirName.split("/")[0];

      return {
        input: `src/${dirName}/${path}/${path}.js`,
        output: [
          {
            file: `${outputPath}/${path}.js`,
            format: "cjs",
            plugins: [terser()],
            exports: "named",
          },
        ],
        ...getProps(),
      };
    });
}

function getProps() {
  return {
    external,
    plugins: [
      resolve(),
      peerDepsExternal(),
      babel({
        exclude: /node_modules/,
        presets,
        babelHelpers: "runtime",
        plugins: [
          "@babel/plugin-transform-runtime",
          "@babel/plugin-proposal-nullish-coalescing-operator",
        ],
      }),
      commonjs(),
      postcss({
        minimize: true,
        plugins: [cssvariables()],
      }),
      svgr(),
      url(),
    ],
  };
}
