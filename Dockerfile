FROM oven/bun:latest

WORKDIR /app

COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

EXPOSE 5173 5174

ENV NODE_ENV=production

CMD ["sh", "-c", "bun run preview & bun run resend:server"]
