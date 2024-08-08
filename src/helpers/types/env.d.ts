export {};

declare global{
    namespace NodeJS{
        interface ProcessEnv{
            BROWSER: "chrome" | "firefox" | "webkit",
            ENV: "int-g1ds" | "stg-g1ds" | "hint-g1ds"
            BASRURL: string
            HEAD: "true" | "false" 
        }
    }
}