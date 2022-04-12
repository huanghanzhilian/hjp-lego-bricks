/*
 * @Description: rollup打包配置
 * @LastEditors: hongmeiting
 * @LastEditTime: 2021-10-15 06:32:02
 */
import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { name } from '../package.json'

// type有两种，ESM 和 UMD
const file = type => `dist/${name}.${type}.js`
// 生成新的tsconfig.json配置文件，覆盖原来的文件，打包成.d.ts
const overrides = {
  compilerOptions: { // tsconfig.json中的compilerOptions属性覆盖
    declaration: true // 定义允许生成声明文件
  },
  exclude: [
    'node_modules'
  ]
}

export {
  name,
  file
}
export default {
  input: 'src/index.ts', // 入口文件地址
  output: {
    name, // 当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下：window.A=...
    file: file('esm'), // 动态输出文件名称
    format: 'es' // 五种输出格式：amd/es6/iife/umd/cjs
  },
  plugins: [
    nodeResolve(), // rollup只能处理相对路径的模块，针对引入或者绝对路径的模块抓瞎，需要借助插件@rollup/plugin-node-resolve完成
    typescript({
      tsconfigOverride: overrides
    }), // 处理typescript代码
    vue(), // 处理vue文件
    css({
      output: 'bundle.css'
    }) // 处理css文件
  ],
  external: [ // 规定哪些是打包过程中的外部模块，将其省略
    'vue',
    'lodash-es'
  ]
}
