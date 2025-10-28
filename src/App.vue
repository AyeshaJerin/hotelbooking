<template>

    <header v-if="!uid">
        <div class="header-area ">
            <div id="sticky-header" class="main-header-area">
                <div class="container-fluid p-0">
                    <div class="row align-items-center no-gutters">
                        <div class="col-xl-5 col-lg-6">
                            <div class="main-menu  d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        <li>
                                            <router-link to="/" class="" href="">home</router-link></li>
                                        <li>
                                             <router-link to="/room" class="" href="">rooms</router-link>
                                        </li>   
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="#">blog <i class="ti-angle-down"></i></a>
                                            <ul class="submenu">
                                                <li><a href="blog.html">blog</a></li>
                                                <li><a href="single-blog.html">single-blog</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">pages <i class="ti-angle-down"></i></a>
                                            <ul class="submenu">
                                                <li><a href="elements.html">elements</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-2">
                            <div class="logo-img">
                                <a href="index.html">
                                    <img src="img/logo.png" alt="">
                                </a>
                            </div>
                        </div>
                        <div class="col-xl-5 col-lg-4 d-none d-lg-block">
                            <div class="book_room">
                                <div class="socail_links">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-facebook-square"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="book_btn d-none d-lg-block">
                                    <router-link to="/book_room" class="popup-with-form" href="#test-form">Book A Room</router-link>
                                    <!-- <a class="popup-with-form" href="#test-form">Book A Room</a> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <nav v-if="uid" class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Hotel Admin</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/hotel_list" class="nav-link">Hotel</router-link>
                </li>


                <li class="nav-item">
                    <router-link to="/room_list" class="nav-link">Room</router-link>
                </li>



                <li class="nav-item">
                    <router-link to="/booking_list" class="nav-link">Booking</router-link>
                </li>
                
                <li class="nav-item">
                    <a @click="logout" class="nav-link" href="#">Logout</a>
                </li>
            </ul>
        </div>
    </nav>
    <!-- header-end -->



    <router-view></router-view>

    <!-- footer -->
    <footer class="footer" v-if="!uid" >
        <div class="footer_top">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-md-6 col-lg-3">
                        <div class="footer_widget">
                            <h3 class="footer_title">
                                address
                            </h3>
                            <p class="footer_text"> 200, Green road, Mongla, <br>
                                New Yor City USA</p>
                            <a href="#" class="line-button">Get Direction</a>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6 col-lg-3">
                        <div class="footer_widget">
                            <h3 class="footer_title">
                                Reservation
                            </h3>
                            <p class="footer_text">+10 367 267 2678 <br>
                                reservation@montana.com</p>
                        </div>
                    </div>
                    <div class="col-xl-2 col-md-6 col-lg-2">
                        <div class="footer_widget">
                            <h3 class="footer_title">
                                Navigation
                            </h3>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Rooms</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">News</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6 col-lg-4">
                        <div class="footer_widget">
                            <h3 class="footer_title">
                                Newsletter
                            </h3>
                            <form action="#" class="newsletter_form">
                                <input type="text" placeholder="Enter your mail">
                                <button type="submit">Sign Up</button>
                            </form>
                            <p class="newsletter_text">Subscribe newsletter to get updates</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copy-right_text">
            <div class="container">
                <div class="footer_border"></div>
                <div class="row">
                    <div class="col-xl-8 col-md-7 col-lg-9">
                        <p class="copy_right">
                          Copyright &copy; All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                          <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                        </p>
                    </div>
                    <div class="col-xl-4 col-md-5 col-lg-3">
                        <div class="socail_links">
                            <ul>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-facebook-square"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!-- link that opens popup -->

    <!-- form itself end-->
    <form id="test-form" class="white-popup-block mfp-hide">
            <div class="popup_box ">
                    <div class="popup_inner">
                        <h3>Check Availability</h3>
                        <form action="#">
                            <div class="row">
                                <div class="col-xl-6">
                                    <input id="datepicker" placeholder="Check in date">
                                </div>
                                <div class="col-xl-6">
                                    <input id="datepicker2" placeholder="Check out date">
                                </div>
                                <div class="col-xl-6">
                                    <select class="form-select wide" id="default-select">
                                        <option data-display="Adult">1</option>
                                        <option value="1">2</option>
                                        <option value="2">3</option>
                                        <option value="3">4</option>
                                    </select>
                                </div>
                                <div class="col-xl-6">
                                    <select class="form-select wide" id="default-select">
                                        <option data-display="Children">1</option>
                                        <option value="1">2</option>
                                        <option value="2">3</option>
                                        <option value="3">4</option>
                                    </select>
                                </div>
                                <div class="col-xl-12">
                                    <select class="form-select wide" id="default-select">
                                        <option data-display="Room type">Room type</option>
                                        <option value="1">Laxaries Rooms</option>
                                        <option value="2">Deluxe Room</option>
                                        <option value="3">Signature Room</option>
                                        <option value="4">Couple Room</option>
                                    </select>
                                </div>
                                <div class="col-xl-12">
                                    <button type="submit" class="boxed-btn3">Check Availability</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
    </form>
    <!-- form itself end -->
</template>




<script>

    export default {
        name: 'App',
        data() {
            return {
                uid:sessionStorage.getItem('uid')
            };
        },
        methods: {
            logout() {
                this.uid="";
                sessionStorage.setItem('uid', '');
                window.location.href='/';
            }
        }
    }
</script>
