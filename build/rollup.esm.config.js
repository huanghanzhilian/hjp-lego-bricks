/*
 * @Description: 生成esm模式
 * @LastEditors: hongmeiting
 * @LastEditTime: 2021-10-15 06:36:24
 */
import basicConfig, { name, file } from './rollup.config'

export default {
  ...basicConfig,
  output: {
    name,
    file: file('esm'),
    format: 'es'
  }
}
