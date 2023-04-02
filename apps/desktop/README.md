### 多页面打包

1. `src/pages`下创建子项目如`page1`
2. 根目录下创建`.html`模版引入`page1`下的`main.ts`
3. `tsconfig.json`配置`alias`
4. 访问主页面+`/page1.html`: `http://127.0.0.1:5170/page1.html`

