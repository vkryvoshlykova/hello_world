# hello_world
for studying

## Playwright automation (JavaScript)

Automated test cases for websites using [Playwright](https://playwright.dev/) and JavaScript.

### Setup

```bash
npm install
npx playwright install
```

### Run tests

```bash
npm test                 # run all tests (headless)
npm run test:headed      # run with browser visible
npm run test:ui          # run with Playwright UI
npm run test:debug       # run in debug mode
npm run report           # open last HTML report
```

### Test files

- **tests/example.spec.js** – example.com: title, heading, link checks
- **tests/navigation.spec.js** – navigation and URL checks
- **tests/demo-playwright.spec.js** – Todo app on demo.playwright.dev (add/complete/filter)

### Your website

To test your own site, set `BASE_URL` or change `baseURL` in `playwright.config.js`, then add specs under `tests/`.
