<template>
  <div class="container mt-5">
    <h3><strong>All Hotel</strong></h3>
    <router-link to="/add_hotel" class="btn btn-primary mb-3">Add New</router-link>
    <div class="row">
      <div class="col-12">
        <table class="table">
          <tr>
            <th>#SL</th>
            <th>Name</th>
            <th>Address</th>
            <th>Description</th>
            <th>Rating</th>
            <th>Phone</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
          <tr v-for="d in hotelData" :key="d.id">
            <td>{{ d.id }}</td>
            <td>{{ d.name }}</td>
            <td>{{ d.address }}</td>
            <td>{{ d.decription }}</td>
            <td>{{ d.rating }}</td>
            <td>{{ d.phone }}</td>
            <td><img :src="d.image" alt="">{{d.image}}</td>
            <td>
              <router-link :to="'/edit_hotel/'+d.id" class="btn btn-sm btn-primary me-2">Edit</router-link>
              <button @click="deleteHotel(d.id)" class="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import DataService from "../../services/DataService";
  export default {
    name: 'List',
    data() {
      return {
        hotelData:[],
        img:'https://img.freepik.com/premium-photo/close-up-parrot-perching-branch_1048944-30228840.jpg',
      };
    },
    props: {
      msg: String
    },methods: {
      getData() {
        DataService.HotelList()
          .then(response => {
            if(response.data)
              this.hotelData= response.data;
            else
              alert(response.data.error)
          })
          .catch(e => {
            console.log(e);
        });
      },
      deleteHotel(id) {
        DataService.DeleteHotel(id)
          .then(response => {
            console.log(response.data);
            alert('Hotel deleted successfully!');
            this.getData(); // Refresh the list
          })
          .catch(e => {
            console.log(e);
        });
      }
    }, mounted() {
      this.getData();
    }
  }
</script>

