# 青训营数据展示页面

#### 介绍
青训营数据展示页面

#### 软件架构
软件架构说明


#### 安装教程

```
// npm init vite@latest
// npm install
// npm install vue-router@4
// npm install echarts --save

npm install
npm run dev
```

#### 查看

> 修改浏览器url的哈希地址
> 目前有1、2、3、4、5、404

#### 使用

```
views中是使用的父组件，即想要加入的组件
components中是编写好的展示组件，使用父子传值对其高度进行更改，宽度默认100%
```

#### 日志

1. [2022年8月4日 14:05:03]
    指标-曲线图与耗时-曲线图，耗时缺少时间，等待api
    耗时-瀑布图，等待api
    错误-数据展示、曲线图，等待api与数据分割
    用户行为-表格，等待api