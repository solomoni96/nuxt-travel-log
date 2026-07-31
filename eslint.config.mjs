import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(antfu({
  type: 'app',
  vue: true,
  typescript: true,
  formatter: true,
  imports: false,
}))
