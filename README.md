# hxm-postcss-adaptive

css 单位转换。目前支持 `rem` 比例之间的互转。  

Based on `postcss-adaptive`：https://github.com/songsiqi/postcss-adaptive

### API

Config: 

* `type`：转换类型
  * `remToRem`：`rem` 单位之间的比例互转
  * `remToPx`： `rem` 单位转成 `px`
* `ratio`: `rem` 单位之间的转换比例。（当 `type` 为 `remToRem` 时需要提供该参数）
* `rootValue`：`rem` 与 `px` 的转换基准值。例如：`0.36rem` <=> `18px`，`rootValue` 的值为 `50`。（当 `type` 为 `remToPx` 时需提供该参数）

#### Vue-Cli
新建 `.postcssrc.json`，配置如下：

```json
{
  "plugins": {
    "postcss-adaptive": {
      "type": "remToRem",
      "ratio": 2
    }
  }
}
```

插件转换前：
```css
#app {
  margin-top: 0.3rem; /*rem*/
  font-size: 0.2rem;
}
```

插件转换后：
```css
#app {
  margin-top: 0.6rem; /*rem*/
  font-size: 0.4rem;
}
```

## Changelog

### 0.1.0

* First release.

### 0.2.0

* 增加 `remToPx` 的类型及 `rootValue` 配置项.

## License

MIT
