# Remote Eslint

在 node 编译服务器上安装 `eslint` 环境。

## 安装
```
npm i
```

## 使用
```
npm start -- /home/q/www/test
```

## 配置文件
```json
{
  "extends": ["eslint-config-qunar-typescript-node/server"]
}
```

## eslint disable
在实际的项目开发过程中，在某些特殊情况下会有禁用某种规则的需求。为了保证系统的灵活性，从人性的角度，我们保留了通过注释来修改规则的能力，但使用上和官方的 disable 方式略有区别：
- 支持 `// eslint-disable-line` `// eslint-disable-next-line` 两种注释方式。
- 和官方不同的是 **注释中必须加上禁用的规则名称**
  - 禁用单个规则： `// eslint-disable-line no-alert`
  - 禁用多个规则，用逗号分隔： `// eslint-disable-line no-alert,quotes`
  - 禁用插件的单个规则，需要加上插件名称： `// eslint-disable-line jsx-a11y/aria-role`

## 本地配置
建议本地开发时使用和服务器一样的 eslint 配置，同时在 IDE 配置好 eslint 校验，这样就能在开发过程中实时发现代码问题，实时修改。
