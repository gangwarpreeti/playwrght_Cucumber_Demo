import {LaunchOptions} from '@playwright/test';
import {ConsoleLogger} from "@cucumber/cucumber/lib/api/console_logger";
const envURL = require("./env");
const HOST_URL = process.env.HOST_URL || envURL[envURL.env].web.HOST_URL;


const browserOptions: LaunchOptions = {
    slowMo: 0,
    headless: true,
    // args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'],
};

export const config = {
    browser: process.env.BROWSER || 'chromium',
    browserOptions,
    BASE_URL: HOST_URL,
    logger: ConsoleLogger
//     use: {
//         actionTimeout: 10 * 1000,
//         navigationTimeout: 30 * 1000,
// },
    // IMG_THRESHOLD: {threshold: 0.4},
    // BASE_API_URL: '',
};