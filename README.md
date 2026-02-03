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

### Run one browser (faster)

```bash
npm run test:chromium      # run only in Chromium
```

### Test files

- **tests/example.spec.js** – example.com: title, heading, link checks
- **tests/navigation.spec.js** – navigation and URL checks
- **tests/assertions.spec.js** – visibility, text, count assertions
- **tests/demo-playwright.spec.js** – Todo app: add, complete, filter, count, clear, delete

### Your website

To test your own site, set `BASE_URL` or change `baseURL` in `playwright.config.js`, then add specs under `tests/`.
