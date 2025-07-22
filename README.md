# os-commerce

## Run in local

1. Clone repository
2. Install dependencies, run: `npm install`.
3. Rename the `.env.example` file to `.env`, add your env variables.
   Use the `DATABASE_URL` that prisma gives to you.
4. Run seed: `npm run seed`.
5. Run the project: `npm run dev`.
6. Apply migrations with: `npx prisma migrate dev`.
7. Manage your data: `npx prisma studio`

## Run in prod
