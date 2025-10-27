<template>
  <div class="container mt-5">
    <h3><strong>All Booking</strong></h3>
    <router-link to="/add_booking" class="btn btn-primary mb-3">Add New</router-link>
    <div class="row">
      <div class="col-12">
        <table class="table">
          <tr>
            <th>#SL</th>
            <th>hotel_id</th>
            <th>room_id</th>
            <th>customer_name</th>
            <th>customer_email</th>
            <th>customer_phone</th>
            <th>check_in</th>
            <th>check_out</th>
            <th>total_price</th>
            <th>status</th>

            <th>Actions</th>
          </tr>
          <tr v-for="d in bookingData" :key="d.id">
            <td>{{ d.hotel_id }}</td>
            <td>{{ d.room_id }}</td>
            <td>{{ d.customer_name }}</td>
            <td>{{ d.customer_email }}</td>
            <td>{{ d.customer_phone }}</td>
            <td>{{ d.check_in }}</td>
            <td>{{ d.check_out }}</td>
            <td>{{ d.total_price }}</td>
            <td>{{ d.status }}</td>


           
            <td>
              <router-link :to="'/edit_booking/'+d.id" class="btn btn-sm btn-primary me-2">Edit</router-link>
              <button @click="deleteBooking(d.id)" class="btn btn-sm btn-danger">Delete</button>
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
        bookingData:[],
        img:'https://img.freepik.com/premium-photo/close-up-parrot-perching-branch_1048944-30228840.jpg',
      };
    },
    props: {
      msg: String
    },methods: {
      getData() {
        DataService.BookingList()
          .then(response => {
            if(response.data)
              this.bookingData= response.data;
            else
              alert(response.data.error)
          })
          .catch(e => {
            console.log(e);
        });
      },
      deleteBooking(id) {
        DataService.DeleteBooking(id)
          .then(response => {
            console.log(response.data);
            alert('Booking deleted successfully!');
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

