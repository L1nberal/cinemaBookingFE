type TMockData = {
  id: string;
  genres: string[];
  title: string;
  subTitle: string | null;
  description: string;
  poster: string;
  trailer: string;
};

export const mockData: TMockData[] = [
  {
    id: 'movieInfo1',
    genres: ['action', 'adventure'],
    title: 'avatar',
    subTitle: 'the way of water',
    description:
      'Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Navi race to protect their home.',
    poster:
      'https://static.india.com/wp-content/uploads/2022/12/Avatar-2-Box-Office-Opening-Weekend-Worldwide-James-Camerons-Film-to-Collect-Numbers-Never-Heard-or-Seen-Before-Globally.jpg',
    trailer: 'https://www.youtube.com/embed/a8Gx8wiNbs8?si=frJBu4XDsPK2QWYo',
  },
  {
    id: 'movieInfo2',
    genres: ['action', 'adventure', 'hero'],
    title: 'Ant-Man and the Wasp',
    subTitle: 'Quantumania',
    description:
      "Scott Lang and Hope Van Dyne are dragged into the Quantum Realm, along with Hope's parents and Scott's daughter Cassie. Together they must find a way to escape, but what secrets is Hope's mother hiding? And who is the mysterious Kang?",
    poster:
      'https://images.thedirect.com/media/article_full/ant-man-quantumania-genre-mcu-marvel.jpg?imgeng=cmpr_75/',
    trailer: 'https://www.youtube.com/embed/UUkn-enk2RU?si=E0RW0uGp1RpY3D5V',
  },
  {
    id: 'movieInfo3',
    genres: ['action', 'hero'],
    title: 'the flash',
    subTitle: null,
    description:
      'Barry Allen uses his super speed to change the past, but his attempt to save his family creates a world without super heroes, forcing him to race for his life in order to save the future.',
    poster:
      'https://www.moviesalon.net/wp-content/uploads/2023/06/Where-To-Watch-The-Flash-Movie.jpg',
    trailer: 'https://www.youtube.com/embed/hebWYacbdvc?si=-ushQTmRnbwppehh',
  },
];
