import { ServiceConfig } from './types';
import { createService } from './builder';
import { 
  SiNetflix, SiSpotify, SiYoutube, SiCrunchyroll, 
  SiFunimation, SiAmazonprime, SiAppletv, SiHbo, SiTidal, SiSoundcloud, SiPandora, SiIheartradio,
  SiShazam, SiBandcamp, SiAudiomack, SiMixcloud
} from 'react-icons/si';
import { FaPlay, FaMusic, FaVideo, FaFilm, FaTv, FaHeadphones } from 'react-icons/fa';

export const entertainmentServices: ServiceConfig[] = [
  // Video Streaming Services
  createService('netflix')
    .setName('Netflix')
    .setUrl('https://www.netflix.com')
    .setDescription('Streaming service for movies and TV shows')
    .setIcon(SiNetflix)
    .setCheckUrl('https://www.netflix.com')
    .setCategory('entertainment')
    .setPriority('high')
    .setTags(['streaming', 'movies', 'tv-shows', 'video'])
    .build(),

  createService('youtube')
    .setName('YouTube')
    .setUrl('https://www.youtube.com')
    .setDescription('Video sharing and streaming platform')
    .setIcon(SiYoutube)
    .setCheckUrl('https://www.youtube.com')
    .setCategory('entertainment')
    .setPriority('critical')
    .setTags(['video', 'streaming', 'content', 'social'])
    .build(),

  createService('disney-plus')
    .setName('Disney+')
    .setUrl('https://www.disneyplus.com')
    .setDescription('Disney streaming service')
    .setIcon(FaPlay)
    .setCheckUrl('https://www.disneyplus.com')
    .setCategory('entertainment')
    .setPriority('high')
    .setTags(['streaming', 'disney', 'movies', 'family'])
    .build(),

  createService('hulu')
    .setName('Hulu')
    .setUrl('https://www.hulu.com')
    .setDescription('Streaming service for TV shows and movies')
    .setIcon(FaTv)
    .setCheckUrl('https://www.hulu.com')
    .setCategory('entertainment')
    .setPriority('high')
    .setTags(['streaming', 'tv-shows', 'movies'])
    .build(),

  createService('amazon-prime')
    .setName('Amazon Prime Video')
    .setUrl('https://www.primevideo.com')
    .setDescription('Amazon Prime streaming service')
    .setIcon(SiAmazonprime)
    .setCheckUrl('https://www.primevideo.com')
    .setCategory('entertainment')
    .setPriority('high')
    .setTags(['streaming', 'amazon', 'movies', 'tv-shows'])
    .build(),

  createService('hbo-max')
    .setName('HBO Max')
    .setUrl('https://www.hbomax.com')
    .setDescription('HBO streaming service')
    .setIcon(SiHbo)
    .setCheckUrl('https://www.hbomax.com')
    .setCategory('entertainment')
    .setPriority('high')
    .setTags(['streaming', 'hbo', 'movies', 'tv-shows'])
    .build(),

  createService('apple-tv')
    .setName('Apple TV+')
    .setUrl('https://tv.apple.com')
    .setDescription('Apple streaming service')
    .setIcon(SiAppletv)
    .setCheckUrl('https://tv.apple.com')
    .setCategory('entertainment')
    .setPriority('high')
    .setTags(['streaming', 'apple', 'movies', 'tv-shows'])
    .build(),

  createService('paramount-plus')
    .setName('Paramount+')
    .setUrl('https://www.paramountplus.com')
    .setDescription('Paramount streaming service')
    .setIcon(FaFilm)
    .setCheckUrl('https://www.paramountplus.com')
    .setCategory('entertainment')
    .setPriority('medium')
    .setTags(['streaming', 'paramount', 'movies', 'tv-shows'])
    .build(),

  createService('peacock')
    .setName('Peacock')
    .setUrl('https://www.peacocktv.com')
    .setDescription('NBCUniversal streaming service')
    .setIcon(FaPlay)
    .setCheckUrl('https://www.peacocktv.com')
    .setCategory('entertainment')
    .setPriority('medium')
    .setTags(['streaming', 'nbc', 'movies', 'tv-shows'])
    .build(),

  createService('discovery-plus')
    .setName('Discovery+')
    .setUrl('https://www.discoveryplus.com')
    .setDescription('Discovery streaming service')
    .setIcon(FaVideo)
    .setCheckUrl('https://www.discoveryplus.com')
    .setCategory('entertainment')
    .setPriority('medium')
    .setTags(['streaming', 'discovery', 'documentaries', 'reality'])
    .build(),

  // Anime Streaming Services
  createService('crunchyroll')
    .setName('Crunchyroll')
    .setUrl('https://www.crunchyroll.com')
    .setDescription('Anime streaming service')
    .setIcon(SiCrunchyroll)
    .setCheckUrl('https://www.crunchyroll.com')
    .setCategory('entertainment')
    .setPriority('high')
    .setTags(['anime', 'streaming', 'japanese'])
    .build(),

  createService('funimation')
    .setName('Funimation')
    .setUrl('https://www.funimation.com')
    .setDescription('Anime streaming service')
    .setIcon(SiFunimation)
    .setCheckUrl('https://www.funimation.com')
    .setCategory('entertainment')
    .setPriority('medium')
    .setTags(['anime', 'streaming', 'japanese'])
    .build(),

  createService('vrv')
    .setName('VRV')
    .setUrl('https://vrv.co')
    .setDescription('Anime and animation streaming service')
    .setIcon(FaPlay)
    .setCheckUrl('https://vrv.co')
    .setCategory('entertainment')
    .setPriority('medium')
    .setTags(['anime', 'streaming', 'animation'])
    .build(),

  createService('hidive')
    .setName('HIDIVE')
    .setUrl('https://www.hidive.com')
    .setDescription('Anime streaming service')
    .setIcon(FaPlay)
    .setCheckUrl('https://www.hidive.com')
    .setCategory('entertainment')
    .setPriority('medium')
    .setTags(['anime', 'streaming', 'japanese'])
    .build(),

  // Music Streaming Services
  createService('spotify')
    .setName('Spotify')
    .setUrl('https://www.spotify.com')
    .setDescription('Music streaming service')
    .setIcon(SiSpotify)
    .setCheckUrl('https://www.spotify.com')
    .setCategory('entertainment')
    .setPriority('critical')
    .setTags(['music', 'streaming', 'audio'])
    .build(),

  createService('apple-music')
    .setName('Apple Music')
    .setUrl('https://music.apple.com')
    .setDescription('Apple music streaming service')
    .setIcon(SiAppletv)
    .setCheckUrl('https://music.apple.com')
    .setCategory('entertainment')
    .setPriority('high')
    .setTags(['music', 'streaming', 'apple'])
    .build(),

  createService('tidal')
    .setName('Tidal')
    .setUrl('https://tidal.com')
    .setDescription('High-fidelity music streaming service')
    .setIcon(SiTidal)
    .setCheckUrl('https://tidal.com')
    .setCategory('entertainment')
    .setPriority('medium')
    .setTags(['music', 'streaming', 'hifi'])
    .build(),

  createService('soundcloud')
    .setName('SoundCloud')
    .setUrl('https://soundcloud.com')
    .setDescription('Audio distribution platform')
    .setIcon(SiSoundcloud)
    .setCheckUrl('https://soundcloud.com')
    .setCategory('entertainment')
    .setPriority('high')
    .setTags(['music', 'audio', 'sharing'])
    .build(),

  createService('pandora')
    .setName('Pandora')
    .setUrl('https://www.pandora.com')
    .setDescription('Internet radio service')
    .setIcon(SiPandora)
    .setCheckUrl('https://www.pandora.com')
    .setCategory('entertainment')
    .setPriority('medium')
    .setTags(['music', 'radio', 'streaming'])
    .build(),

  createService('iheartradio')
    .setName('iHeartRadio')
    .setUrl('https://www.iheart.com')
    .setDescription('Digital radio service')
    .setIcon(SiIheartradio)
    .setCheckUrl('https://www.iheart.com')
    .setCategory('entertainment')
    .setPriority('medium')
    .setTags(['music', 'radio', 'streaming'])
    .build(),

  createService('shazam')
    .setName('Shazam')
    .setUrl('https://www.shazam.com')
    .setDescription('Music recognition app')
    .setIcon(SiShazam)
    .setCheckUrl('https://www.shazam.com')
    .setCategory('entertainment')
    .setPriority('medium')
    .setTags(['music', 'recognition', 'discovery'])
    .build(),

  createService('lastfm')
    .setName('Last.fm')
    .setUrl('https://www.last.fm')
    .setDescription('Music discovery and recommendation service')
    .setIcon(FaMusic)
    .setCheckUrl('https://www.last.fm')
    .setCategory('entertainment')
    .setPriority('medium')
    .setTags(['music', 'discovery', 'recommendations'])
    .build(),

  createService('bandcamp')
    .setName('Bandcamp')
    .setUrl('https://bandcamp.com')
    .setDescription('Music platform for independent artists')
    .setIcon(SiBandcamp)
    .setCheckUrl('https://bandcamp.com')
    .setCategory('entertainment')
    .setPriority('medium')
    .setTags(['music', 'independent', 'artists'])
    .build(),

  createService('audiomack')
    .setName('Audiomack')
    .setUrl('https://audiomack.com')
    .setDescription('Music streaming and discovery platform')
    .setIcon(SiAudiomack)
    .setCheckUrl('https://audiomack.com')
    .setCategory('entertainment')
    .setPriority('medium')
    .setTags(['music', 'streaming', 'discovery'])
    .build(),

  createService('mixcloud')
    .setName('Mixcloud')
    .setUrl('https://www.mixcloud.com')
    .setDescription('Audio streaming platform for DJs and radio')
    .setIcon(SiMixcloud)
    .setCheckUrl('https://www.mixcloud.com')
    .setCategory('entertainment')
    .setPriority('medium')
    .setTags(['music', 'streaming', 'dj', 'radio'])
    .build(),

  createService('deezer')
    .setName('Deezer')
    .setUrl('https://www.deezer.com')
    .setDescription('Music streaming service')
    .setIcon(FaHeadphones)
    .setCheckUrl('https://www.deezer.com')
    .setCategory('entertainment')
    .setPriority('medium')
    .setTags(['music', 'streaming', 'audio'])
    .build(),

  createService('qobuz')
    .setName('Qobuz')
    .setUrl('https://www.qobuz.com')
    .setDescription('High-resolution music streaming service')
    .setIcon(FaMusic)
    .setCheckUrl('https://www.qobuz.com')
    .setCategory('entertainment')
    .setPriority('medium')
    .setTags(['music', 'streaming', 'hifi', 'high-resolution'])
    .build(),
]; 