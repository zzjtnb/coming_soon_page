/**
pm2 部署 nuxt 项目
NUXT2文档:https://nuxtjs.org/faq/deployment-pm2
NUXT3文档:https://v3.nuxtjs.org/guide/deploy/node-server/
pm2配置文档:https://pm2.keymetrics.io/docs/usage/application-declaration/
对于新装的pm2 一定要记得执行下 `pm2 kill` 清一下旧的pm2进程
运行指令:
pm2 start <pm2配置文件名> --env <环境变量>
*/
module.exports = {
  apps: [
    {
      name: "coming_soon_page", // pm项目名
      cwd: "./", // 当前工作路径
      script: ".output/server/index.mjs", // 启动文件地址
      args: "", // 包含通过 CLI 传递给脚本的所有参数的字符串
      watch: true, // 启用监视和重启功能,如果文件夹或子文件夹中的文件发生更改,您的应用将重新加载
      watch_delay: 1000, // 监控时延迟1秒
      ignore_watch: ["node_modules", "logs", "public"], // 忽视这些目录的变化
      autorestart: true, // 自动重启
      restart_delay: 5000, // 在重新启动崩溃的应用程序之前等待的时间(以毫秒为单位)
      min_uptime: "60s", // 应用程序的最小正常运行时间被视为已启动
      // node_args: '--insecure-http-parser', // node的启动模式
      //默认启动(pm2 start pm2.config.js)会读取env下的环境参数
      env: {
        NODE_ENV: "production", // 当前环境变量
        NITRO_PORT: 6000, // 启动端口
      },
      //生产环境启动(pm2 start pm2.config.js --env production)会读取env_production下的环境参数
      env_production: {
        // 设置运行环境,将出现在您的应用程序中的环境变量
        // process.env.production
        NODE_ENV: "production",
        // NITRO_PORT: 6000,// 启动端口
      },
      //开发环境启动(pm2 start pm2.config.js --env development)会读取env_development下的环境参数
      env_development: {
        // 设置运行环境,此时process.env.NODE_ENV的值就是development
        NODE_ENV: "development",
        // NITRO_PORT: 6000,  // 启动端口
      },
      out_file: "./logs/pm2/out.log", // 普通日志路径
      error_file: "./logs/pm2/err.log", // 错误日志路径
      merge_logs: true, //合并日志
      log_date_format: "YYYY-MM-DD HH:mm Z", //日志日期格式化
    },
  ],
};
