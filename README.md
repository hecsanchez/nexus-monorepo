# Nexus Monorepo

This monorepo contains the Nexus platform, including API, client, admin, and shared UI packages.

## Prerequisites
- **Node.js** (v18+ recommended)
- **pnpm** (preferred package manager)
- **PostgreSQL** (for the API database)
- **Stripe account** (for billing features)

## 1. Clone the Repository
```sh
git clone <repo-url>
cd nexus-monorepo
```

## 2. Install Dependencies
```sh
pnpm install
```

## 3. Environment Variables
Each app in `apps/` requires its own `.env` file. Copy the example and fill in the values:

### API
```sh
cd apps/api
cp .env.example .env
# Edit .env and set DATABASE_URL, STRIPE_SECRET_KEY, etc.
```

### Client
```sh
cd ../client
cp .env.example .env
# Edit .env and set VITE_API_URL, VITE_STRIPE_PUBLISHABLE_KEY, etc.
```

### Admin
```sh
cd ../admin
cp .env.example .env
# Edit .env and set VITE_API_URL, etc.
```

## 4. Build the UI Package
The UI package must be built before running the apps:
```sh
cd ../../packages/ui
pnpm build
```

## 5. Database Setup (API)
Run migrations and seed the database:
```sh
cd ../../apps/api
pnpm prisma migrate dev --name init
pnpm prisma db seed
```

## 6. Running the Apps
You can run each app in a separate terminal:

### API
```sh
cd apps/api
pnpm start:dev
```

### Client
```sh
cd apps/client
pnpm dev
```

### Admin
```sh
cd apps/admin
pnpm dev
```

## 7. Stripe Setup
- Get your Stripe API keys from the [Stripe Dashboard](https://dashboard.stripe.com/apikeys).
- Set `STRIPE_SECRET_KEY` in `apps/api/.env` and `VITE_STRIPE_PUBLISHABLE_KEY` in `apps/client/.env`.
- For local development, use Stripe test keys.

## 8. Useful Scripts
- `pnpm build` — Build all packages
- `pnpm dev` — Start the client or admin app in development mode
- `pnpm start:dev` — Start the API in development mode
- `pnpm prisma migrate dev` — Run database migrations
- `pnpm prisma db seed` — Seed the database

## 9. Troubleshooting
- If you change the Prisma schema, always run `pnpm prisma generate` in `apps/api`.
- If you add new UI components, rebuild the UI package (`pnpm build` in `packages/ui`).
- Make sure all `.env` files are present and correct.

---

For more details, see the README in each app's folder. 