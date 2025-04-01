# Playwright Automated Tests for Amazon

<img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /> <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" /> <img src="https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white" /> <img src="https://img.shields.io/badge/Google_chrome-4285F4?style=for-the-badge&logo=Google-chrome&logoColor=white"/>  

This repository contains **automated tests** for the **Amazon** website using **Playwright** and **TypeScript**. The test suite covers functionalities like **adding products to the cart** and **modifying cart quantities**.

## Prerequisites  

- **Node.js**: Install from [nodejs.org](https://nodejs.org/)  
- **Playwright**: [Playwright](https://playwright.dev/) 

## Installation  

Clone the repository and install dependencies  

### Headless mode
Execute tests in headless mode (default), where the browser runs in the background and results are displayed in the terminal:

```bash
npx playwright test
```
### UI Mode
For an interactive experience, use UI mode to visually track test execution and debug issues step by step:

```bash
npx playwright test --ui
```
### Headed Mode
Run tests in headed mode to see the browser in action, allowing you to observe how Playwright interacts with the application:

```bash
npx playwright test --headed
```

#### Enjoy Testing!


