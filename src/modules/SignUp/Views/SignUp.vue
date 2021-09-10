<template>
  <div class="w-full flex flex-col items-center">
    <div class=" w-10/12 md:w-6/12 lg:w-4/12 py-10">
      <img src="img/Sammy_Logo.png" alt="logo">

      <form class="text-gray-500 px-10 flex flex-col items-center gap-2">
        <div class=" grid grid-cols-2 gap-4 w-full">
          <div class="field">
            <label class="block" for="fistName">First Name</label>
            <input class="w-full px-2 py-1 border rounded border-gray-400" type="text" name="fistName"  v-model="firstName">
          </div>
          
          <div class="field">
            <label class="block" for="LastName">Last Name</label>
            <input class="w-full px-2 py-1 border rounded border-gray-400" type="text" name="LastName"  v-model="LastName">
          </div>
        </div>
        
        <div class="field w-full">
          <label class="block" for="email">Email</label>
          <input class="w-full px-2 py-1 border rounded border-gray-400" type="email" name="email"  v-model="email">
        </div>

        <div class="field w-full">
          <label class="block" for="password">Password</label>
          <input class="w-full px-2 py-1 border rounded border-gray-400" type="password" name="password"  v-model="password">
        </div>
        
        <div class="field w-full">
          <label class="block" for="passwordConfirm">Password Confirmation</label>
          <input class="w-full px-2 py-1 border rounded border-gray-400" type="password" name="passwordConfirm"  v-model="passwordConfirmation">
        </div>

        <div class="field w-full">
          <label class="block" for="country">Country</label>
          <select class="w-full px-2 py-1 border rounded border-gray-400" name="country"  v-model="country">
            <option selected>Select</option>
            <option value="Mx">México</option>
            <option value="USA">Estados unidos</option>
          </select>
        </div>

        <div class="flex justify-center items-center gap-3 my-4">
          <input type="checkbox" id="cbox" value="signDashboard" class="block" v-model="signDashboard"> <label class="block text-blue-500" for="cbox2">Sign me up as a coach and give me access to the Coach's Dashboard</label>
        </div>
        <div>
          <input class="p-2 bg-purple-900 text-white" type="submit" value="Register" @click="submitSignUp">
        </div>

        <a href="#" class="underline text-purple-900">I already have an account</a>

      </form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      firstName:"",
      LastName:"",
      email:"",
      password:"",
      passwordConfirmation:"",
      country:"",
      signDashboard:false
    }
  },
  methods:{
    submitSignUp(e){
      e.preventDefault();
      alert(`
        firstName:${this.firstName}
        LastName:${this.LastName}
        email:${this.email}
        password:${this.password}
        passwordConfirmation:${this.passwordConfirmation}
        country:${this.country}
        signDashboard:${this.signDashboard}
`
      )
    }
  }

}
</script>