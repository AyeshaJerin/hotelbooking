<template>
  <div class="container mt-5">
    <h3><strong>All Room</strong></h3>
    <router-link to="/add_room" class="btn btn-primary mb-3">Add New</router-link>
    <div class="row">
      <div class="col-12">
        <table class="table">
          <tr>
            <th>#SL</th>
            <th>Hotel Id</th>
            <th>Room Type</th>
            <th>Price</th>
            <th>Total Room</th>
            <th>Available room</th>
            <th>Actions</th>
          </tr>
          <tr v-for="d in roomData" :key="d.id">
            <td>{{ d.id }}</td>
            <td>{{ d.hotel.name }}</td>
            <td>{{ d.room_type }}</td>
            <td>{{ d.price }}</td>
            <td>{{ d.total_room }}</td>
            <td>{{ d.available_room }}</td>
            <td>
              <router-link :to="'/edit_room/'+d.id" class="btn btn-sm btn-primary me-2">Edit</router-link>
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
        roomData:[],
      };
    },
    props: {
      msg: String
    },methods: {
      getData() {
        DataService.RoomList()
          .then(response => {
            if(response.data)
              this.roomData= response.data;
            else
              alert(response.data.error)
          })
          .catch(e => {
            console.log(e);
        });
      },
      deleteRoom(id) {
        DataService.DeleteRoom(id)
          .then(response => {
            console.log(response.data);
            alert('Room deleted successfully!');
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

