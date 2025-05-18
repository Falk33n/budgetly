FROM oven/bun@sha256:a02c6162266611419fd84c8f96dbdbf3029532e2491314dee5172a27223e5428

WORKDIR /app

RUN apt-get update && \
  apt-get install -y openssl && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN bun install

COPY . .

RUN bun run build

EXPOSE 9047

CMD ["bun", "run", "preview", "--host", "0.0.0.0", "--port", "9047"]
