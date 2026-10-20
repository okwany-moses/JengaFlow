import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

function enquiryPlugin() {
  return {
    name: 'enquiry-plugin',
    configureServer(server: any) {
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
    plugins: [react(), tailwindcss(), enquiryPlugin()],
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
