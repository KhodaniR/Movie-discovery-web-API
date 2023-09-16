import Facebook from '../assets/facebook.svg'
import Instagram from '../assets/instagram.svg'
import Twitter from '../assets/twitter.svg'
import Youtube from '../assets/youtube.svg'

import {AiOutlineHome} from 'react-icons/ai'
import {BsCameraReels,} from 'react-icons/bs'
import {BiSlideshow} from 'react-icons/bi'
import {RxCalendar} from 'react-icons/rx'

export const socialData = [Facebook, Instagram, Twitter, Youtube]

export const socialLabel = [
  {
    label: 'Conditions of Use',
  },
  {
    label: 'Privacy & Policy',
  },
  {
    label: 'Press Room',
  },
];

export const sidebarData=[
    {
        icon: <AiOutlineHome/>,
        label: 'Home',
        link: '/'
    },
     {
        icon: <BsCameraReels/>,
        label: 'Movies',
        link: ''
    },
     {
        icon: <BiSlideshow/>,
        label: 'TV Series',
        link: '/tvseries'
    },
 {
        icon: <RxCalendar/>,
        label: 'upcoming',
        link: '/upcoming'
    },


]