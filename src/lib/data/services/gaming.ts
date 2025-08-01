import { ServiceConfig } from './types';
import { createService } from './builder';
import { 
  SiSteam, SiRockstargames, SiFivem, SiPlaystation, SiNintendo, SiItchdotio, SiRoblox,
  SiEpicgames, SiTwitch, SiDiscord, SiReddit, SiYoutube
} from 'react-icons/si';
import { FaXbox } from 'react-icons/fa';

export const gamingServices: ServiceConfig[] = [
  // FiveM Services
  createService('fivem')
    .setName('FiveM')
    .setUrl('https://fivem.net')
    .setDescription('Grand Theft Auto V multiplayer modification')
    .setIcon(SiFivem)
    .setCheckUrl('https://status.cfx.re/api/v2/status.json')
    .setCategory('gaming')
    .setPriority('high')
    .build(),

  createService('fivem-servers')
    .setName('FiveM Server List')
    .setUrl('https://servers-frontend.fivem.net')
    .setDescription('FiveM server listing and discovery API')
    .setIcon(SiFivem)
    .setCheckUrl('https://servers-frontend.fivem.net/api/servers/top/en')
    .setCategory('gaming')
    .setPriority('medium')
    .build(),

  createService('fivem-runtime')
    .setName('FiveM Runtime')
    .setUrl('https://runtime.fivem.net')
    .setDescription('FiveM runtime services and global statistics')
    .setIcon(SiFivem)
    .setCheckUrl('https://runtime.fivem.net/counts.json')
    .setCategory('gaming')
    .setPriority('high')
    .build(),

  createService('fivem-lambda')
    .setName('FiveM Lambda')
    .setUrl('https://lambda.fivem.net')
    .setDescription('FiveM lambda services for playtime and analytics')
    .setIcon(SiFivem)
    .setCheckUrl('https://lambda.fivem.net/api/ticket/playtimes/')
    .setCategory('gaming')
    .setPriority('medium')
    .build(),

  createService('fivem-changelogs')
    .setName('FiveM Changelogs')
    .setUrl('https://changelogs-live.fivem.net')
    .setDescription('FiveM changelog and version information')
    .setIcon(SiFivem)
    .setCheckUrl('https://changelogs-live.fivem.net/api/changelog/versions/')
    .setCategory('gaming')
    .setPriority('low')
    .build(),

  createService('fivem-policy')
    .setName('FiveM Policy')
    .setUrl('https://policy-live.fivem.net')
    .setDescription('FiveM policy and user information services')
    .setIcon(SiFivem)
    .setCheckUrl('https://policy-live.fivem.net/api/getUserInfo/')
    .setCategory('gaming')
    .setPriority('medium')
    .build(),

  createService('fivem-promotions')
    .setName('FiveM Promotions')
    .setUrl('https://runtime.fivem.net')
    .setDescription('FiveM promotion targeting and configuration')
    .setIcon(SiFivem)
    .setCheckUrl('https://runtime.fivem.net/promotions_targeting.json')
    .setCategory('gaming')
    .setPriority('low')
    .build(),

  createService('fivem-tweets')
    .setName('FiveM Social')
    .setUrl('https://runtime.fivem.net')
    .setDescription('FiveM Twitter feed integration')
    .setIcon(SiFivem)
    .setCheckUrl('https://runtime.fivem.net/tweets.json')
    .setCategory('gaming')
    .setPriority('low')
    .build(),

  createService('fivem-nui')
    .setName('FiveM NUI')
    .setUrl('https://runtime.fivem.net')
    .setDescription('FiveM NUI blacklist configuration')
    .setIcon(SiFivem)
    .setCheckUrl('https://runtime.fivem.net/nui-blacklist.json')
    .setCategory('gaming')
    .setPriority('low')
    .build(),

  // Steam
  createService('steam')
    .setName('Steam')
    .setUrl('https://store.steampowered.com')
    .setDescription('Digital distribution platform for games')
    .setIcon(SiSteam)
    .setCheckUrl('https://store.steampowered.com')
    .setCategory('gaming')
    .setPriority('high')
    .setTags(['games', 'distribution', 'pc'])
    .build(),

  // Epic Games
  createService('epic-games')
    .setName('Epic Games Store')
    .setUrl('https://store.epicgames.com')
    .setDescription('Digital video game storefront')
    .setIcon(SiEpicgames)
    .setCheckUrl('https://store.epicgames.com')
    .setCategory('gaming')
    .setPriority('high')
    .setTags(['games', 'distribution', 'pc', 'fortnite'])
    .build(),

  // Xbox
  createService('xbox')
    .setName('Xbox Live')
    .setUrl('https://www.xbox.com')
    .setDescription('Microsoft Xbox gaming network')
    .setIcon(FaXbox)
    .setCheckUrl('https://www.xbox.com')
    .setCategory('gaming')
    .setPriority('high')
    .setTags(['console', 'microsoft', 'xbox-series-x', 'xbox-one'])
    .build(),

  // Twitch
  createService('twitch')
    .setName('Twitch')
    .setUrl('https://www.twitch.tv')
    .setDescription('Live streaming platform for gamers')
    .setIcon(SiTwitch)
    .setCheckUrl('https://www.twitch.tv')
    .setCategory('gaming')
    .setPriority('high')
    .setTags(['streaming', 'esports', 'live'])
    .build(),

  // Rockstar Games
  createService('rockstar-games')
    .setName('Rockstar Games')
    .setUrl('https://www.rockstargames.com')
    .setDescription('Game development and publishing company')
    .setIcon(SiRockstargames)
    .setCheckUrl('https://www.rockstargames.com')
    .setCategory('gaming')
    .setPriority('medium')
    .setTags(['games', 'publisher', 'gta'])
    .build(),

  // PlayStation
  createService('playstation')
    .setName('PlayStation Network')
    .setUrl('https://www.playstation.com')
    .setDescription('Sony PlayStation gaming network')
    .setIcon(SiPlaystation)
    .setCheckUrl('https://www.playstation.com')
    .setCategory('gaming')
    .setPriority('high')
    .setTags(['console', 'sony', 'ps5', 'ps4'])
    .build(),

  // Nintendo
  createService('nintendo')
    .setName('Nintendo')
    .setUrl('https://www.nintendo.com')
    .setDescription('Nintendo gaming platform and services')
    .setIcon(SiNintendo)
    .setCheckUrl('https://www.nintendo.com')
    .setCategory('gaming')
    .setPriority('high')
    .setTags(['console', 'switch', 'wii'])
    .build(),

  // itch.io
  createService('itch-io')
    .setName('itch.io')
    .setUrl('https://itch.io')
    .setDescription('Indie game marketplace and platform')
    .setIcon(SiItchdotio)
    .setCheckUrl('https://itch.io')
    .setCategory('gaming')
    .setPriority('medium')
    .setTags(['indie', 'games', 'marketplace'])
    .build(),

  // Roblox
  createService('roblox')
    .setName('Roblox')
    .setUrl('https://www.roblox.com')
    .setDescription('Online game platform and game creation system')
    .setIcon(SiRoblox)
    .setCheckUrl('https://www.roblox.com')
    .setCategory('gaming')
    .setPriority('high')
    .setTags(['platform', 'creation', 'kids'])
    .build(),

  // Discord
  createService('discord-gaming')
    .setName('Discord')
    .setUrl('https://discord.com')
    .setDescription('Voice, video and text communication for gamers')
    .setIcon(SiDiscord)
    .setCheckUrl('https://discordstatus.com/api/v2/summary.json')
    .setCategory('gaming')
    .setPriority('high')
    .setTags(['communication', 'voice', 'gaming', 'communities'])
    .build(),

  // Reddit Gaming
  createService('reddit-gaming')
    .setName('Reddit Gaming')
    .setUrl('https://www.reddit.com/r/gaming')
    .setDescription('Gaming community on Reddit')
    .setIcon(SiReddit)
    .setCheckUrl('https://www.reddit.com/r/gaming')
    .setCategory('gaming')
    .setPriority('medium')
    .setTags(['community', 'discussion', 'social'])
    .build(),

  // YouTube Gaming
  createService('youtube-gaming')
    .setName('YouTube Gaming')
    .setUrl('https://www.youtube.com/gaming')
    .setDescription('Gaming content on YouTube')
    .setIcon(SiYoutube)
    .setCheckUrl('https://www.youtube.com/gaming')
    .setCategory('gaming')
    .setPriority('high')
    .setTags(['video', 'content', 'streaming'])
    .build(),
]; 