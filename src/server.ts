import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

/**
 * SSRF and Header Injection Protection Middleware
 * This validates the Host and X-Forwarded-Host headers to prevent arbitrary request steering.
 */
const ALLOWED_HOSTS = new Set(['localhost', 'mrcl29.com', 'mrcl29.github.io']);

app.use((req, res, next) => {
  const hostHeader = (req.headers['x-forwarded-host'] ?? req.headers['host'])?.toString();
  const portHeader = req.headers['x-forwarded-port']?.toString();

  if (hostHeader) {
    const hostname = hostHeader.split(':')[0];
    // Reject if hostname contains invalid characters or is not in the allowlist
    if (!/^[a-z0-9.:-]+$/i.test(hostname) || !ALLOWED_HOSTS.has(hostname)) {
      console.warn(`[Security Check] Blocking request from untrusted host: ${hostname}`);
      res.status(400).send('Invalid Hostname');
      return;
    }
  }

  // Ensure port is strictly numeric if provided
  if (portHeader && !/^\d+$/.test(portHeader)) {
    console.warn(`[Security Check] Blocking request with invalid port: ${portHeader}`);
    res.status(400).send('Invalid Port');
    return;
  }

  next();
});

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/{*splat}', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
