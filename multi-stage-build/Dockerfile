FROM golang:latest AS builder
WORKDIR /go/src/
COPY main.go .
RUN go build -o build/ main.go

FROM scratch
COPY --from=builder go/src/build/main .
ENTRYPOINT [ "./main" ]