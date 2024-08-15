export const LOGO =
  "https://imgs.search.brave.com/n3sLYiMh3B3K2yWETMHO_QUUmaDnDfidiPyu03vr5q8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1Mjku/cG5n";

export const BG_NETFLIX =
  "https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const API_OPTION = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer " + process.env.REACT_APP_TMDB_KEY,
    },
  };
  export const MOVIE_CARD = "https://media.themoviedb.org/t/p/w220_and_h330_face";

  export const LANG = [
    { identifier: "en", name: "English" },
    { identifier: "hindi", name: "Hindi" },
    { identifier: "spanish", name: "Spanish" },
    { identifier: "jpn", name: "Japanese" },
    { identifier: "telugu", name: "Telugu" },
  ];
