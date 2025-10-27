<template>
    <div class="container mt-5">
      <h2>Add New Hotel</h2>
      <form @submit.prevent="addHotel" enctype="multipart/form-data">
        <div class="row">
            <div class="col-md-3">
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" v-model="hotel.name" required>
                </div>
            </div>
            <div class="col-md-3">
                <div class="mb-3">
                    <label for="phone" class="form-label">Phone</label>
                    <input type="text" class="form-control" id="phone" v-model="hotel.phone" required>
                </div>
            </div>
            <div class="col-md-3">
                <div class="mb-3">
                    <label for="rating" class="form-label">Rating</label>
                    <input type="text" class="form-control" id="rating" v-model="hotel.rating" required>
                </div>
            </div>
            <div class="col-md-3">
                <div class="mb-3">
                    <label for="rating" class="form-label">Image</label>
                    <input type="file" class="form-control" id="image" />
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
                hotel: {
                    name: '',
                    address: '',
                    decription: '',
                    rating: '',
                    phone: '',
                    image: null
                }
            };
        },
        props: {
        msg: String
        },methods: {
            addHotel() {
                let formData = new FormData();
                formData.append('name', this.hotel.name);
                formData.append('address', this.hotel.address);
                formData.append('decription', this.hotel.decription);
                formData.append('rating', this.hotel.rating);
                formData.append('phone', this.hotel.phone);
                const imageInput = document.getElementById('image');
                if (imageInput.files.length > 0) {
                    formData.append('image', imageInput.files[0]);
                }
                
                DataService.AddHotel(formData)
                .then(response => {
                    console.log(response.data);
                    alert("Hotel added successfully!");
                    this.$router.push({ name: 'hotel_list' });
                })
                .catch(e => {
                    console.log(e);
                });
            }
        }
    }
</script>
