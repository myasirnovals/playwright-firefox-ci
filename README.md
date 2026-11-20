# Playwright Web Automation Testing with Firefox

This repository contains automated web testing scripts using [Playwright](https://playwright.dev/) running against Mozilla Firefox, configured with a CI/CD pipeline via GitHub Actions.

## Requirements & Configuration

1. **Test Runner**: Playwright with Firefox engine (`await firefox.launch()`).
2. **Target Test**: Authentication test suite on `https://bitheap.tech`.
3. **CI/CD Pipeline**: GitHub Actions workflow running on push, pull requests, and manual triggers (`workflow_dispatch`).

## Local Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install Playwright Firefox browser:
   ```bash
   npx playwright install firefox
   ```

3. Run tests:
   ```bash
   npx playwright test
   ```

## CI/CD Workflow

The GitHub Actions workflow is located at `.github/workflows/node.js.yml`. It automatically:
- Checks out the repository.
- Sets up Node.js.
- Installs project dependencies (`npm install`).
- Installs Playwright's Firefox browser and Linux dependencies (`npx playwright install --with-deps firefox`).
- Executes the authentication test suite with the necessary environment variables (`BITHEAP_USERNAME` and `PASS`).
