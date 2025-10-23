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
                    <input type="text" class="form-control" v-model="form.name" placeholder="Enter your full name" required>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label>Email Address</label>
                    <input type="email" class="form-control" v-model="form.email" placeholder="Enter your email" required>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label>Phone Number</label>
                    <input type="tel" class="form-control" v-model="form.phone" placeholder="Enter phone number" required>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label>Select Hotel</label>
                    <select class="form-select" v-model="form.hotel" required>
                      <option disabled value="">Choose Hotel</option>
                      <option>Sea View Hotel</option>
                      <option>Royal Grand</option>
                      <option>Mountain Resort</option>
                    </select>
                  </div>
                </div>

                <!-- Booking Info -->
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label>Check-In Date</label>
                    <input type="date" class="form-control" v-model="form.checkin" required>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label>Check-Out Date</label>
                    <input type="date" class="form-control" v-model="form.checkout" required>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label>Guests</label>
                    <input type="number" class="form-control" min="1" v-model="form.guests" required>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label>Room Type</label>
                    <select class="form-select" v-model="form.roomType" required>
                      <option disabled value="">Select Room Type</option>
                      <option>Superior Room</option>
                      <option>Deluxe Room</option>
                      <option>Signature Room</option>
                      <option>Couple Room</option>
                    </select>
                  </div>
                </div>

                <!-- Extra -->
                <div class="mb-3">
                  <label>Special Request (Optional)</label>
                  <textarea class="form-control" v-model="form.request" rows="3" placeholder="Any special note?"></textarea>
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
export default {
  name: 'Room',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        hotel: '',
        checkin: '',
        checkout: '',
        guests: 1,
        roomType: '',
        request: ''
      },
      featuredRooms: [
        { name: "Superior Room", price: "From $250/night", img: "img/rooms/1.png" },
        { name: "Deluxe Room", price: "From $250/night", img: "img/rooms/2.png" },
        { name: "Signature Room", price: "From $250/night", img: "img/rooms/3.png" },
        { name: "Couple Room", price: "From $250/night", img: "img/rooms/4.png" }
      ]
    }
  },
  methods: {
    submitBooking() {
      console.log("Booking Details:", this.form);
      alert("✅ Booking Successful!");
      // এখানে পরে Axios ব্যবহার করে Laravel backend এ পাঠাতে পারো
    }
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


