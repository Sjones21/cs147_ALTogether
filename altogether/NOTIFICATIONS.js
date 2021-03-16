

const NOTIFICATIONS = {
    nudge1: {
      id: 'haeliNudge1',
      nudge: true,
      follow: false,
      recent: false,
      user: 'haeli',
      description: ' encourages you to add alt text to your photo!',
      ago: "1d",
      link: require('./assets/images/feed/sydney1.png'),
      thumbnail: require('./assets/images/feed/haeliProf.png')
    },
    notif1: {
        id: 'daniLike1',
        nudge: false,
        follow: false,
        recent: true,
        user: 'dani',
        description: ' liked your post.',
        ago: "30s",
        link: require('./assets/images/ice_cream.png'),
        thumbnail: require('./assets/images/feed/daniProf.png')
    },
    notif2: {
        id: 'heribertComment1',
        nudge: false,
        follow: false,
        recent: true,
        user: 'heribert_florentius',
        description: ' commented: This is the content I\'m here to see',
        ago: "3d",
        link: require('./assets/images/feed/sydney1.png'),
        thumbnail: require('./assets/images/blankProfileIcon.png')
    },
    notif3: {
        id: 'jungwonFollow1',
        nudge: false,
        follow: true,
        recent: true,
        user: 'jung_won',
        description: ' started following you.',
        ago: "6d",
        link: require('./assets/images/Following.png'),
        thumbnail: require('./assets/images/feed/jungwonProf.png')
    },
    notif4: {
        id: 'daniFollow1',
        nudge: false,
        follow: true,
        recent: false,
        user: 'dani',
        description: ' started following you.',
        ago: "1w",
        link: require('./assets/images/Following.png'),
        thumbnail: require('./assets/images/feed/daniProf.png')
    },
    notif5: {
        id: 'gloriaFollow1',
        nudge: false,
        follow: true,
        recent: false,
        user: 'gloria',
        description: ', who you might know, is on Instagram',
        ago: "2w",
        link: require('./assets/images/Follow.png'),
        thumbnail: require('./assets/images/feed/haeliProf.png') //gloria profile pic
    },
    notif6: {
        id: 'haeliLike1',
        nudge: false,
        follow: false,
        recent: false,
        user: 'haeli',
        description: ' and 69 others liked your post.',
        ago: "3w",
        link: require('./assets/images/feed/sydney4.png'),
        thumbnail: require('./assets/images/feed/haeliProf.png')
    },
  }
  
  
  
  export {NOTIFICATIONS}
  