(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{QeBL:function(e,t,r){"use strict";r.r(t);var a=r("q1tI"),i=r.n(a),c=r("9Dj+"),n=r("H8eV"),o=r("Zjax"),l=r("Wbzz"),s=function(){return o.data.allMarkdownRemark.edges.map((function(e){var t=e.node,r=t.frontmatter.title||t.fields.slug;return i.a.createElement("article",{style:{margin:"10px 0"},key:t.fields.slug},i.a.createElement("header",null,i.a.createElement("h3",{style:{margin:0}},i.a.createElement(l.Link,{style:{boxShadow:"none"},to:t.fields.slug},r)),i.a.createElement("small",null,t.frontmatter.date)),i.a.createElement("section",null,i.a.createElement("p",{style:{margin:0},dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}})))}))};r.d(t,"pageQuery",(function(){return d}));t.default=function(e){var t=e.data.site.siteMetadata.title;return i.a.createElement(c.a,{location:e.location,title:t},i.a.createElement(i.a.Fragment,null,i.a.createElement(n.a,{title:"Keisei's Blog"}),i.a.createElement(s,null)))};var d="1097489062"},Zjax:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"excerpt":"什么是装饰器 装饰器是“装饰函数（或方法）”的一种简称。它是一个通过修改传入的函数或方法的行为并返回一个新函数的函数。 我们可以在任何支持函数为一等公民的语言中实现装饰器，如 JavaScript…","fields":{"slug":"/understanding-javascript-decorators/"},"frontmatter":{"date":"January 05, 2020","title":"JavaScript 装饰器","description":"JavaScript 装饰器入门介绍"}}},{"node":{"excerpt":"简述 Docker 是集开发、发布、执行应用功能的一个开放平台。Docker 能够帮我们将应用和基础设施分离来达到更快的交付。有了 Docker，我们可以像管理基础设施一样管理我们的软件。有了 Docker…","fields":{"slug":"/docker-overview/"},"frontmatter":{"date":"December 30, 2019","title":"Docker 简介","description":"Docker 简介，Docker 能做什么以及底层原理"}}},{"node":{"excerpt":"模板打包器把小的代码片段转译成可在浏览器中运行的更大更复杂的文件。这些代码片段都是 JavaScript 文件，所有代码间的依赖都由模块系统来表示（https://webpack.js.org/concepts/modules…","fields":{"slug":"/minipack/"},"frontmatter":{"date":"December 25, 2019","title":"迷你打包工具","description":"精简版打包工具，领略内部实现之巧"}}},{"node":{"excerpt":"简介 前一节我们介绍了浏览器从地址栏输入 URL 开始内部是如何工作的。本文来看一下渲染器进程内部是如何工作的，由于该部分涉及到了 web 优化的众多方面，本文尽量以高度概括的方式进行讲解，如需进一步学习可访问 Web 基础之性能优化。 渲染器进程处理 web…","fields":{"slug":"/web-browser-render/"},"frontmatter":{"date":"December 18, 2019","title":"渲染器进程的内部执行","description":"渲染器进程的内部执行过程"}}},{"node":{"excerpt":"前言 我们知道现在市场上大多数浏览器是多进程多线程的方式来处理不同的任务。我们今天来看一下进程和线程是如何合作来呈现一个网站的。 我们以简单的浏览网页为例：从地址栏中输入 URL…","fields":{"slug":"/web-browser-happen-in-navigation/"},"frontmatter":{"date":"December 15, 2019","title":"浏览器输入URL...","description":"浏览器地址栏输入URL会做哪些事情？"}}},{"node":{"excerpt":"前言 作为 Web 开发人员，我们在工作中可能会接触移动端 Web…","fields":{"slug":"/css-resolution-vs-device-resolution/"},"frontmatter":{"date":"December 14, 2019","title":"区分CSS 分辨率和设备分辨率","description":"CSS中的像素和设备分辨率像素的区分"}}},{"node":{"excerpt":"参考 https://www.youtube.com/watch?v=4GpwM8FmVgQ","fields":{"slug":"/promise-from-scratch/"},"frontmatter":{"date":"December 08, 2019","title":"简单的Promise实现","description":"No BB, show me the code."}}},{"node":{"excerpt":"简介 现代化的前端应用离不开打包工具，从早期人们所熟知的 Grunt, Gulp 到现在炙手可热的 webpack, rollup 等，这些工具的崛起使得我们的代码构建更加方便，通过 Loader，插件等机制我们可以应用最新的技术，如新语法，预处理 CSS（Scss, Less…","fields":{"slug":"/webpack-behind-the-scene/"},"frontmatter":{"date":"December 04, 2019","title":"webpack 基本原理","description":"本文主要介绍了对webpack的初步认识以及内部的工作原理。"}}},{"node":{"excerpt":"背景 最近在个人博客中采用了styled-components库来写组件的样式，在翻看文档时，发现用法： 这个用法引起了我的兴趣，这是如何 work 起来的？ 带标签的模板字符串（Tagged Template Literals…","fields":{"slug":"/tagged-template-literals/"},"frontmatter":{"date":"December 01, 2019","title":"神奇的模板字符串","description":"本文主要介绍了ES6的模板字符串的高级用法"}}},{"node":{"excerpt":"引言 WebSocket API 是一种较为高级的通信方式，它在客户端和服务端开启一条全双工的通道，可以从客户端发送消息至服务端并且可以接受事件驱动的响应而不需要主动去请求回复。简而言之，收发消息的两端一旦开启通道可相互自由通信。 WebSocket…","fields":{"slug":"/the-websocket-api/"},"frontmatter":{"date":"November 26, 2019","title":"The WebSocket API","description":"本文主要介绍web应用中Socket编程的相关技术，包括如何实现简单的Socket客户端和服务器"}}},{"node":{"excerpt":"介绍 React Fiber 是当前开发中的最新版 React…","fields":{"slug":"/react-fiber-architecture/"},"frontmatter":{"date":"November 22, 2019","title":"React Fiber 架构","description":"本文主要介绍 React 新的架构设计-- Fiber , 将能使 React 可对渲染过程进行资源调度，最大化提高用户体验"}}},{"node":{"excerpt":"JavaScript 引擎管道 当加载到我们所写的 JavaScript 代码，JavaScript 引擎开始解析源代码，并把它转换成抽象语法树（AST）。基于 AST，解释器开始工作并转换成字节码。此时引擎开始真正执行我们的 JavaScript 代码。 js engine…","fields":{"slug":"/V8-shapes-and-inline-cache/"},"frontmatter":{"date":"November 18, 2019","title":"JavaScript 引擎基础：Shapes 和 Inline Caches","description":"了解 JavaScript 引擎基本的工作原理，可以帮助我们写出更加高性能的代码。"}}},{"node":{"excerpt":"JavaScript 类型 JavaScript 的值总共具有 8 种不同的类型： 可以通过  关键字来校验值的类型。 尽管  有着它自身的一种类型，但  却返回  而不是  。为了理解原因，我们首先把所有的类型分为两组： object (即  类型) primitives…","fields":{"slug":"/V8-performance-cliff/"},"frontmatter":{"date":"November 14, 2019","title":"React源码中导致V8性能断崖下滑的真相","description":"本文主要讲述了V8如何在内存中表示JavaScript类型，并且是如何影响Shape机制的，这将会为我们解释近期发现的一个React核心代码中的性能问题。"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-e701a5f97b9c337b8095.js.map