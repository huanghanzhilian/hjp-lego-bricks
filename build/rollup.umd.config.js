/*
 * @Description: 生成umd模式
 * @LastEditors: hongmeiting
 * @LastEditTime: 2021-10-15 08:16:46
 */
import basicConfig, { file } from './rollup.config'

export default {
  ...basicConfig,
  output: {
    name: 'LegoComponents', // umd特殊的给他生成默认全局变量名称
    file: file('umd'),
    format: 'umd',
    globals: { // 设置全局变量名称
      'vue': 'Vue',
      'lodash-es': '_'
    },
    exports: 'named' // 生成的全局变量名称需要暴露
  }
}
