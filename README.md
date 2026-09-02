# Northstar IELTS Lab

一个面向 B1 学习者的响应式 IELTS 每日训练站，覆盖 Listening / Speaking / Reading / Writing，并包含影视片段磨耳朵、Shadowing 跟读、阅读定位和 Task 2 观点练习。

## 本地运行

直接用浏览器打开 `index.html`，或在此目录运行任意静态服务器：

```bash
python3 -m http.server 4173
```

## 部署到 GitHub Pages

将此目录内的文件推送到 GitHub 仓库根目录（包括 `.github/workflows/pages.yml`），然后在 **Settings → Pages** 将 Source 设为 **GitHub Actions**。每次推送到 `main` 都会自动部署。
