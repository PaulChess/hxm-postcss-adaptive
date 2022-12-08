# hxm-postcss-adaptive

css 单位转换。目前支持 `rem` 比例之间的互转。  

Based on `postcss-adaptive`：https://github.com/songsiqi/postcss-adaptive

### API

Config: 

* `type`：转换类型
  * `remToRem`：`rem` 单位之间的比例互转
* `ratio`: 提供 `rem` 单位之间的转换比例

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

## License

MIT
