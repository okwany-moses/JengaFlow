import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

function assetSavePlugin() {
  return {
    name: 'asset-save-plugin',
    configureServer(server: any) {
      server.middlewares.use('/api/save-asset', (req: any, res: any) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }
        let body = '';
        req.on('data', (chunk: any) => {
          body += chunk;
        });
        req.on('end', () => {
          try {
            const { filename, base64 } = JSON.parse(body);
            if (!filename || !base64) {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: 'Missing filename or base64' }));
              return;
            }
            const cleanName = path.basename(filename);
            const rawBase64 = base64.replace(/^data:image\/\w+;base64,/, '');
            const buffer = Buffer.from(rawBase64, 'base64');

            const publicDir = path.resolve(__dirname, 'public');
            if (!fs.existsSync(publicDir)) {
              fs.mkdirSync(publicDir, { recursive: true });
            }

            fs.writeFileSync(path.resolve(__dirname, cleanName), buffer);
            fs.writeFileSync(path.resolve(publicDir, cleanName), buffer);

            if (cleanName === '286812.jpg' || cleanName === 'logo.jpg') {
              fs.writeFileSync(path.resolve(__dirname, '286812.jpg'), buffer);
              fs.writeFileSync(path.resolve(publicDir, '286812.jpg'), buffer);
              fs.writeFileSync(path.resolve(__dirname, 'logo.jpg'), buffer);
              fs.writeFileSync(path.resolve(publicDir, 'logo.jpg'), buffer);
            }

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true, saved: cleanName }));
          } catch (err: any) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: err.message }));
          }
        });
      });

      server.middlewares.use('/api/send-enquiry', (req: any, res: any) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }
        let body = '';
        req.on('data', (chunk: any) => {
          body += chunk;
        });
        req.on('end', () => {
          try {
            const enquiry = JSON.parse(body);
            const enquiryRecord = {
              id: Date.now(),
              date: new Date().toISOString(),
              name: enquiry.name || 'Anonymous',
              email: enquiry.email || 'N/A',
              business: enquiry.business || 'N/A',
              service: enquiry.service || 'N/A',
              message: enquiry.message || 'N/A',
            };

            const enquiriesFile = path.resolve(__dirname, 'enquiries.json');
            let enquiries = [];
            if (fs.existsSync(enquiriesFile)) {
              try {
                enquiries = JSON.parse(fs.readFileSync(enquiriesFile, 'utf8'));
              } catch (e) {
                enquiries = [];
              }
            }
            enquiries.push(enquiryRecord);
            fs.writeFileSync(enquiriesFile, JSON.stringify(enquiries, null, 2));

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
              success: true,
              message: 'Inquiry received and logged successfully.',
              recordId: enquiryRecord.id
            }));
          } catch (err: any) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: err.message }));
          }
        });
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), assetSavePlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
