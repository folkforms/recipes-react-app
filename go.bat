@echo off
set NODE_OPTIONS=--openssl-legacy-provider
set PORT=4001
start http://localhost:4001/
call npm run dev
