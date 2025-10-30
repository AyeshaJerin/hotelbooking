<template>
    <div class="container mt-5">
      <h2>Add New Booking</h2>
      <form @submit.prevent="addBooking">
        <div class="row">
            <div class="col-md-4">
                <div class="mb-3">
                    <label for="hotel_id" class="form-label">Hotel Id</label>
                    <select class="form-control" id="hotel_id" v-model="booking.hotel_id" required>
                        <option selected value="">Select Hotel</option>
                      <option v-for="h in hotel" :key="h.id" :value="h.id">{{ h.name }}</option>
                    </select>
                </div>
            </div>
            <div class="col-md-4">
                <div class="mb-3">
                    <label for="room_id" class="form-label">Room type</label>
                    <select class="form-control" id="room_id" v-model="booking.room_id" required>
                        <option selected value="">Select Room</option>
                      <option v-for="r in room" :key="r.id" :value="r.id">{{ r.room_type }}</option>
                    </select>
                    <!-- <input type="text" class="form-control" id="room_type" v-model="room.room_type" required> -->
                </div>
            </div>
            <div class="col-md-4">
                <div class="mb-3">
                    <label for="customer_name" class="form-label">Customer name</label>
                    <input type="text" class="form-control" id="customer_name" v-model="booking.customer_name" required>
                </div>
            </div>
            <div class="col-md-6">
                <div class="mb-3">
                    <label for="customer_email" class="form-label">Customer email </label>
                    <textarea class="form-control" id="customer_email" v-model="booking.customer_email"></textarea>
                </div>
            </div>
            <div class="col-md-6">
                <div class="mb-3">
                    <label for="customer_phone" class="form-label">Customer Phone </label>
                    <textarea class="form-control" id="customer_phone" v-model="booking.customer_phone"></textarea>
                </div>
            </div>

            <div class="col-md-6">
                <div class="mb-3">
                    <label for="check_in" class="form-label">Check in </label>
                    <textarea class="form-control" id="check_in" v-model="booking.check_in"></textarea>
                </div>
            </div>
            <div class="col-md-6">
                <div class="mb-3">
                    <label for="check_out" class="form-label">Check out </label>
                    <textarea class="form-control" id="check_out" v-model="booking.check_out"></textarea>
                </div>
            </div>
            <div class="col-md-6">
                <div class="mb-3">
                    <label for="total_price" class="form-label">Total price </label>
                    <textarea class="form-control" id="total_price" v-model="booking.total_price"></textarea>
                </div>
            </div>
            <div class="col-md-6">
                <div class="mb-3">
                    <label for="status" class="form-label">Status</label>
                    <textarea class="form-control" id="status" v-model="booking.status"></textarea>
                </div>
            </div>
            
            
            <button type="submit" class="btn btn-primary">Save</button>
        </div>
        
        
        </form>
    </div>
</template>

<script>
    import DataService from "../../services/DataService";
    export default {
        name: 'Create',
        data() {
            return {
                hotel:[],
                booking: {
                    hotel_id: '',
                    room_id: '',
                    customer_name: '',
                    customer_email: '',
                    customer_phone: '',
                    check_in: '',
                    check_out: '',
                    total_price: '',
                    status: ''
                }
            };
        },
        props: {
        msg: String
        },methods: {

            getHotel() {
                DataService.HotelList()
                .then(response => {
                    if(response.data)
                    this.hotel= response.data;
                    else
                    alert(response.data.error)
                })
                .catch(e => {
                    console.log(e);
                });
            },





            // getBooking() {
            //     DataService.BookingList()
            //     .then(response => {
            //         if(response.data)
            //         this.booking= response.data;
            //         else
            //         alert(response.data.error)
            //     })
            //     .catch(e => {
            //         console.log(e);
            //     });
            // },
            addBooking() {
                DataService.AddBooking(this.booking)
                .then(response => {
                    console.log(response.data);
                    alert("Booking added successfully!");
                    this.$router.push({ name: 'booking_list' });
                })
                .catch(e => {
                    console.log(e);
                });
            }
        }, mounted() {
            this.getHotel();
        }
    }
</script>
