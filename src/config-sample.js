let LIVE_BACKEND_URL = 'http://api.payhiram.increment.ltd/public/increment/v1'
let DEV_BACKEND_URL = 'http://localhost:8080/easakay-1/api/public/increment/v1'
let isDev = true
let BACKEND_URL = isDev ? DEV_BACKEND_URL : LIVE_BACKEND_URL
export default{
  IS_DEV: isDev,
  API_URL: BACKEND_URL + '/',
  IMAGE_URL: BACKEND_URL + '/image/',
  BACKEND_URL: BACKEND_URL,
  PUSHER_KEY: isDev ? '0e902f164497c0a13a68' : '8632a0cbef05aecb5196',
  PUSHER: {
    flag: '',
    key: isDev ? '0e902f164497c0a13a68' : '8632a0cbef05aecb5196'
  },
  APP_NAME: 'PAYHIRAM',
  APP_NAME_VHTML: 'PAY<b>HIRAM</b>',
  APP_EMAIL: 'support@payhiram.ph',
  USER_TYPE: [{
    title: 'USER'
  }, {
    title: 'INVESTOR'
  }],
  GUIDE: [{
    title: 'Welcome to PayHiram!',
    subtitle: 'Your tool to create an idenfication card easily and buy products need to your business from our printing partners.',
    image: BACKEND_URL + '/storage/logo/logo.png',
    icon: null
  }, {
    title: 'Create template of your ID',
    subtitle: 'Go to <b>Tempalte</b> found on the left sidebar.',
    image: BACKEND_URL + '/storage/logo/logo.png',
    icon: null
  }, {
    title: 'Congratulations!',
    subtitle: 'You\'re good to go! Enjoy your stay!',
    image: null,
    icon: 'fa-check'
  }],
  MINIMUM_INVESTMENT: 1000,
  settingsMenu: [
    {title: 'Profile', type: 'profile', allowed: ['sex', 'address', 'cellular_number', 'birth_date']},
    {title: 'Educations', type: 'educations'},
    {title: 'Work Experience', type: 'work-experience'},
    {title: 'Idenfication Cards', type: 'identifications'},
    {title: 'Guarantor', type: 'guarantor'},
    {title: 'Account', type: 'account'},
    {title: 'Payment Accounts', type: 'payment_method'},
    {title: 'Billing Information', type: 'billing_information'},
    {title: 'Merchant Setting', type: 'merchant'},
    {title: 'Notifications', type: 'notification'}
  ],
  CURRENT_YEAR: 2019,
  MAX_YEAR: 50,
  years: {
    current: 2019,
    max: 50
  },
  identifications: [
    {text: 'Driver\'s License', value: 'driver_license'},
    {text: 'Valid Passport', value: 'passport'},
    {text: 'Unified Multi-Purpose ID Card', value: 'umpid'},
    {text: 'PhilHealth ID', value: 'philhealth'},
    {text: 'Postal ID', value: 'postal'},
    {text: 'Voter\'s ID', value: 'voter'},
    {text: 'PRC License', value: 'prc'},
    {text: 'Senior Citizen ID', value: 'scid'},
    {text: 'OFW ID', value: 'ofwid'}
  ],
  plan: false
}
