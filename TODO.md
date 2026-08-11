# Plan: Move Security Codes and Values to Environment Variables

## Steps

- [x] 1. Create `.env.example` - Document all required environment variables with placeholder values
- [x] 2. Update `server.js` - Remove all hardcoded secrets/fallbacks, require env vars, add startup validation (supports TEST/PROD pattern)
- [x] 3. Update `docker-compose.yml` - Pass all environment variables from `.env` file using `env_file` + interpolation
- [x] 4. Update `.dockerignore` - Exclude `.env` files from Docker build context
- [x] 5. Update `.gitignore` - Prevent `.env` files from being committed to git
- [x] 6. Verify `server.js` syntax (node --check passed)
- [x] 7. Verify `docker-compose.yml` config (docker-compose config passed)
