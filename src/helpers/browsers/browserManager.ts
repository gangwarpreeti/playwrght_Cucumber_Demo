import { chromium, firefox, webkit  } from "@playwright/test";
import { config } from "../../support/config";


export const invokeBrowser = () => {
    switch (config.browser) {
        case "chrome":
            return chromium.launch(config.browserOptions);
        case "firefox":
            return firefox.launch(config.browserOptions);
        case "webkit":
            return webkit.launch(config.browserOptions);
        default:
            return chromium.launch(config.browserOptions);
    }
}