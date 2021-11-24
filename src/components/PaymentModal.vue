<template>
  <ModalVue :showModal="showModal" @toogleShowModal="$emit('toogleShowModal')">
    <template v-slot:header>
      <h3>{{$t("paymentModal.header")}}</h3>
    </template>
    <template v-slot:body>
      <Form
        class="flex flex-col items-start gap-2"
        @submit="submitCheckOut"
      >
        <div class="flex justify-start items-center gap-3 my-4">
          <Field
            type="checkbox"
            name="newsletter"
            class="block"
            :value="true"
          />
          <label class="block text-blue-500" for="cbox2">{{$t("paymentModal.newsLetter")}}</label>
        </div>
        <div class="field w-full flex flex-col justify-evenly items-start">
          <label>
            {{$t("paymentModal.listingBadge")}}
          </label>
          <Field
            class="w-full px-2 py-1 border rounded border-gray-400"
            name="item"
            as="select"
            rules="required"
          >
            <option value="" selected>{{$t("input.select")}}</option>
            <option value="price_1Ju5OwKTV5DU12HU6ys3WVAO"> {{$t("paymentModal.silverBadge")}} </option>
            <option value="price_1Ju5PUKTV5DU12HUx3RTfCv5"> {{$t("paymentModal.goldBadge")}} </option>
            <option value="country.name"> {{$t("paymentModal.diamondBadge")}} </option>
          </Field>
          <ErrorMessage class="text-red-400" name="country"></ErrorMessage>
        </div>
        <div class="flex justify-start items-center gap-3 my-4">
          <Field
            type="checkbox"
            name="exclusive"
            class="block"
            :value="true"
          />
          <label class="block text-blue-500" for="cbox2">
            {{$t("paymentModal.exclusive")}}
          </label>
        </div>

        <p>
            {{$t("paymentModal.info")}}
        </p>
        
        
        <ButoomCustomVue class=" self-end">{{$t("paymentModal.Subscribe")}}</ButoomCustomVue>
      </Form>
      
    </template>
    <template v-slot:footer>
    </template>
  </ModalVue>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import ButoomCustomVue from './ButoomCustom.vue'
import ModalVue from './Modal.vue'

export default {
  components:{
    ModalVue,
    ButoomCustomVue,
    Form,
    Field,
    ErrorMessage,
  },
  props:{
    showModal:{
      type:Boolean,
      required:true
    }
  },
  data(){
    return{
      stripe:null
    }
  },
  methods:{
    submitCheckOut(data){
      // newsletter:data.newsletter,
      // exclusive:data.exclusive,
      // item:data.item
  
      const listItems = []
      listItems.push({
        price:data.item,
        quantity:1
      })
      if (data.exclusive) {
        listItems.push({
          price:"price_1Jum3JKTV5DU12HUiRjNNytm",
          quantity:1
        })
      }
      console.log(listItems)
      this.stripe.redirectToCheckout({
        successUrl: `${window.location.origin}/success_payment`,
        cancelUrl: `${window.location.origin}/cancel_payment`,
        lineItems: [
          ...listItems
        ],
        mode: "payment"
      });
    },
    loadStripe(){
      console.log("loadStripe")
      /* global Stripe */
      this.stripe = Stripe(process.env.VUE_APP_STRIPE);
    },
  },
  mounted(){  
    this.loadStripe()
  },
  emits: ['toogleShowModal']
}
</script>

<style>

</style>