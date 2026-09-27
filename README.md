# Profile Demo

Intentionally buggy mini app for **DevResolve AI** testing.

## Bug
Saved profile name disappears after reload.

**Expected:** Saved name should persist after refresh.

**Actual:** Save writes to a different localStorage key than load reads.

## Run
```bash
npm install
npm run dev
```

## Reproduce with tests
```bash
npm test
```
The failing test is intentional. The repository should be fixed by the coding agent later.

## Deploy
Import this repository into Vercel and deploy with the default Next.js settings.
