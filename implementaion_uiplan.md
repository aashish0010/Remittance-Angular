# Implementation Plan: Remittance App UI/UX & Architecture Revamp

This document outlines the detailed plan to modernize the UI/UX and underlying architecture for the Remittance application (Agent and Admin portals). It adopts the definitive modern Angular stack for 2026, pivoting away from older Material and PrimeNG patterns to embrace headless, signal-driven, and highly performant libraries.

## Goal Description
The current Angular application relies on mixing Angular Material and custom CSS, with template-driven forms (`ngModel`). The goal is to elevate the design to a premium, modern standard while shifting the tech stack to state-of-the-art tools optimized for Angular Signals, accessibility, and high performance.

## 1. Global UI/UX Strategy & Tooling
- **UI Primitives & Design System**: **Spartan UI** and **Tailwind CSS**. 
  - Spartan UI (built on Angular ARIA) will provide headless, fully accessible primitives (similar to shadcn/ui), while Tailwind CSS will handle all custom styling, ensuring maximum flexibility without bloated component libraries overriding our styles.
- **Icons**: **Hugeicons** will be the standard, providing over 46,000 tree-shakable vector icons.
- **Animations**: **Motion (formerly Framer Motion)**. We will use this for high-performance, hardware-accelerated scroll and gesture animations that feel completely native.
- **Internationalization (i18n)**: **Transloco**. Implementation of runtime i18n allowing users to switch languages instantly without full page reloads or maintaining separate builds.

---

## 2. Form & Data Architecture
- **Forms**: **Angular Reactive Forms** synced with **Zod** for robust runtime data contract validation.
- **State Management**: **NgRx Signal Store**. We will migrate away from verbose Redux boilerplate or simple RxJS subjects towards this lightweight, functional, and highly composable state management solution for all feature-level logic.

---

## 3. Component-Specific Refactoring

### A. Admin Portal: Dashboard & DataTables
- **Defect**: The current admin dashboard relies on `mat-table` and basic stats.
- **Fix**: 
  - **Tables**: Migrate all massive dataset views (Transactions, Agents) to **TanStack Table (v9)**. This headless approach integrates deeply with Angular Signals, offering supreme performance and customizability over traditional heavy grid solutions.
  - **Charts**: Introduce **Apache ECharts (via ngx-echarts)** for complex financial visualizations (Revenue, Commission trends). For simpler, interactive consumer-facing stats, **Chart.js (via ng2-charts)** will be used.

#### [MODIFY] `Remittance.Angular/src/app/pages/admin/dashboard/admin-dashboard.component.ts`
#### [MODIFY] `Remittance.Angular/src/app/pages/admin/dashboard/admin-dashboard.component.html`
- Replace legacy stat cards with Spartan UI styling.
- Implement TanStack Table for recent transactions.
- Add Apache ECharts for volume/revenue visualizations.

### B. Agent Portal: Send Money Flow
- **Defect**: Custom HTML stepper and inline error banners disrupt user flow and are not accessible.
- **Fix**:
  - Replace custom stepper with an accessible Spartan UI Stepper/Tabs pattern.
  - Convert all user inputs to **Reactive Forms + Zod** schemas to instantly catch and validate complex conditions (KYC, Limits) seamlessly.
  - Use **NgRx Signal Store** to manage the multi-step form state consistently across the Send Money journey without data loss on navigation.

#### [MODIFY] `Remittance.Angular/src/app/pages/agent/send-money/send-money.component.ts`
#### [MODIFY] `Remittance.Angular/src/app/pages/agent/send-money/send-money.component.html`
- Adopt Spartan UI / Tailwind classes.
- Implement NgRx Signal Store for stepped state logic.

### C. Authentication Flow
- **Defect**: Template-driven login.
- **Fix**:
  - Migrate `login.component` to the Zod + Reactive form pattern.
  - Utilize Motion for a smooth, app-like transition from Login to Dashboard.

#### [MODIFY] `Remittance.Angular/src/app/pages/auth/login/login.component.ts`
#### [MODIFY] `Remittance.Angular/src/app/pages/auth/login/login.component.html`

---

## 4. Verification & Testing Plan
- **Unit and Component Testing**: **Vitest**. Being extremely fast in Node.js environments, Vitest will be our engine for asserting component logic, signal states, and Zod transformations.
- **End-to-End Testing (E2E)**: **Playwright**. All critical user flows (Login, Send Money Step-by-Step, Admin Approval) will be covered by Playwright to ensure cross-browser reliability.

## Summary of Tech Stack Upgrades
- **Styling**: Tailwind CSS + Spartan UI
- **Icons**: Hugeicons
- **Forms**: Reactive Forms + Zod
- **Tables**: TanStack Table (v9)
- **State**: NgRx Signal Store
- **Charts**: Apache ECharts & Chart.js
- **Animations**: Motion
- **i18n**: Transloco
- **Testing**: Vitest + Playwright
