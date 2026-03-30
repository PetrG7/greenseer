# build the Rust application
FROM rust:1.85-bookworm as builder
WORKDIR /app
# copy source code into the container
COPY . .
# build -> release mode
RUN cargo build --release

# image for docker - minimal
FROM debian:bookworm-slim
WORKDIR /app

# copy the binar the compiled binary from the builder stage
COPY --from=builder /app/target/release/greenseer .

# copy the stylesheet and config that is inside the static file so it does work
# observe that i do not have to copy the .jinja templates, because they get baked into the binary
# cool
COPY --from=builder /app/static/ ./static

# expose the port -> i think this is the default for axum but will check
EXPOSE 8080

# Command to run the binary
CMD ["./greenseer"]
