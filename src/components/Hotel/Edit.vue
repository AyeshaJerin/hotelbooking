<template>
    <div class="container mt-5">
      <h2>Update Hotel</h2>
      <form @submit.prevent="UpdateHotel">
        <div class="row">
            <div class="col-md-4">
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" v-model="hotel.name" required>
                </div>
            </div>
            <div class="col-md-4">
                <div class="mb-3">
                    <label for="phone" class="form-label">Phone</label>
                    <input type="text" class="form-control" id="phone" v-model="hotel.phone" required>
                </div>
            </div>
            <div class="col-md-4">
                <div class="mb-3">
                    <label for="rating" class="form-label">Rating</label>
                    <input type="text" class="form-control" id="rating" v-model="hotel.rating" required>
                </div>
            </div>
            <div class="col-md-6">
                <div class="mb-3">
                    <label for="address" class="form-label">Address</label>
                    <textarea class="form-control" id="address" v-model="hotel.address"></textarea>
                </div>
            </div>
            <div class="col-md-6">
                <div class="mb-3">
                    <label for="decription" class="form-label">Decription</label>
                    <textarea class="form-control" id="decription" v-model="hotel.decription"></textarea>
                </div>
            </div>
            
            
            <button type="submit" class="btn btn-primary">Update</button>
        </div>
        
        
        </form>
    </div>
</template>
<script>
    import DataService from "../../services/DataService";
    export default {
        name: 'Edit',
        data() {
            return {
                hotel: {
                    name: '',
                    address: '',
                    decription: '',
                    rating: '',
                    phone: ''
                }
            };
        },
        methods: {
            getHotel(id) {
                DataService.getHotel(id)
                .then(response => {
                    if(response.data) this.hotel = response.data;
                    else alert(response.data.error || 'Failed to load unit');
                })
                .catch(e => console.log(e));
            },
            UpdateHotel() {
                const id = this.$route.params.id;

                // update
                DataService.UpdateHotel(id, this.hotel)
                .then(response => {
                    console.log(response.data);
                    alert('Hotel updated successfully!');
                    this.$router.push({ name: 'hotel_list' });
                })
                .catch(e => console.log(e));
            }
        },
        mounted() {
            const id = this.$route.params.id;
            if (id) this.getHotel(id);
        }
    }
</script>
