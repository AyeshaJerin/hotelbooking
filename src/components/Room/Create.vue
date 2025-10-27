<template>
    <div class="container mt-5">
      <h2>Add New Room</h2>
      <form @submit.prevent="addRoom">
        <div class="row">
            <div class="col-md-4">
                <div class="mb-3">
                    <label for="hotel_id" class="form-label">Hotel Id</label>
                    <select class="form-control" id="hotel_id" v-model="room.hotel_id" required>
                        <option selected value="">Select Hotel</option>
                      <option v-for="h in hotel" :key="h.id" :value="h.id">{{ h.name }}</option>
                    </select>
                </div>
            </div>
            <div class="col-md-4">
                <div class="mb-3">
                    <label for="room_type" class="form-label">Room type</label>
                    <input type="text" class="form-control" id="room_type" v-model="room.room_type" required>
                </div>
            </div>
            <div class="col-md-4">
                <div class="mb-3">
                    <label for="price" class="form-label">Price</label>
                    <input type="text" class="form-control" id="price" v-model="room.price" required>
                </div>
            </div>
            <div class="col-md-6">
                <div class="mb-3">
                    <label for="total_room" class="form-label">Total room</label>
                    <textarea class="form-control" id="total_room" v-model="room.total_room"></textarea>
                </div>
            </div>
            <div class="col-md-6">
                <div class="mb-3">
                    <label for="available_room" class="form-label">Available room</label>
                    <textarea class="form-control" id="available_room" v-model="room.available_room"></textarea>
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
                room: {
                    hotel_id: '',
                    room_type: '',
                    price: '',
                    total_room: '',
                    available_room: ''
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
            addRoom() {
                DataService.AddRoom(this.room)
                .then(response => {
                    console.log(response.data);
                    alert("Room added successfully!");
                    this.$router.push({ name: 'room_list' });
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
