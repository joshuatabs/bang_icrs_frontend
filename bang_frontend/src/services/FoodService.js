import axios from "axios";

const ADD_FOOD_URL = "http://localhost:8080/food/postFood";
const getfoodid = "http://localhost:8080/food/getAllFood";

class FoodService {

  postFood(){
    
  }

  getFood() {
    return axios.get(FOOD_BASE_URL);
  }
}

export default new FoodService();