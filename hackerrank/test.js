const puppy = require("puppeteer");
const id = "ralariv999@ddwfzp.com";
const pass = "rohit@1906";
let dataToType = "bjdbweodwedewdew";
let moderators = [
    "nocidi6371", 
    "ralariv999", 
    "yasekin473", 
    "sibaje3329", 
    "pamahex943", 
    "kejavib309", 
    "mijora9576", 
    "bokej31440", 
    "fenemo4073"
];
async function main(){
    let browser = await puppy.launch({
        headless : false,
        defaultViewport : false,
        args : ["--start-maximized"]
    });
    let tabs = await browser.pages();
    let tab = tabs[0];
    await tab.goto("https://www.hackerrank.com/auth/login");
    await tab.type("#input-1", id);
    await tab.type("#input-2", pass);
    await tab.waitForSelector('button[type="submit"]', {visible : true});
    await tab.click('button[type="submit"]');
    await tab.waitForNavigation({waitUntil : "networkidle0"});
    await tab.click(".username");
    await tab.click('a[data-analytics="NavBarProfileDropDownAdministration"]');
    await tab.waitForSelector(".nav-tabs.nav.admin-tabbed-nav li", {visible : true});
    let administrationButtons = await tab.$$(".nav-tabs.nav.admin-tabbed-nav li");
    await administrationButtons[1].click();

    //await browser.close();
}
main();