/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'eyllrtwkvrcktvjlmpfp.supabase.co',
            port: '',
            pathname: '/storage/v1/object/public/cabin-imges/**'
        }]
    }
};

export default nextConfig;
