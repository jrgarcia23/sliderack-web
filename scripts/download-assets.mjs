import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, basename } from 'path';

const ASSETS = [
  // Logo
  { url: 'https://levrack.com/wp-content/uploads/2025/09/Levrack-logo-3.png', path: 'public/images/levrack-logo.png' },
  { url: 'https://levrack.com/wp-content/uploads/2021/10/Levrack-Logo-Reversed-e1634310762170.png', path: 'public/images/levrack-logo-reversed.png' },
  { url: 'https://levrack.com/wp-content/uploads/2018/01/logo-big.png', path: 'public/seo/logo-big.png' },

  // Favicons
  { url: 'https://levrack.com/wp-content/uploads/2018/01/favicon-100x100.png', path: 'public/seo/favicon-100x100.png' },
  { url: 'https://levrack.com/wp-content/uploads/2018/01/favicon.png', path: 'public/seo/favicon.png' },

  // Product images - Levracks
  { url: 'https://levrack.com/wp-content/uploads/2024/10/12ft-gray-1025x1025.png', path: 'public/images/products/12ft-gray.png' },
  { url: 'https://levrack.com/wp-content/uploads/2024/10/10ft-gray-1025x1025.png', path: 'public/images/products/10ft-gray.png' },
  { url: 'https://levrack.com/wp-content/uploads/2024/10/8ft-gray-1025x1025.png', path: 'public/images/products/8ft-gray.png' },
  { url: 'https://levrack.com/wp-content/uploads/2024/10/7ft-gray-1025x1025.png', path: 'public/images/products/7ft-gray.png' },

  // Product images - Workstations
  { url: 'https://levrack.com/wp-content/uploads/2020/09/Levrack-Workstations-4-foot.webp', path: 'public/images/products/workstation-4ft.webp' },
  { url: 'https://levrack.com/wp-content/uploads/2020/09/Levrack-Workstation-Plus-4-foot.webp', path: 'public/images/products/workstation-plus-4ft.webp' },
  { url: 'https://levrack.com/wp-content/uploads/2022/08/MWS-448-1.jpg', path: 'public/images/products/mobile-workstation-4ft.jpg' },
  { url: 'https://levrack.com/wp-content/uploads/2022/08/MWS-848-1.jpg', path: 'public/images/products/mobile-workstation-8ft.jpg' },
  { url: 'https://levrack.com/wp-content/uploads/2024/04/Perforated-Top-Mobile-Workstation-4-foot.png', path: 'public/images/products/mobile-workstation-perf-4ft.png' },

  // Accessories
  { url: 'https://levrack.com/wp-content/uploads/2024/04/Workstation-Drawers.png', path: 'public/images/products/workstation-drawers.png' },
  { url: 'https://levrack.com/wp-content/uploads/2024/12/Gift-Card-1-1025x1025.jpg', path: 'public/images/products/gift-card.jpg' },
  { url: 'https://levrack.com/wp-content/uploads/2026/01/Levrack-Grid-48H48D.jpg', path: 'public/images/products/grid-system.jpg' },
  { url: 'https://levrack.com/wp-content/uploads/2019/10/Levrack_Drawers.jpg', path: 'public/images/products/storage-drawers.jpg' },

  // GIF
  { url: 'https://levrack.com/wp-content/uploads/2022/03/levrack-illustration-400px.gif', path: 'public/images/levrack-illustration.gif' },

  // Background images
  { url: 'https://levrack.com/wp-content/uploads/2024/10/12-foot-Levracks-in-Garage.jpg', path: 'public/images/bg/levracks-in-garage.jpg' },
  { url: 'https://levrack.com/wp-content/uploads/2022/01/jay-leno-on-antique-motorcycle-1080px.jpg', path: 'public/images/bg/jay-leno-motorcycle.jpg' },
  { url: 'https://levrack.com/wp-content/uploads/2022/01/12ft-in-truck-garage-1.jpg', path: 'public/images/bg/12ft-truck-garage.jpg' },

  // Brand logos
  { url: 'https://levrack.com/wp-content/uploads/2022/01/jay_lenos_garage-logo-01.png', path: 'public/images/brands/jay-lenos-garage.png' },
  { url: 'https://levrack.com/wp-content/uploads/2023/08/HV3-Foundation-logo.png', path: 'public/images/brands/hv3-foundation.png' },
  { url: 'https://levrack.com/wp-content/uploads/2023/08/Tyson-Lamb-logo-white.png', path: 'public/images/brands/tyson-lamb.png' },
  { url: 'https://levrack.com/wp-content/uploads/2023/08/Jordan-Davis-logo-white.png', path: 'public/images/brands/jordan-davis.png' },
  { url: 'https://levrack.com/wp-content/uploads/2023/08/FowlCo-logo-white.png', path: 'public/images/brands/fowlco.png' },
  { url: 'https://levrack.com/wp-content/uploads/2023/08/Thomas-Rhett-logo-white.png', path: 'public/images/brands/thomas-rhett.png' },
  { url: 'https://levrack.com/wp-content/uploads/2020/06/HOME_0001_brands-we-like_0006_Emory-Motorsports-35_07d4fa6190b3c221b790e32d720143a2.png', path: 'public/images/brands/emory-motorsports.png' },
  { url: 'https://levrack.com/wp-content/uploads/2020/06/HOME_0008_brands-we-like_0000_Layer-6_7754421224d91994aa3af6b25adc3dfc.png', path: 'public/images/brands/brand-layer-6.png' },
  { url: 'https://levrack.com/wp-content/uploads/2020/06/HOME_0006_brands-we-like_0002_026cd079a7cbdddd119d_639c91f88b6efe7f6cfd9b719a1202fb.png', path: 'public/images/brands/brand-026cd.png' },
  { url: 'https://levrack.com/wp-content/uploads/2020/06/HOME_0003_brands-we-like_0004_Layer-3_08bd1cafaf330f9a3270dcf8ee8c4da8.png', path: 'public/images/brands/brand-layer-3.png' },
  { url: 'https://levrack.com/wp-content/uploads/2020/06/HOME_0002_brands-we-like_0005_Layer-4_a9ba1d4b38b1d3509872d4afee1673e4.png', path: 'public/images/brands/brand-layer-4.png' },

  // Video
  { url: 'https://levrack.com/wp-content/uploads/2024/11/HOMEPAGE.mp4', path: 'public/videos/homepage.mp4' },
];

async function downloadFile(url, path) {
  try {
    const dir = dirname(path);
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

    const res = await fetch(url);
    if (!res.ok) { console.error(`FAIL ${res.status}: ${url}`); return; }

    const buffer = Buffer.from(await res.arrayBuffer());
    writeFileSync(path, buffer);
    console.log(`OK: ${path} (${(buffer.length / 1024).toFixed(0)}KB)`);
  } catch (e) {
    console.error(`ERR: ${url} - ${e.message}`);
  }
}

async function main() {
  console.log(`Downloading ${ASSETS.length} assets...`);

  // Batch 4 at a time
  for (let i = 0; i < ASSETS.length; i += 4) {
    const batch = ASSETS.slice(i, i + 4);
    await Promise.all(batch.map(a => downloadFile(a.url, a.path)));
  }

  console.log('Done!');
}

main();
