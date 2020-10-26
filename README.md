# dappapi 

dappapi 数据后台 （适合golang jin 初学者 采用Go Mod 进行包管理）

前端UI：layui

## GOLANG（go1.15.2） 安装

- $ wget https://golang.org/dl/go1.15.2.linux-amd64.tar.gz
- $ tar -xzvf go1.15.2.linux-amd64.tar.gz
- $ mv go /usr/local/go
  
  设置全局环境变量
- $ vim /etc/profile

```
export GOROOT=/usr/local/go
export PATH=$PATH:$GOROOT/bin
```
- $ source /etc/profile

## 设置GOLANG环境变量 及 编译

- $ go env -w GO111MODULE=on //MOD 包管理开关
- $ go env -w GOPATH=/data/goapp/vendor // 包管理目录
  
  因为下载依赖是从GitHub上get 这个过程需要翻墙
- $ go build 

## 启动API服务

- $ mysql -u -p --default-character-set=utf8mb4 <./database.sql
- $ ./dappapi server -p 8081 -m dev >/tmp/aiwan.log &
  
## 配置NGINX

配置两个端口方便代码更新

```
map $http_upgrade $connection_upgrade {
    default upgrade;
    ''      close;
}
upstream dappapi {
    server 127.0.0.1:8081 weight=5 max_fails=3 fail_timeout=30s;
#    server 127.0.0.1:8082 weight=5 max_fails=3 fail_timeout=30s;
    keepalive 16;
}
server {
    listen 80;
    server_name api.dzpkdev.com 192.168.31.151;
    root /data/goapp/dappweb;
    access_log /var/log/nginx/api.dzpkdev.com_access.log  main;
    autoindex off;
    index index.html index.htm;
        # 当请求PHP文件时直接响应404，防止暴露public/*.php
    location /goapi {
        # proxy_connect_timeout 60s;
        # proxy_send_timeout 60s;
        # proxy_read_timeout：如果60秒内被代理的服务器没有响应数据给Nginx，那么Nginx会关闭当前连接；同时，Swoole的心跳设置也会影响连接的关闭
        # proxy_read_timeout 60s;
        proxy_http_version 1.1;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Real-PORT $remote_port;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header Scheme $scheme;
        proxy_set_header Server-Protocol $server_protocol;
        proxy_set_header Server-Name $server_name;
        proxy_set_header Server-Addr $server_addr;
        proxy_set_header Server-Port $server_port;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_pass http://dappapi;
    }
    ## 服务端api 调用
    location /cpapi {
        default_type application/json;
    #		allow ip;
    #		deny all;
        # proxy_connect_timeout 60s;
        # proxy_send_timeout 60s;
        # proxy_read_timeout 120s;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Real-PORT $remote_port;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header Scheme $scheme;
        proxy_set_header Server-Protocol $server_protocol;
        proxy_set_header Server-Name $server_name;
        proxy_set_header Server-Addr $server_addr;
        proxy_set_header Server-Port $server_port;
        proxy_pass http://dappapi;
    }
    error_page 404 502 /error.html;
}

server
{
   listen       80;
   server_name  d.dzpkdev.com;
   index index.html index.htm index.php;
   root  /data/goapp/dappweb;
   access_log /var/log/nginx/d.dzpkdev.com_access.log  main;
}
```

## 管理后台登录 

user:steps

passwd:QAZwsx123

## google 验证码添加UUID
UUID(steps秘钥):UTHGQODT7AXEFE5EOX7NU746EVX6CST6
