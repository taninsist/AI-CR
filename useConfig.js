const isProd = Math.random() > 0.5;

export function useConfig() {
  const config = {};

  if (isProd) {
    Object.assign(config, {
      baseUrl: "/prod-api",
      port: 8080,
      env: "prod",
      isProd,
      key: "123456",
    });
  } else {
    Object.assign(config, {
      baseUrl: "/dev-api",
      port: 80,
      env: "dev",
      isProd,
      key: "654321",
    });
  }

  return {
    ...config,
  };
}
