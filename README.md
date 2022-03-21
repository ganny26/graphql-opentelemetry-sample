# opentelemetry-graphql

This project collects traces from the backend GraphQL using OpenTelemetry.

## Available scripts

```sh
npm install

OTEL_EXPORTER_OTLP_ENDPOINT=127.0.0.1:4317 \
OTEL_RESOURCE_ATTRIBUTES=service.name=graphql-service \
node -r ./tracer.js index.js
```