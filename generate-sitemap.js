const fs = require('fs');
const path = require('path');
const { blogPosts } = require('./data/blogPosts.ts'); // Will read raw strings if we bypass TS, let's just extract slugs manually or run via ts-node.

// Simplified script for generating sitemap directly
const slugs = [
  "pcos-symptoms-causes-treatment-guide",
  "early-pregnancy-symptoms-guide",
  "endometriosis-symptoms-diagnosis-treatment",
  "high-risk-pregnancy-causes-care-guide",
  "irregular-periods-causes-treatment-kanpur",
  "fertility-after-35-tips-guidelines",
  "signs-of-labour-guide-expecting-mothers",
  "pregnancy-nutrition-diet-guide-kanpur",
  "can-i-get-pregnant-with-pcos-fertility-guide",
  "endometriosis-pelvic-pain-infertility-guide",
  "thyroid-disorders-female-fertility-guide",
  "menopause-perimenopause-complete-health-guide",
  "uterine-fibroids-symptoms-causes-treatment",
  "pregnancy-warning-signs-when-to-call-doctor",
  "morning-sickness-management-tips-myths-facts",
  "natural-ways-to-improve-fertility-women",
  "common-gynecological-problems-prevention-guide",
  "safe-exercise-during-pregnancy-tips-kanpur",
  "vitamin-c-benefits-pregnancy-mother-baby",
  "ectopic-pregnancy-symptoms-risks-treatment-kanpur",
  "managing-pregnancy-mood-swings-tips"
];

const domain = "https://medfemme.in";
const today = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${domain}/</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>${domain}/about</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>${domain}/services</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>${domain}/appointment</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>${domain}/contact</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>${domain}/blog</loc><lastmod>${today}</lastmod><changefreq>daily</changefreq><priority>0.8</priority></url>
  <url><loc>${domain}/privacy</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.3</priority></url>
  <url><loc>${domain}/terms</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.3</priority></url>
  <url><loc>${domain}/sitemap</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.5</priority></url>
  <url><loc>${domain}/gallery</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  ${slugs.map(slug => `
  <url>
    <loc>${domain}/blog/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully with all 21 blog posts!');
