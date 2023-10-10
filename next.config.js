/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'images6.alphacoders.com',
                port:'',
            }
        ]
    }
}

module.exports = nextConfig
