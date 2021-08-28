const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://developer-portfolio-dun.vercel.app';

export const mediumUserName = 'korayguler';

export const avatar = '/images/avatar.jpg';
