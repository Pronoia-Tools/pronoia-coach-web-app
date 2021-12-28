<template>
  <div class="flex justify-between items-center border border-black py-2 pl-12 px-4 relative z-50">
    <div class=" ">
      <img src="@/assets/WorkbookFactoryLogo.png" class="w-full h-10 transform scale-150" alt="logo navbar">
    </div>

    <!-- LINKS -->
    <div  class="flex flex-col flex-grow justify-start items-center md:justify-around absolute top-0 w-1/2 h-screen transition-all duration-500 bg-black bg-opacity-75 text-white
                md:relative md:h-auto md:w-auto md:flex-row  md:left-0 md:bg-white md:bg-opacity-0 md:text-black"
          :class="isOpen" v-if="this.isAuthenticated"
    >
      <font-awesome-icon :icon="myTimes" class=" self-end m-5 text-xl md:hidden" @click="toggleOpenMovileMenu"/>
      <nav class="flex gap-4 flex-col text-center m-4
                  md:flex-row md:m-1">
        <!-- <router-link to="/">{{ $t(`navbar.yourLibrary`) }}</router-link> -->
        <router-link v-if="this.user.authorized" to="/workbook">{{ $t(`navbar.workBookFactory`) }}</router-link>
        <router-link v-if="this.user.authorized" to="/library">{{ $t(`navbar.workBookLibrary`) }}</router-link>
        <!-- <router-link to="/">{{ $t(`navbar.coachDashboard`) }}</router-link>
        <router-link to="/">{{ $t(`navbar.marketplace`) }}</router-link> -->
      </nav>

      <!-- <div class="flex gap-5 flex-col items-center justify-center
                   md:flex-row relative px-5">
        <font-awesome-icon :icon="myQuestionCircle" />
        <font-awesome-icon :icon="myIcon" />
        <AlertVue>
        </AlertVue>
      </div> -->
    </div>
    <!-- USER -->
    <div class="flex gap-2 items-center">
      
      <font-awesome-icon :icon="myBars" @click="toggleOpenMovileMenu" class="cursor-pointer md:hidden"/>
      
      <div class="flex gap-2 justify-center items-center" v-if="this.isAuthenticated">
        <span>{{`${this.user.firstName} ${this.user.lastName}`}}</span>
        <!-- <div class="cursor-pointer" @click="toggleOpenUserMenu">
          <font-awesome-icon :icon="myUser" />
          <font-awesome-icon :icon="myArrowDown"/>
          <transition name="slide-fade">
            <div v-show="openUserMenu" class="absolute top-10 -right-0 py-2 w-40 border-black border flex flex-col divide-y divide-black bg-white">
              <li class="list-none" v-for="locale in locales" :key="locale" @click="switchLocale(locale)">
                {{locale}}
              </li>
              <router-link :to="{name:'Profile'}">{{ $t(`navbar.settings`) }}</router-link> 
              <span @click="logoutHandler">{{ $t(`navbar.logout`) }}</span>
            </div>
          </transition>
        </div> -->
        <ButtonGroupVue :alignMenuY="'left'">
          <ButtonAppVue>
            <router-link :to="{name:'Profile'}">{{ $t(`navbar.settings`) }}</router-link> 
          </ButtonAppVue>
          <ButtonAppVue>
            <span @click="logoutHandler">{{ $t(`navbar.logout`) }}</span>
          </ButtonAppVue>
        </ButtonGroupVue>
      </div>

      <div v-else class="flex gap-2">
        <ButoomCustomVue @click="$router.push({name:'login'})">{{ $t(`navbar.login`) }}</ButoomCustomVue>
        <ButoomCustomVue @click="$router.push({name:'sign-up'})">{{ $t(`navbar.register`) }}</ButoomCustomVue>
      </div>


    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBookOpen,faQuestionCircle,faBell,faUser,faAngleDown,faBars,faTimes } from '@fortawesome/free-solid-svg-icons'
import { mapActions, mapGetters, mapState } from 'vuex'
import ButoomCustomVue from './ButoomCustom.vue'
import ButtonGroupVue from './ButtonGroup.vue'
import ButtonAppVue from './ButtonApp.vue'
// import AlertVue from './Alert.vue'


export default {
  name: 'Navbar',
  components: {
    FontAwesomeIcon,
    ButoomCustomVue,
    ButtonGroupVue,
    ButtonAppVue,
    // AlertVue
  },

  data () {
    return {
      myIcon: faBookOpen,
      myQuestionCircle: faQuestionCircle,
      myBell: faBell,
      myUser: faUser,
      myArrowDown: faAngleDown,
      myBars:faBars,
      myTimes:faTimes,


      openUserMenu:false,
      openMovilMenu:false,
      locales:process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(",")
    }
  },
  methods:{
    // ...mapMutations("auth",["login","logout"]),
    toggleOpenUserMenu(){
      this.openUserMenu = !this.openUserMenu
    },
    toggleOpenMovileMenu(){
      this.openMovilMenu = !this.openMovilMenu
    },
    switchLocale(locale){
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale
      }
    },
    logoutHandler(){
      this.logout;
    }
  },
  computed:{
    ...mapGetters("auth",["getUserAuth"]),
    ...mapState("auth", ["isAuthenticated", "user"]),
    ...mapActions("auth", ["logout"]),
    isOpen(){
      return this.openMovilMenu?"left-0":"-left-full"
    }
  },
  // mounted() {
  //   console.log("mounted")
  //   if (this.isAuthenticated) {
  //     const userData = JSON.parse(localStorage.getItem("user"))
  //     console.log("mounted",userData)
  //     this.login(userData);
  //   }
  // },

}
</script>

<style>
/* Las animaciones de entrada y salida pueden usar */
/* funciones de espera y duración diferentes.      */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.router-link-active{
  color:deepskyblue;
}
</style>