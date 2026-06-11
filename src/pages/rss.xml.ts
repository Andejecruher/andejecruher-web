import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { SITE_SEO } from '../seo/config';

const escapeXml = (value: string) => value.replace(/[<>&'\"]/g, (char) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[char] ?? char);

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog', ({ data }) => data.status === 'published')).sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
  const items = posts.map((post) => { const slug = post.id.replace(/\.[^.]+$/, ''); const url = `${SITE_SEO.siteUrl}/blog/${slug}`; return `<item><title>${escapeXml(post.data.title)}</title><link>${url}</link><guid>${url}</guid><description>${escapeXml(post.data.description)}</description><pubDate>${post.data.pubDate.toUTCString()}</pubDate><category>${escapeXml(post.data.category)}</category></item>`; }).join('');
  const body = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${SITE_SEO.siteName} Blog</title><link>${SITE_SEO.siteUrl}/blog</link><description>${escapeXml(SITE_SEO.defaultDescription)}</description><language>es</language>${items}</channel></rss>`;
  return new Response(body, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
