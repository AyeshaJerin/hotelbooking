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
    return http.post(`/hotel/${id}`, data);
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
RoomList() {
    return http.get("/room");
  }

getRoom(id) {
    return http.get(`/room/${id}`);
  }
getRoomByHotel(id) {
    return http.get(`/room_by_hotel/${id}`);
  }

  UpdateRoom(id, data) {
    return http.post(`/room/${id}`, data);
  }
  DeleteRoom(id) {
    return http.delete(`/room/${id}`);
  }

  AddRoom(data) {
    return http.post("/room", data);
  }



  BookingList() {
    return http.get("/booking");
  }

  getBooking(id) {
    return http.get(`/booking/${id}`);
  }

  UpdateBooking(id, data) {
    return http.post(`/booking/${id}`, data);
  }
  DeleteBooking(id) {
    return http.delete(`/booking/${id}`);
  }

  AddBooking(data) {
    return http.post("/booking", data);
  }

  customerRoomBooking(data) {
    return http.post("/roombooking", data);
  }
  
}




export default new DataService();