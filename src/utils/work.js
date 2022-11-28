import {
  MWTW,
  VacationQuiz,
  WhatAYear,
  BAQuiz,
  DSL,
  ChineseMap,
  EpiFoodGift,
  EpiThanksgivingQuiz,
  Moodboard,
  WhatUnitesUs,
  P4KPplsList,
  P4KReadersPoll,
  TnD,
  HeadphoneQ,
} from '../assets/images'

const projects = [
  {
    title: 'Portfolio - Data Story Lab',
    brand: 'Condé Nast',
    description:
      'Portfolio website for the Data Story Lab team - the data visualization team which I was a part of.',
    interestingDetails:
      'The parallax effects were fun to develop, and are more fun to play around with!',
    img: DSL,
    imgAlt: "Landing page of the Data Story Lab team's portfolio page.",
    imgCaption: "Landing page of the Data Story Lab team's portfolio page.",
    url: 'https://datavisualization.condenast.com/',
    date: '',
  },
  {
    title: 'Mapping the Flavors of China',
    brand: 'Epicurious',
    description:
      'An interactive China map to highlight the regional cuisine specialities.',
    interestingDetails: `Managing the mouse hover region was challenging. Handling hover events when one
     overlay is already active and making sure that the open overlay doesn't close while navigating within 
     the overlay but also making sure that other nearby regions were still hover-able was ... fun.`,
    img: ChineseMap,
    imgAlt:
      "Interactive China map that showcases a region's special cuisine on hover.",
    imgCaption:
      "Interactive China map that showcases a region's special cuisine on hover.",
    url: 'https://www.epicurious.com/recipes-menus/regional-cuisine-china-map',
    date: '',
  },
  {
    title: '2020, What a Year',
    brand: 'Condé Nast',
    description: `Internal scrollytelling website analyzing trends and patterns from Condé Nast websites.
      Consists of animated cluster charts, parallax image gallery, custom visualizations and lots more - 
      all animated through scroll-triggers.`,
    interestingDetails: `A lot of performance optimizations were done to ensure core web vitals along
     with FCP and TTI had the best score possible. We are talking about Service Workers, animation optimizations,
     optimizations in React and lazy loading.`,
    img: WhatAYear,
    imgAlt: '',
    url: '',
    date: '',
  },
  {
    title: 'Where Should You Go On Vacation Next?',
    brand: 'Condé Nast Traveller',
    description: `This interactive quiz recommends the ideal place for a vacation from a list of travel destinations curated by the editors based on user's choices.`,
    interestingDetails: `This was our first quiz project, and there was a lot of debugging done to get the logic right.
      Ensuring that all possible pathways were covered and enabled the user to reach a travel destination.`,
    img: VacationQuiz,
    imgCaption: 'A quiz to help you find your dream vacation.',
    imgAlt: 'Landing page of the Vacation Quiz.',
    url: 'https://www.cntraveler.com/story/where-should-you-go-on-vacation-next',
    date: '',
  },
  {
    title: 'Find your Perfect Headphone Quiz',
    brand: 'WIRED',
    description: `This interactive quiz recommends the best earbuds and headphones from a curated collection of 
      the best musical mates based on user's requirements.`,
    interestingDetails: `Having built a couple of quizzes by this point, the logic implementation was a walk in the park.
      But the challenging part was the headphone jack connecting the entire quiz and making sure that it stayed responsive.`,
    img: HeadphoneQ,
    imgAlt: '',
    url: 'https://www.wired.com/story/best-headphones-or-earbuds-for-you-quiz/',
    date: '',
  },
  {
    title: 'Custom Thanksgiving Menu Quiz',
    brand: 'Epicurious',
    description: `This interactive quiz provides you the recipes for the perfect Thanksgiving menu based on user's requirements and needs.
      The recommendations are highly curated and tailored to provide a custom fit menu for everything on the table - be it appetizers, mains or deserts.`,
    interestingDetails: `Might seem like just another quiz, but this one is much more complex and the - `,
    img: EpiThanksgivingQuiz,
    imgAlt: '',
    url: 'https://www.epicurious.com/recipes-menus/quiz-thanksgiving-menu-ideas-article',
    date: '',
  },
  {
    title: 'Truth or Dare Idea Generator',
    brand: 'Teen Vogue',
    description:
      'This tool helps the users generate weird dares and salicious truths for a spicy truth or dare game.',
    interestingDetails: `The paper unfold animation. Loved to develop it, loved to test and debug it, loving it even now in production.`,
    img: TnD,
    imgAlt:
      'The questions generator app lives in an iframe within the main article. Clicking on either of the jars will result in a beautiful paper unfold animation to reveal the question.',
    imgCaption:
      'The questions generator app lives in an iframe within the main article. Clicking on either of the jars will result in a beautiful paper unfold animation to reveal the question.',
    url: 'https://www.epicurious.com/recipes-menus/quiz-thanksgiving-menu-ideas-article',
    date: '',
  },
  {
    title: 'Shoppable Wedding Moodboard',
    brand: 'Glamour',
    description:
      'An interactive moodboard to curate your wedding guest look and shop the look.',
    img: Moodboard,
    imgAlt: '',
    imgCaption: '',
    url: 'https://www.glamour.com/story/wedding-guest-dress-packing-list',
    date: '',
  },
  {
    title: "Reader's Poll 2021",
    brand: 'Pitchfork',
    description: 'This was a project for Pitchfork.',
    img: P4KReadersPoll,
    imgAlt: '',
    url: 'https://pitchfork.com/features/lists-and-guides/2021-readers-poll-results/',
    date: '',
  },
  {
    title: "People's List 25th Anniversary",
    brand: 'Pitchfork',
    description:
      "For their 25th Anniversary, we developed a interactive scrollytelling narrative to let user's explore their rankings.",
    img: P4KPplsList,
    imgAlt: '',
    url: 'https://pitchfork.com/features/lists-and-guides/peoples-list-25th-anniversary/',
    date: '',
  },
  {
    title: 'My Way To Well',
    brand: 'SELF',
    description: `Developed "The Numbers" section in both Migraine & Psoriasis pages.`,
    img: MWTW,
    imgAlt: '',
    url: 'https://www.self.com/package/my-way-to-well',
    date: '',
  },
  {
    title: 'Thanksgiving Side Dish Personality Quiz',
    brand: 'Bon Appetit',
    description: '',
    img: BAQuiz,
    imgAlt: '',
    url: 'https://www.bonappetit.com/story/thanksgiving-sides-personality-quiz',
    date: '',
  },
  {
    title: 'What Unites Us',
    brand: 'Glamour',
    description: '',
    img: WhatUnitesUs,
    imgAlt: '',
    url: 'https://www.glamour.com/story/what-unites-us-migraines',
    date: '',
  },
  {
    title: 'Foodie Gift Guide Quiz',
    brand: 'Epicurious',
    description: '',
    img: EpiFoodGift,
    imgAlt: '',
    url: 'https://www.epicurious.com/shopping/gift-guide-quiz-article',
    date: '',
  },
]

export default projects
