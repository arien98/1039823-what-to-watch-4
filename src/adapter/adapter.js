export const getAdaptedFilmData = (data) => {
  return {
    id: data.id,
    title: data.name,
    poster: data.poster_image,
    smallPoster: data.preview_image,
    bigPoster: data.background_image,
    bgColor: data.background_color,
    genre: data.genre,
    releaseDate: data.released,
    ratingScore: data.rating,
    ratingLevel: 10,
    ratingCount: data.scores_count,
    description: data.description,
    director: data.director,
    starring: data.starring,
    runtime: data.run_time,
    preview: data.preview_video_link,
    video: data.video_link,
    isFavorite: data.is_favorite,
  };
};

export const getAdaptedFilmsData = (data) => {
  return data.map((it) => getAdaptedFilmData(it));
};

// {
//   "id": 1,
//   "name": "The Grand Budapest Hotel",
//   "poster_image": "img/the-grand-budapest-hotel-poster.jpg",
//   "preview_image": "img/the-grand-budapest-hotel.jpg",
//   "background_image": "img/the-grand-budapest-hotel-bg.jpg",
//   "background_color": "#ffffff",
//   "video_link": "https://some-link",
//   "preview_video_link": "https://some-link",
//   "description": "In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.",
//   "rating": 8.9,
//   "scores_count": 240,
//   "director": "Wes Andreson",
//   "starring": ["Bill Murray", "Edward Norton", "Jude Law", "Willem Dafoe", "Saoirse Ronan"],
//   "run_time": 99,
//   "genre": "Comedy",
//   "released": 2014,
//   "is_favorite": false
// }
