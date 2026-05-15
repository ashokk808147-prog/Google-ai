module.exports = {
  apps: [
    {
      name: "cinevista-web",
      script: ".next/standalone/server.js",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
