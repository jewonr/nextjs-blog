/** @type {import('next').NextConfig} */
// const withPWA = require("next-pwa");
// const runtimeCaching = require("next-pwa/cache");

// module.exports = withPWA({
// 	reactStrictMode: true,
// 	pwa: {
// 		dest: "public",
// 		register: true,
// 		skipWaiting: true,
// 		runtimeCaching,
// 		buildExcludes: [/middleware-manifest.json$/]
// 	}
// });

// const withPWA = require('next-pwa')
// const runtimeCaching = require('next-pwa/cache')  

// module.exports = withPWA({
//   pwa: {
//     dest: 'public',
//     runtimeCaching,
//   },
// })

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
});

const nextConfig = withPWA({
    // next config
});
module.exports = nextConfig;