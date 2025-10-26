import http from "../http-common";

class DataService {
  login(data) {
    return http.post("/login", data);
  }
  HotelList() {
    return http.get("/hotel");
  }
  getHotel(id) {
    return http.get(`/hotel/${id}`);
  }
  UpdateHotel(id, data) {
    return http.put(`/hotel/${id}`, data);
  }
  DeleteHotel(id) {
    return http.delete(`/hotel/${id}`);
  }
  AddHotel(data) {
    return http.post("/hotel", data);
  }
  // PropartyList() {
  //   return http.get(`/properties`);
  // }
}




export default new DataService();