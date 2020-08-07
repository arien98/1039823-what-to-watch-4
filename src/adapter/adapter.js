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
