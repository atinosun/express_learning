# express_learning
---
版本信息：
- express:4.15.2
- node:6.6.0
- npm:3.10.3
- mongo:2.4.9

---
### restful_api
database:restful_api

#### 说明
##### 1.环境变量
设置环境变量,不同环境变量读取不同的项目配置文件，
production环境不会抛出错误信息给web端。
```
sudo vim /etc/profile
在最上面添加 export NODE_ENV=testing
source /etc/profile
```
#### 2.启动项目
```
node app.js
```