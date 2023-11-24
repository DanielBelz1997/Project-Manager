declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HOST: string;
      USER: string;
      PASS: string;
      DB: string;
      PORT: number;
      ACCESS_TOKEN_SECRET: string;
      REFRESH_TOKEN_SECRET: string;
    }
  }
}

export {};
