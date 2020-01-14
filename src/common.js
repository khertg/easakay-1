export default {
  sidebarMenu: [
    {accountType: 'ALL', accountStatus: 'ALL', description: 'Dashboard', icon: 'fa fa-tachometer', path: 'dashboard', flag: false, subMenu: null}
  ],
  profileMenu: [
  {
    title: 'My Profile',
    icon: 'fa fa-cog',
    route: '/profile'
  }, {
    title: 'Invite Friends',
    icon: 'fa fa-users',
    route: '/referrals'
  }],
  APP_NAME: 'Easakay',
  APP_NAME_HTML: 'Easakay',
  APP_EMAIL: 'support@easakay.ph',
  COMPANY: 'Increment Technologies',
  COMPANY_URL: 'www.increment.ltd',
  COPYRIGHT: 'EASAKAY 2019',
  USER_TYPE: [{
    title: 'USER'
  }, {
    title: 'PARTNER'
  }],
  plan: false,
  header: ['status', 'notification'], // 'messenger', '',
  settingsMenu: [
    {title: 'Profile', type: 'profile', allowed: ['cellular_number', 'address', 'sex', 'birth_date']},
    {title: 'Educations', type: 'educations', allowed: []},
    {title: 'Work Experience', type: 'work-experience', allowed: []},
    {title: 'Idenfication Cards', type: 'identifications', allowed: []},
    {title: 'Guarantor', type: 'guarantor', allowed: []},
    {title: 'Account', type: 'account', allowed: []},
    {title: 'Payment Accounts', type: 'payment_method', allowed: []},
    {title: 'Billing Information', type: 'billing_information', allowed: []},
    // {title: 'Merchant Setting', type: 'merchant', allowed: []},
    {title: 'Notifications', type: 'notification', allowed: []}
  ],
  referral: {
    message: 'to help them in case of emergency.',
    emailMessage: '.They help me to manage my investments and allow me to borrow money and approved instantly by other investors. It\'s awesome.'
  },
  socialMedia: {
    facebook: 'arkila'
  },
  payments: [{
    title: 'BDO',
    logo: require('src/assets/img/bdo.png')
  }, {
    title: 'UnionBank of the Philippines',
    logo: require('src/assets/img/unionbank.png')
  }, {
    title: 'Chinabank Corporation',
    logo: require('src/assets/img/unionbank.png')
  }, {
    title: 'Cebuana Lhuillier',
    logo: require('src/assets/img/cebuanalhuillier.png')
  }, {
    title: 'MLhuillier',
    logo: require('src/assets/img/mlhuillier.png')
  }, {
    title: 'GCash',
    logo: require('src/assets/img/gcash.png')
  }],
  MINIMUM_WITHDRAWAL: 1000,
  pusher: {
    channel: 'easakay',
    notifications: 'Notifications',
    messages: 'Message',
    validation: 'Validation'
  },
  currencies: [{
    title: 'Philippine Peso',
    value: 'PHP'
  }]
}
