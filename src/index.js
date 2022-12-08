import postcss from 'postcss'
import pkg from '../package.json'
// import Adaptive from './adaptive'

export default postcss.plugin(pkg.name, (options) => {
  // return (css, result) => {
  //   const adaptiveIns = new Adaptive(options)
  //   const output = adaptiveIns.parse(css.toString())
  //   result.root = postcss.parse(output)
  // }

  return (css, result) => {
    /**
     * rem 之间的比例互转
     */
    if (options.type === 'remToRem') {
      const ratio = options.ratio
      // 在处理器函数内，遍历 css 中的每一个规则
      css.walkRules((rule) => {
        // 对于每一个规则，遍历它的每一个声明
        rule.walkDecls((decl) => {
          // 如果声明的值使用了 rem 单位，则将其转换成原来的两倍
          if (decl.value.includes('rem')) {
            decl.value = decl.value.replace(/\d*\.?\d*rem/g, (match) => {
              return parseFloat(match) * ratio + 'rem'
            })
          }
        })
      })
    }
  }
})
