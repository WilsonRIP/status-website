import { ServiceConfig } from './types';
import { createService } from './builder';
import { 
  SiPaypal, SiStripe, SiSquare, SiShopify, SiAmazon, SiEbay, SiEtsy, SiAliexpress,
  SiBankofamerica, SiChase, SiWellsfargo, SiAmericanexpress,
  SiVisa, SiMastercard, SiDiscover, SiCoinbase, SiBinance, SiRobinhood
} from 'react-icons/si';
import { 
  FaCreditCard, FaUniversity, FaShoppingCart, FaStore, FaHome, FaTools, 
  FaWarehouse, FaChartLine, FaPiggyBank, FaCalculator,
  FaBitcoin, FaChartBar, FaWallet, FaReceipt
} from 'react-icons/fa';

export const financeServices: ServiceConfig[] = [
  // Payment Processors
  createService('paypal')
    .setName('PayPal')
    .setUrl('https://www.paypal.com')
    .setDescription('Online payment system')
    .setIcon(SiPaypal)
    .setCheckUrl('https://www.paypal.com')
    .setCategory('finance')
    .setPriority('critical')
    .setTags(['payment', 'ecommerce', 'money-transfer'])
    .build(),

  createService('stripe')
    .setName('Stripe')
    .setUrl('https://stripe.com')
    .setDescription('Payment processing platform for businesses')
    .setIcon(SiStripe)
    .setCheckUrl('https://stripe.com')
    .setCategory('finance')
    .setPriority('critical')
    .setTags(['payment', 'business', 'api'])
    .build(),

  createService('square')
    .setName('Square')
    .setUrl('https://squareup.com')
    .setDescription('Payment and point-of-sale solutions')
    .setIcon(SiSquare)
    .setCheckUrl('https://squareup.com')
    .setCategory('finance')
    .setPriority('high')
    .setTags(['payment', 'pos', 'business'])
    .build(),

  // E-commerce Platforms
  createService('amazon')
    .setName('Amazon')
    .setUrl('https://www.amazon.com')
    .setDescription('E-commerce and cloud computing company')
    .setIcon(SiAmazon)
    .setCheckUrl('https://www.amazon.com')
    .setCategory('finance')
    .setPriority('critical')
    .setTags(['ecommerce', 'retail', 'shopping'])
    .build(),

  createService('ebay')
    .setName('eBay')
    .setUrl('https://www.ebay.com')
    .setDescription('Online auction and shopping website')
    .setIcon(SiEbay)
    .setCheckUrl('https://www.ebay.com')
    .setCategory('finance')
    .setPriority('high')
    .setTags(['ecommerce', 'auction', 'marketplace'])
    .build(),

  createService('etsy')
    .setName('Etsy')
    .setUrl('https://www.etsy.com')
    .setDescription('E-commerce platform for handmade and vintage items')
    .setIcon(SiEtsy)
    .setCheckUrl('https://www.etsy.com')
    .setCategory('finance')
    .setPriority('high')
    .setTags(['ecommerce', 'handmade', 'vintage', 'crafts'])
    .build(),

  createService('shopify')
    .setName('Shopify')
    .setUrl('https://www.shopify.com')
    .setDescription('E-commerce platform for online stores')
    .setIcon(SiShopify)
    .setCheckUrl('https://www.shopify.com')
    .setCategory('finance')
    .setPriority('high')
    .setTags(['ecommerce', 'platform', 'business'])
    .build(),

  createService('aliexpress')
    .setName('AliExpress')
    .setUrl('https://www.aliexpress.com')
    .setDescription('Online retail service')
    .setIcon(SiAliexpress)
    .setCheckUrl('https://www.aliexpress.com')
    .setCategory('finance')
    .setPriority('high')
    .setTags(['ecommerce', 'retail', 'international'])
    .build(),

  // Major Retailers
  createService('walmart')
    .setName('Walmart')
    .setUrl('https://www.walmart.com')
    .setDescription('Multinational retail corporation')
    .setIcon(FaStore)
    .setCheckUrl('https://www.walmart.com')
    .setCategory('finance')
    .setPriority('high')
    .setTags(['retail', 'shopping', 'grocery'])
    .build(),

  createService('target')
    .setName('Target')
    .setUrl('https://www.target.com')
    .setDescription('Retail corporation')
    .setIcon(FaShoppingCart)
    .setCheckUrl('https://www.target.com')
    .setCategory('finance')
    .setPriority('high')
    .setTags(['retail', 'shopping', 'department-store'])
    .build(),

  createService('bestbuy')
    .setName('Best Buy')
    .setUrl('https://www.bestbuy.com')
    .setDescription('Consumer electronics retailer')
    .setIcon(FaStore)
    .setCheckUrl('https://www.bestbuy.com')
    .setCategory('finance')
    .setPriority('high')
    .setTags(['retail', 'electronics', 'technology'])
    .build(),

  createService('homedepot')
    .setName('The Home Depot')
    .setUrl('https://www.homedepot.com')
    .setDescription('Home improvement retailer')
    .setIcon(FaHome)
    .setCheckUrl('https://www.homedepot.com')
    .setCategory('finance')
    .setPriority('high')
    .setTags(['retail', 'home-improvement', 'hardware'])
    .build(),

  createService('lowes')
    .setName('Lowe\'s')
    .setUrl('https://www.lowes.com')
    .setDescription('Home improvement retailer')
    .setIcon(FaTools)
    .setCheckUrl('https://www.lowes.com')
    .setCategory('finance')
    .setPriority('high')
    .setTags(['retail', 'home-improvement', 'hardware'])
    .build(),

  createService('costco')
    .setName('Costco')
    .setUrl('https://www.costco.com')
    .setDescription('Membership-only warehouse club')
    .setIcon(FaWarehouse)
    .setCheckUrl('https://www.costco.com')
    .setCategory('finance')
    .setPriority('high')
    .setTags(['retail', 'warehouse', 'membership'])
    .build(),

  createService('samsclub')
    .setName('Sam\'s Club')
    .setUrl('https://www.samsclub.com')
    .setDescription('Membership-only warehouse club')
    .setIcon(FaWarehouse)
    .setCheckUrl('https://www.samsclub.com')
    .setCategory('finance')
    .setPriority('high')
    .setTags(['retail', 'warehouse', 'membership'])
    .build(),

  // Major Banks
  createService('bank-of-america')
    .setName('Bank of America')
    .setUrl('https://www.bankofamerica.com')
    .setDescription('Multinational bank and financial services')
    .setIcon(SiBankofamerica)
    .setCheckUrl('https://www.bankofamerica.com')
    .setCategory('finance')
    .setPriority('critical')
    .setTags(['banking', 'financial-services', 'retail-banking'])
    .build(),

  createService('chase')
    .setName('Chase Bank')
    .setUrl('https://www.chase.com')
    .setDescription('Consumer and commercial banking')
    .setIcon(SiChase)
    .setCheckUrl('https://www.chase.com')
    .setCategory('finance')
    .setPriority('critical')
    .setTags(['banking', 'financial-services', 'retail-banking'])
    .build(),

  createService('wells-fargo')
    .setName('Wells Fargo')
    .setUrl('https://www.wellsfargo.com')
    .setDescription('Multinational financial services company')
    .setIcon(SiWellsfargo)
    .setCheckUrl('https://www.wellsfargo.com')
    .setCategory('finance')
    .setPriority('critical')
    .setTags(['banking', 'financial-services', 'retail-banking'])
    .build(),

  createService('citibank')
    .setName('Citibank')
    .setUrl('https://www.citi.com')
    .setDescription('Multinational bank')
    .setIcon(FaUniversity)
    .setCheckUrl('https://www.citi.com')
    .setCategory('finance')
    .setPriority('critical')
    .setTags(['banking', 'financial-services', 'retail-banking'])
    .build(),

  createService('capital-one')
    .setName('Capital One')
    .setUrl('https://www.capitalone.com')
    .setDescription('Financial services company')
    .setIcon(FaChartBar)
    .setCheckUrl('https://www.capitalone.com')
    .setCategory('finance')
    .setPriority('high')
    .setTags(['banking', 'credit-cards', 'financial-services'])
    .build(),

  createService('american-express')
    .setName('American Express')
    .setUrl('https://www.americanexpress.com')
    .setDescription('Multinational financial services corporation')
    .setIcon(SiAmericanexpress)
    .setCheckUrl('https://www.americanexpress.com')
    .setCategory('finance')
    .setPriority('critical')
    .setTags(['credit-cards', 'financial-services', 'travel'])
    .build(),

  // Credit Card Networks
  createService('visa')
    .setName('Visa')
    .setUrl('https://www.visa.com')
    .setDescription('Multinational financial services corporation')
    .setIcon(SiVisa)
    .setCheckUrl('https://www.visa.com')
    .setCategory('finance')
    .setPriority('critical')
    .setTags(['credit-cards', 'payment-network', 'financial-services'])
    .build(),

  createService('mastercard')
    .setName('Mastercard')
    .setUrl('https://www.mastercard.com')
    .setDescription('Multinational financial services corporation')
    .setIcon(SiMastercard)
    .setCheckUrl('https://www.mastercard.com')
    .setCategory('finance')
    .setPriority('critical')
    .setTags(['credit-cards', 'payment-network', 'financial-services'])
    .build(),

  createService('discover')
    .setName('Discover')
    .setUrl('https://www.discover.com')
    .setDescription('Financial services company')
    .setIcon(SiDiscover)
    .setCheckUrl('https://www.discover.com')
    .setCategory('finance')
    .setPriority('high')
    .setTags(['credit-cards', 'financial-services', 'banking'])
    .build(),

  // Cryptocurrency
  createService('coinbase')
    .setName('Coinbase')
    .setUrl('https://www.coinbase.com')
    .setDescription('Cryptocurrency exchange platform')
    .setIcon(SiCoinbase)
    .setCheckUrl('https://www.coinbase.com')
    .setCategory('finance')
    .setPriority('high')
    .setTags(['cryptocurrency', 'exchange', 'bitcoin'])
    .build(),

  createService('binance')
    .setName('Binance')
    .setUrl('https://www.binance.com')
    .setDescription('Cryptocurrency exchange')
    .setIcon(SiBinance)
    .setCheckUrl('https://www.binance.com')
    .setCategory('finance')
    .setPriority('high')
    .setTags(['cryptocurrency', 'exchange', 'trading'])
    .build(),

  createService('kraken')
    .setName('Kraken')
    .setUrl('https://www.kraken.com')
    .setDescription('Cryptocurrency exchange')
    .setIcon(FaBitcoin)
    .setCheckUrl('https://www.kraken.com')
    .setCategory('finance')
    .setPriority('high')
    .setTags(['cryptocurrency', 'exchange', 'trading'])
    .build(),

  // Investment Platforms
  createService('robinhood')
    .setName('Robinhood')
    .setUrl('https://robinhood.com')
    .setDescription('Financial services company')
    .setIcon(SiRobinhood)
    .setCheckUrl('https://robinhood.com')
    .setCategory('finance')
    .setPriority('high')
    .setTags(['investing', 'trading', 'stocks'])
    .build(),

  createService('etrade')
    .setName('E*TRADE')
    .setUrl('https://us.etrade.com')
    .setDescription('Financial services company')
    .setIcon(FaChartLine)
    .setCheckUrl('https://us.etrade.com')
    .setCategory('finance')
    .setPriority('high')
    .setTags(['investing', 'trading', 'stocks'])
    .build(),

  createService('fidelity')
    .setName('Fidelity')
    .setUrl('https://www.fidelity.com')
    .setDescription('Financial services company')
    .setIcon(FaChartBar)
    .setCheckUrl('https://www.fidelity.com')
    .setCategory('finance')
    .setPriority('high')
    .setTags(['investing', 'financial-services', 'retirement'])
    .build(),

  createService('charles-schwab')
    .setName('Charles Schwab')
    .setUrl('https://www.schwab.com')
    .setDescription('Financial services company')
    .setIcon(FaChartLine)
    .setCheckUrl('https://www.schwab.com')
    .setCategory('finance')
    .setPriority('high')
    .setTags(['investing', 'financial-services', 'retirement'])
    .build(),

  createService('td-ameritrade')
    .setName('TD Ameritrade')
    .setUrl('https://www.tdameritrade.com')
    .setDescription('Financial services company')
    .setIcon(FaChartLine)
    .setCheckUrl('https://www.tdameritrade.com')
    .setCategory('finance')
    .setPriority('high')
    .setTags(['investing', 'trading', 'financial-services'])
    .build(),

  createService('vanguard')
    .setName('Vanguard')
    .setUrl('https://investor.vanguard.com')
    .setDescription('Investment management company')
    .setIcon(FaChartBar)
    .setCheckUrl('https://investor.vanguard.com')
    .setCategory('finance')
    .setPriority('high')
    .setTags(['investing', 'mutual-funds', 'etfs'])
    .build(),

  // Financial Management Apps
  createService('mint')
    .setName('Mint')
    .setUrl('https://www.mint.com')
    .setDescription('Personal finance management app')
    .setIcon(FaChartBar)
    .setCheckUrl('https://www.mint.com')
    .setCategory('finance')
    .setPriority('medium')
    .setTags(['personal-finance', 'budgeting', 'tracking'])
    .build(),

  createService('credit-karma')
    .setName('Credit Karma')
    .setUrl('https://www.creditkarma.com')
    .setDescription('Personal finance company')
    .setIcon(FaCreditCard)
    .setCheckUrl('https://www.creditkarma.com')
    .setCategory('finance')
    .setPriority('medium')
    .setTags(['credit-score', 'personal-finance', 'monitoring'])
    .build(),

  createService('nerdwallet')
    .setName('NerdWallet')
    .setUrl('https://www.nerdwallet.com')
    .setDescription('Personal finance company')
    .setIcon(FaCalculator)
    .setCheckUrl('https://www.nerdwallet.com')
    .setCategory('finance')
    .setPriority('medium')
    .setTags(['personal-finance', 'advice', 'comparison'])
    .build(),

  createService('ynab')
    .setName('You Need A Budget')
    .setUrl('https://www.youneedabudget.com')
    .setDescription('Personal budgeting software')
    .setIcon(FaReceipt)
    .setCheckUrl('https://www.youneedabudget.com')
    .setCategory('finance')
    .setPriority('medium')
    .setTags(['budgeting', 'personal-finance', 'planning'])
    .build(),

  createService('personal-capital')
    .setName('Personal Capital')
    .setUrl('https://www.personalcapital.com')
    .setDescription('Financial advisory and wealth management')
    .setIcon(FaChartBar)
    .setCheckUrl('https://www.personalcapital.com')
    .setCategory('finance')
    .setPriority('medium')
    .setTags(['wealth-management', 'financial-advisory', 'tracking'])
    .build(),

  createService('acorns')
    .setName('Acorns')
    .setUrl('https://www.acorns.com')
    .setDescription('Micro-investing app')
    .setIcon(FaPiggyBank)
    .setCheckUrl('https://www.acorns.com')
    .setCategory('finance')
    .setPriority('medium')
    .setTags(['investing', 'micro-investing', 'savings'])
    .build(),

  createService('stash')
    .setName('Stash')
    .setUrl('https://www.stash.com')
    .setDescription('Financial services and technology company')
    .setIcon(FaWallet)
    .setCheckUrl('https://www.stash.com')
    .setCategory('finance')
    .setPriority('medium')
    .setTags(['investing', 'financial-services', 'education'])
    .build(),
]; 