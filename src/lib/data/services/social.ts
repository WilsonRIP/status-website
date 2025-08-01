import { ServiceConfig } from './types';
import { createService } from './builder';
import { 
  SiDiscord, SiSlack, SiZoom, SiWhatsapp, SiTelegram, SiLinkedin, SiInstagram, 
  SiReddit, SiSignal, SiMattermost, SiRocketdotchat, SiZulip, SiMatrix, SiElement,
  SiLine, SiViber, SiKakaotalk, SiWechat, SiDiscourse
} from 'react-icons/si';
import { BsMicrosoftTeams } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';

export const socialServices: ServiceConfig[] = [
  // Discord
  createService('discord')
    .setName('Discord')
    .setUrl('https://discord.com')
    .setDescription('Voice, video and text communication service for communities')
    .setIcon(SiDiscord)
    .setCheckUrl('https://discordstatus.com/api/v2/summary.json')
    .setCategory('social')
    .setPriority('high')
    .setTags(['communication', 'voice', 'video', 'gaming', 'communities'])
    .build(),

  // Slack
  createService('slack')
    .setName('Slack')
    .setUrl('https://slack.com')
    .setDescription('Team communication platform for businesses')
    .setIcon(SiSlack)
    .setCheckUrl('https://slack-status.com/api/v2.0.0/current')
    .setCategory('social')
    .setPriority('high')
    .setTags(['communication', 'team', 'business', 'collaboration'])
    .build(),

  // Microsoft Teams
  createService('microsoft-teams')
    .setName('Microsoft Teams')
    .setUrl('https://teams.microsoft.com')
    .setDescription('Business communication suite for collaboration')
    .setIcon(BsMicrosoftTeams)
    .setCheckUrl('https://portal.office.com/servicestatus/')
    .setCategory('social')
    .setPriority('high')
    .setTags(['communication', 'business', 'microsoft', 'collaboration'])
    .build(),

  // Zoom
  createService('zoom')
    .setName('Zoom')
    .setUrl('https://zoom.us')
    .setDescription('Video conferencing and online meeting platform')
    .setIcon(SiZoom)
    .setCheckUrl('https://status.zoom.us')
    .setCategory('social')
    .setPriority('high')
    .setTags(['video-conferencing', 'meetings', 'remote-work', 'communication'])
    .build(),

  // WhatsApp Web
  createService('whatsapp-web')
    .setName('WhatsApp Web')
    .setUrl('https://web.whatsapp.com')
    .setDescription('Web-based messaging platform')
    .setIcon(SiWhatsapp)
    .setCheckUrl('https://web.whatsapp.com')
    .setCategory('social')
    .setPriority('medium')
    .setTags(['messaging', 'mobile', 'communication', 'social'])
    .build(),

  // Telegram
  createService('telegram')
    .setName('Telegram')
    .setUrl('https://telegram.org')
    .setDescription('Secure messaging service with cloud storage')
    .setIcon(SiTelegram)
    .setCheckUrl('https://telegram.org')
    .setCategory('social')
    .setPriority('medium')
    .setTags(['messaging', 'secure', 'cloud-storage', 'communication'])
    .build(),

  // Twitter/X
  createService('twitter')
    .setName('Twitter/X')
    .setUrl('https://twitter.com')
    .setDescription('Social media platform for microblogging and news')
    .setIcon(AiFillTwitterCircle)
    .setCheckUrl('https://status.x.com')
    .setCategory('social')
    .setPriority('high')
    .setTags(['social-media', 'microblogging', 'news', 'communication'])
    .build(),

  // LinkedIn
  createService('linkedin')
    .setName('LinkedIn')
    .setUrl('https://www.linkedin.com')
    .setDescription('Professional networking and career platform')
    .setIcon(SiLinkedin)
    .setCheckUrl('https://www.linkedin-status.com')
    .setCategory('social')
    .setPriority('medium')
    .setTags(['professional', 'networking', 'career', 'business'])
    .build(),

  // Instagram
  createService('instagram')
    .setName('Instagram')
    .setUrl('https://www.instagram.com')
    .setDescription('Photo and video sharing social media platform')
    .setIcon(SiInstagram)
    .setCheckUrl('https://www.instagram.com')
    .setCategory('social')
    .setPriority('high')
    .setTags(['social-media', 'photos', 'videos', 'sharing'])
    .build(),

  // Reddit
  createService('reddit')
    .setName('Reddit')
    .setUrl('https://www.reddit.com')
    .setDescription('Social news aggregation and discussion website')
    .setIcon(SiReddit)
    .setCheckUrl('https://www.redditstatus.com/api/v2/summary.json')
    .setCategory('social')
    .setPriority('medium')
    .setTags(['social-media', 'news', 'discussion', 'communities'])
    .build(),

  // Signal
  createService('signal')
    .setName('Signal')
    .setUrl('https://signal.org')
    .setDescription('Encrypted messaging app for secure communication')
    .setIcon(SiSignal)
    .setCheckUrl('https://signal.org')
    .setCategory('social')
    .setPriority('medium')
    .setTags(['messaging', 'encrypted', 'secure', 'privacy'])
    .build(),

  // Mattermost
  createService('mattermost')
    .setName('Mattermost')
    .setUrl('https://mattermost.com')
    .setDescription('Open source messaging platform for teams')
    .setIcon(SiMattermost)
    .setCheckUrl('https://mattermost.com')
    .setCategory('social')
    .setPriority('low')
    .setTags(['messaging', 'open-source', 'teams', 'self-hosted'])
    .build(),

  // Rocket.Chat
  createService('rocketchat')
    .setName('Rocket.Chat')
    .setUrl('https://rocket.chat')
    .setDescription('Open source team communication platform')
    .setIcon(SiRocketdotchat)
    .setCheckUrl('https://rocket.chat')
    .setCategory('social')
    .setPriority('low')
    .setTags(['messaging', 'open-source', 'teams', 'self-hosted'])
    .build(),

  // Zulip
  createService('zulip')
    .setName('Zulip')
    .setUrl('https://zulip.com')
    .setDescription('Open source team chat with threaded conversations')
    .setIcon(SiZulip)
    .setCheckUrl('https://zulip.com')
    .setCategory('social')
    .setPriority('low')
    .setTags(['messaging', 'open-source', 'teams', 'threaded'])
    .build(),

  // Matrix
  createService('matrix')
    .setName('Matrix')
    .setUrl('https://matrix.org')
    .setDescription('Open standard for decentralized communication')
    .setIcon(SiMatrix)
    .setCheckUrl('https://matrix.org')
    .setCategory('social')
    .setPriority('low')
    .setTags(['messaging', 'decentralized', 'open-standard', 'protocol'])
    .build(),

  // Element
  createService('element')
    .setName('Element')
    .setUrl('https://element.io')
    .setDescription('Matrix-based messaging app for secure communication')
    .setIcon(SiElement)
    .setCheckUrl('https://element.io')
    .setCategory('social')
    .setPriority('low')
    .setTags(['messaging', 'matrix', 'secure', 'privacy'])
    .build(),

  // LINE
  createService('line')
    .setName('LINE')
    .setUrl('https://line.me')
    .setDescription('Messaging app popular in Asia')
    .setIcon(SiLine)
    .setCheckUrl('https://line.me')
    .setCategory('social')
    .setPriority('medium')
    .setTags(['messaging', 'asia', 'mobile', 'communication'])
    .build(),

  // Viber
  createService('viber')
    .setName('Viber')
    .setUrl('https://www.viber.com')
    .setDescription('Messaging and calling app with stickers and games')
    .setIcon(SiViber)
    .setCheckUrl('https://www.viber.com')
    .setCategory('social')
    .setPriority('medium')
    .setTags(['messaging', 'calling', 'stickers', 'games'])
    .build(),

  // KakaoTalk
  createService('kakaotalk')
    .setName('KakaoTalk')
    .setUrl('https://www.kakaocorp.com')
    .setDescription('Korean messaging app with social features')
    .setIcon(SiKakaotalk)
    .setCheckUrl('https://www.kakaocorp.com')
    .setCategory('social')
    .setPriority('low')
    .setTags(['messaging', 'korean', 'social', 'mobile'])
    .build(),

  // WeChat
  createService('wechat')
    .setName('WeChat')
    .setUrl('https://www.wechat.com')
    .setDescription('Chinese messaging and social media app')
    .setIcon(SiWechat)
    .setCheckUrl('https://www.wechat.com')
    .setCategory('social')
    .setPriority('medium')
    .setTags(['messaging', 'chinese', 'social-media', 'mobile-payment'])
    .build(),

  // Skype
  createService('skype')
    .setName('Skype')
    .setUrl('https://www.skype.com')
    .setDescription('Video calling and messaging service')
    .setIcon(BsMicrosoftTeams)
    .setCheckUrl('https://www.skype.com')
    .setCategory('social')
    .setPriority('medium')
    .setTags(['video-calling', 'messaging', 'microsoft', 'communication'])
    .build(),

  // Discourse
  createService('discourse')
    .setName('Discourse')
    .setUrl('https://www.discourse.org')
    .setDescription('Open source discussion platform for communities')
    .setIcon(SiDiscourse)
    .setCheckUrl('https://www.discourse.org')
    .setCategory('social')
    .setPriority('low')
    .setTags(['discussion', 'open-source', 'communities', 'forums'])
    .build(),
]; 