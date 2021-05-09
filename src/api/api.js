import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://api.thedogapi.com/v1/",
  headers: {
    "x-api-key": "1b8ed6f6-0352-4e0a-8af8-df26c9db6d42",
  },
});

export const breedsAPI = {
  getBreedsData(limit, breedId) {
    if (!limit) {
      limit = 10;
    }
    if(!breedId){
      breedId = "";
    }
    return instance
      .get(`images/search?limit=${limit}&breed_id=${breedId}`)
      .then((response) => {
        return response.data;
      });
  },

  getBreedsByName(name) {
    return instance.get(`breeds/search?q=${name}`).then((response) => {
      return response.data;
    });
  },

  getBreedsGallery(searchOption) {
    return instance
      .get(
        `images/search?order=${searchOption.order}&breed_id=${searchOption.breedId}&mime_types=${searchOption.type}&limit=${searchOption.limit}`
      )
      .then((response) => {
        return response.data;
      });
  },

  addFavorites(imageId) {
    const post_body = {
      image_id: imageId,
      sub_id: "User-2283",
    };
    return instance
      .post(`favourites`, post_body)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
  },

  uploadPhoto(file) {
    const formData = new FormData();
    formData.append("file", file);
    return instance
      .post("images/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .catch((error) => {
        return error.response.data;
      });
  },

  getFavorites() {
    const sub_id = "User-2283";
    return instance.get(`favourites?sub_id=${sub_id}`).then((response) => {
      return response.data;
    });
  },

  deleteFavorite(favorite_id) {
    return instance.delete(`favourites/`+favorite_id).then((response) => {
      return response.data;
    });
  },

  vote(imageId,vote) {
    const body = {
      image_id: imageId,
      sub_id: "User-2283",
      value: vote,
    }
    return instance.post(`votes`,body).then((response) => {
      return response.data;
    });
  },

  deleteVote(vote_id) {
    return instance.delete(`votes/`+vote_id).then((response) => {
      return response.data;
    });
  },

  getVote(){
    const sub_id = "User-2283";
    return instance.get(`votes?sub_id=${sub_id}`).then((response) => {
      return response.data;
    });
  },

  getImage(image_id){
    return instance.get(`images/${image_id}`).then((response) => {
      return response.data;
    });
  }
};
