<template>
  <div>

    <!-- Banner Image -->
    <div class="container-fluid p-0">
      <div class="row g-0">
        <div class="col-12 p-0">
          <img src="img/banner/bradcam2.png" class="img-fluid w-100 d-block" alt="Banner Image">
        </div>
      </div>
    </div>

    <!-- Booking Form -->
    <div class="booking_form my-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-8 col-lg-10 col-md-12">
            <div class="section_title text-center mb-50">
              <span>Book Your Stay</span>
              <h3>Hotel & Room Booking Form</h3>
            </div>
            <div class="form_box p-4 shadow" style="background:#fafafa; border-radius:10px;">

              <form @submit.prevent="submitBooking">

                <!-- Customer Info -->
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label>Full Name</label>
                    <input type="text" class="form-control" v-model="form.customer_name" placeholder="Enter your full name" required>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label>Email Address</label>
                    <input type="email" class="form-control" v-model="form.customer_email" placeholder="Enter your email" required>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label>Phone Number</label>
                    <input type="tel" class="form-control" v-model="form.customer_phone" placeholder="Enter phone number" required>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label>Select Hotel</label>
                    <select @change="getRooms(this.value)" class="form-select" v-model="form.hotel_id" required>
                      <option disabled value="">Choose Hotel</option>
                      <option v-for="hotel in hotels" :key="hotel.id" :value="hotel.id">
                        {{ hotel.name }}
                      </option>
                    </select>
                  </div>
                </div>

                <!-- Booking Info -->
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label>Check-In Date</label>
                    <input type="date" class="form-control" v-model="form.check_in" @change="calPrice()" required>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label>Check-Out Date</label>
                    <input type="date" class="form-control" v-model="form.check_out" @change="calPrice()" required>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label>Guests</label>
                    <input type="number" class="form-control" min="1" v-model="form.number_of_guest" @input="calPrice()" required>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label>Room Type</label>
                    <select @change="calPrice()" class="form-select" v-model="form.room_id" required>
                      <option disabled value="">Select Room Type</option>
                      <option v-for="room in rooms" :key="room.id" :value="room.id">
                        {{ room.room_type }}. Price: {{ room.price }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label>Total Price</label>
                    <input type="text" class="form-control" v-model="form.total_price" required readonly>
                  </div>
                </div>

                <button type="submit" class="btn btn-primary w-100 py-2">Book Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- For Query -->
    <div class="forQuery">
      <div class="container">
        <div class="row">
          <div class="col-xl-10 offset-xl-1 col-md-12">
            <div class="Query_border">
              <div class="row align-items-center justify-content-center">
                <div class="col-xl-6 col-md-6">
                  <div class="Query_text">
                    <p>For Reservation Or Query?</p>
                  </div>
                </div>
                <div class="col-xl-6 col-md-6">
                  <div class="phone_num">
                    <a href="#" class="mobile_no">+10 576 377 4789</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import DataService from "../services/DataService";
export default {
  name: 'Room',
  data() {
    return {
      hotels:[],
      form: {
        customer_name: '',
        customer_email: '',
        customer_phone: '',
        hotel_id: '',
        check_in: '',
        check_out: '',
        number_of_guest: 1,
        room_id: '',
       
        total_price:'',
        status:'pending'
      },
      rooms:[]
    }
  },
  methods: {
    calPrice(){
      const selectedId = this.form.room_id;
      const room = this.rooms.find(r => String(r.id) === String(selectedId));

      if (!room) {
        this.form.total_price = '';
        return;
      }

      // parse numeric unit price (handles numbers or strings like "$250" or "250.00")
      let unitPrice = room.price;
      if (typeof unitPrice === 'string') {
        const match = unitPrice.replace(/,/g, '').match(/[\d.]+/);
        unitPrice = match ? parseFloat(match[0]) : 0;
      }
      unitPrice = Number(unitPrice) || 0;

      // helper to parse yyyy-mm-dd from <input type="date"> reliably
      const parseDate = (s) => {
        if (!s) return null;
        const parts = s.split('-').map(Number);
        if (parts.length !== 3) return null;
        return new Date(parts[0], parts[1] - 1, parts[2]);
      };

      const ci = parseDate(this.form.check_in);
      const co = parseDate(this.form.check_out);

      // require both dates and check-out after check-in
      if (!ci || !co || co <= ci) {
        this.form.total_price = '';
        return;
      }

      const msPerDay = 24 * 60 * 60 * 1000;
      const nights = Math.round((co - ci) / msPerDay); // integer nights

      const total = unitPrice * nights;

      this.form.total_price = isNaN(total) ? '' : total.toFixed(2);
    },
    getRooms(){
      DataService.getRoomByHotel(this.form.hotel_id)
      .then(response => {
        if(response.data)
          this.rooms= response.data;
        else
          alert(response.data.error)
      })
      .catch(e => {
        console.log(e);
      });
    },
    submitBooking() {
      DataService.customerRoomBooking(this.form)
      .then(response => {
        if(response.data){
          alert('Booking Successful!');
          // Reset form
          this.form = {
            customer_name: '',
            customer_email: '',
            customer_phone: '',
            hotel_id: '',
            check_in: '',
            check_out: '',
            number_of_guest: 1,
            room_id: '',
            total_price:'',
            status:''
          };
          this.rooms = [];
        }
        else
          alert(response.data.error)
      })
    },
    getHotel() {
      DataService.HotelList()
      .then(response => {
        if(response.data)
          this.hotels= response.data;
        else
          alert(response.data.error)
      })
      .catch(e => {
        console.log(e);
      });
    },
  },
  mounted() {
    this.getHotel();
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.section_title span {
  display: block;
  color: #777;
  margin-bottom: 10px;
}
.line-button, .book_now {
  background-color: #007bff;
  color: #fff;
  padding: 5px 15px;
  text-decoration: none;
  border-radius: 5px;
}
.line-button:hover, .book_now:hover {
  background-color: #0056b3;
}
.form_box input, .form_box select, .form_box textarea {
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 8px;
}
</style>


