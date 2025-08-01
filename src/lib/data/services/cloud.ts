import { ServiceConfig } from './types';
import { createService } from './builder';
import { 
  SiAmazon, SiDigitalocean, SiVercel, SiNetlify, SiCloudflare, SiHeroku, SiRailway,
  SiFastly, SiJsdelivr, SiGodaddy, SiNamecheap, SiGooglecloud, SiAmazons3, SiOracle, SiAlibabacloud,
  SiAkamai, SiBackblaze, SiUpcloud
} from 'react-icons/si';
import { FaServer } from 'react-icons/fa';

export const cloudServices: ServiceConfig[] = [
  // AWS Services
  createService('aws')
    .setName('Amazon Web Services')
    .setUrl('https://aws.amazon.com')
    .setDescription('Cloud computing platform')
    .setIcon(SiAmazon)
    .setCheckUrl('https://status.aws.amazon.com')
    .setCategory('cloud')
    .setPriority('critical')
    .setTags(['cloud', 'infrastructure', 'hosting'])
    .build(),

  createService('aws-s3')
    .setName('Amazon S3')
    .setUrl('https://aws.amazon.com/s3')
    .setDescription('Object storage service')
    .setIcon(SiAmazons3)
    .setCheckUrl('https://status.aws.amazon.com')
    .setCategory('cloud')
    .setPriority('high')
    .setTags(['storage', 'object-storage'])
    .build(),

  // Google Cloud
  createService('google-cloud')
    .setName('Google Cloud Platform')
    .setUrl('https://cloud.google.com')
    .setDescription('Cloud computing platform')
    .setIcon(SiGooglecloud)
    .setCheckUrl('https://status.cloud.google.com')
    .setCategory('cloud')
    .setPriority('critical')
    .setTags(['cloud', 'infrastructure', 'hosting'])
    .build(),

  // Microsoft Azure
  createService('azure')
    .setName('Microsoft Azure')
    .setUrl('https://azure.microsoft.com')
    .setDescription('Cloud computing platform')
    .setIcon(FaServer)
    .setCheckUrl('https://status.azure.com')
    .setCategory('cloud')
    .setPriority('critical')
    .setTags(['cloud', 'infrastructure', 'hosting'])
    .build(),

  // Oracle Cloud
  createService('oracle-cloud')
    .setName('Oracle Cloud')
    .setUrl('https://www.oracle.com/cloud')
    .setDescription('Cloud computing platform')
    .setIcon(SiOracle)
    .setCheckUrl('https://ocistatus.oraclecloud.com')
    .setCategory('cloud')
    .setPriority('high')
    .setTags(['cloud', 'infrastructure', 'hosting'])
    .build(),

  // Alibaba Cloud
  createService('alibaba-cloud')
    .setName('Alibaba Cloud')
    .setUrl('https://www.alibabacloud.com')
    .setDescription('Cloud computing platform')
    .setIcon(SiAlibabacloud)
    .setCheckUrl('https://status.alibabacloud.com')
    .setCategory('cloud')
    .setPriority('high')
    .setTags(['cloud', 'infrastructure', 'hosting'])
    .build(),

  // DigitalOcean
  createService('digitalocean')
    .setName('DigitalOcean')
    .setUrl('https://www.digitalocean.com')
    .setDescription('Cloud infrastructure provider')
    .setIcon(SiDigitalocean)
    .setCheckUrl('https://status.digitalocean.com')
    .setCategory('cloud')
    .setPriority('high')
    .setTags(['cloud', 'vps', 'hosting'])
    .build(),

  // Vercel
  createService('vercel')
    .setName('Vercel')
    .setUrl('https://vercel.com')
    .setDescription('Cloud platform for static sites and serverless functions')
    .setIcon(SiVercel)
    .setCheckUrl('https://vercel-status.com')
    .setCategory('cloud')
    .setPriority('high')
    .setTags(['hosting', 'static', 'serverless'])
    .build(),

  // Netlify
  createService('netlify')
    .setName('Netlify')
    .setUrl('https://www.netlify.com')
    .setDescription('Web developer platform')
    .setIcon(SiNetlify)
    .setCheckUrl('https://www.netlifystatus.com')
    .setCategory('cloud')
    .setPriority('high')
    .setTags(['hosting', 'static', 'cms'])
    .build(),

  // Cloudflare
  createService('cloudflare')
    .setName('Cloudflare')
    .setUrl('https://www.cloudflare.com')
    .setDescription('CDN and security services')
    .setIcon(SiCloudflare)
    .setCheckUrl('https://www.cloudflarestatus.com')
    .setCategory('cloud')
    .setPriority('critical')
    .setTags(['cdn', 'security', 'dns'])
    .build(),

  // Heroku
  createService('heroku')
    .setName('Heroku')
    .setUrl('https://www.heroku.com')
    .setDescription('Cloud platform as a service')
    .setIcon(SiHeroku)
    .setCheckUrl('https://status.heroku.com')
    .setCategory('cloud')
    .setPriority('high')
    .setTags(['paas', 'hosting', 'deployment'])
    .build(),

  // Railway
  createService('railway')
    .setName('Railway')
    .setUrl('https://railway.app')
    .setDescription('Deploy apps with ease')
    .setIcon(SiRailway)
    .setCheckUrl('https://railway.app')
    .setCategory('cloud')
    .setPriority('medium')
    .setTags(['deployment', 'hosting'])
    .build(),

  // Fastly
  createService('fastly')
    .setName('Fastly')
    .setUrl('https://www.fastly.com')
    .setDescription('Edge cloud platform')
    .setIcon(SiFastly)
    .setCheckUrl('https://status.fastly.com')
    .setCategory('cloud')
    .setPriority('high')
    .setTags(['cdn', 'edge', 'performance'])
    .build(),

  // jsDelivr
  createService('jsdelivr')
    .setName('jsDelivr')
    .setUrl('https://www.jsdelivr.com')
    .setDescription('CDN for npm and GitHub')
    .setIcon(SiJsdelivr)
    .setCheckUrl('https://www.jsdelivr.com')
    .setCategory('cloud')
    .setPriority('medium')
    .setTags(['cdn', 'npm', 'github'])
    .build(),

  // GoDaddy
  createService('godaddy')
    .setName('GoDaddy')
    .setUrl('https://www.godaddy.com')
    .setDescription('Domain registrar and web hosting')
    .setIcon(SiGodaddy)
    .setCheckUrl('https://www.godaddy.com')
    .setCategory('cloud')
    .setPriority('medium')
    .setTags(['domains', 'hosting', 'registrar'])
    .build(),

  // Namecheap
  createService('namecheap')
    .setName('Namecheap')
    .setUrl('https://www.namecheap.com')
    .setDescription('Domain registrar and web hosting')
    .setIcon(SiNamecheap)
    .setCheckUrl('https://www.namecheap.com')
    .setCategory('cloud')
    .setPriority('medium')
    .setTags(['domains', 'hosting', 'registrar'])
    .build(),

  // Akamai
  createService('akamai')
    .setName('Akamai')
    .setUrl('https://www.akamai.com')
    .setDescription('Content delivery network')
    .setIcon(SiAkamai)
    .setCheckUrl('https://www.akamai.com')
    .setCategory('cloud')
    .setPriority('high')
    .setTags(['cdn', 'performance', 'security'])
    .build(),

  // Backblaze
  createService('backblaze')
    .setName('Backblaze')
    .setUrl('https://www.backblaze.com')
    .setDescription('Cloud storage and backup')
    .setIcon(SiBackblaze)
    .setCheckUrl('https://www.backblaze.com')
    .setCategory('cloud')
    .setPriority('medium')
    .setTags(['storage', 'backup', 'b2'])
    .build(),

  // UpCloud
  createService('upcloud')
    .setName('UpCloud')
    .setUrl('https://upcloud.com')
    .setDescription('High-performance cloud infrastructure')
    .setIcon(SiUpcloud)
    .setCheckUrl('https://upcloud.com')
    .setCategory('cloud')
    .setPriority('medium')
    .setTags(['vps', 'hosting', 'infrastructure'])
    .build(),
]; 