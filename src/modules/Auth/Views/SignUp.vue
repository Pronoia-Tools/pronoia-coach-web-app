<template>
  <div class="w-full flex flex-col aling-center items-center">
    <div class="flex w-10/12 md:w-6/12 lg:w-4/12 py-10 place-content-center">
      <!-- image usign Coach_Portfolios -->
      <img src="@/assets/WorkbookFactoryLogo.png" alt="logo" />
    </div>
    <div class="flex flex-row place-content-center">
    <div class="flex w-10/12 md:w-6/12 lg:w-4/12 py-10 place-content-center">
      <!-- image usign Coach_Portfolios -->
      <img src="@/assets/Coach_Portfolios.png" alt="logo" />
    </div>
    <div class="w-10/12 md:w-6/12 lg:w-4/12 py-10">
      <Form
        class="text-gray-500 px-10 flex flex-col items-center gap-2"
        @submit="submitSignUp"
      >
        <div class="grid grid-cols-2 gap-4 w-full">
          <div class="field">
            <label class="block" for="fistName">{{
              $t("sign-up.first-name")
            }}</label>
            <Field
              class="w-full px-2 py-1 border rounded border-gray-400"
              type="text"
              name="firstName"
              rules="required"
            />
            <ErrorMessage class="text-red-400" name="firstName"></ErrorMessage>
          </div>

          <div class="field">
            <label class="block" for="LastName">{{
              $t("sign-up.last-name")
            }}</label>
            <Field
              class="w-full px-2 py-1 border rounded border-gray-400"
              type="text"
              name="LastName"
              rules="required"
            />
            <ErrorMessage class="text-red-400" name="LastName"></ErrorMessage>
          </div>
        </div>

        <div class="field w-full">
          <label class="block" for="email">{{ $t("sign-up.email") }}</label>
          <Field
            class="w-full px-2 py-1 border rounded border-gray-400"
            type="email"
            name="email"
            rules="required|email"
          />
          <ErrorMessage class="text-red-400" name="email"></ErrorMessage>
        </div>

        <div class="field w-full">
          <label class="block" for="password">{{
            $t("sign-up.password")
          }}</label>
          <Field
            class="w-full px-2 py-1 border rounded border-gray-400"
            type="password"
            name="password"
            rules="required"
          />
          <ErrorMessage class="text-red-400" name="password"></ErrorMessage>
        </div>

        <div class="field w-full">
          <label class="block" for="passwordConfirm">{{
            $t("sign-up.password-confirmation")
          }}</label>
          <Field
            class="w-full px-2 py-1 border rounded border-gray-400"
            type="password"
            name="passwordConfirm"
            rules="required|confirmed:password"
          />
          <ErrorMessage
            class="text-red-400"
            name="passwordConfirm"
          ></ErrorMessage>
        </div>

        <div class="field w-full">
          <label class="block" for="country">{{ $t("sign-up.country") }}</label>
          <Field
            class="w-full px-2 py-1 border rounded border-gray-400"
            name="country"
            rules="required"
            as="select"
          >
            <option value="" disabled>{{ $t("input.select") }}</option>
            <option
              v-for="country in countryList"
              :key="country.countryCode"
              :value="country.name"
            >
              {{ country.name }}
            </option>
            <!-- <option value="Mexico">{{$t("countries.mexico")}}</option>
            <option value="USA">{{$t("countries.usa")}}</option> -->
          </Field>
          <ErrorMessage class="text-red-400" name="country"></ErrorMessage>
        </div>

        <div class="field w-full">
          <label class="block" for="listing_badge">{{
            $t("sign-up.listing_badge")
          }}</label>
          <Field
            class="w-full px-2 py-1 border rounded border-gray-400"
            name="listing_badge"
            rules="required"
            as="select"
          >
            <option value="" disabled>{{ $t("input.select") }}</option>
            <option
              v-for="badge in badgeList"
              :key="badge.id"
              :value="badge.name"
            >
              {{ badge.name }}
            </option>
            <!-- <option value="Mexico">{{$t("countries.mexico")}}</option>
            <option value="USA">{{$t("countries.usa")}}</option> -->
          </Field>
          <ErrorMessage class="text-red-400" name="country"></ErrorMessage>
        </div>

        <div class="flex flex-col justify-start">
          <div class="flex justify-start items-center gap-3 my-4">
            <Field
              type="checkbox"
              name="newsletter"
              class="block"
              :value="true"
            />
            <label class="block text-blue-500" for="cbox2">{{
              $t("sign-up.newsletter_checkbox")
            }}</label>
          </div>

          <div class="flex justify-start items-start gap-3 my-4">
            <Field
              type="checkbox"
              name="pre_launch"
              class="block"
              :value="true"
            />
            <label class="block text-blue-500" for="cbox2">{{
              $t("sign-up.pre_launch")
            }}</label>
            <span
              title="Lock-in your first year of the full Pronoia Cloud suite with this exclusive pre-launch pricing. $35 today locks in your first year at that rate. After the launch Pronoia Cloud will be $50/month"
            >
              <FontAwesomeIcon :icon="InfoCircle"></FontAwesomeIcon>
            </span>
          </div>

          <!-- <div class="flex justify-start items-center gap-3 my-4">
          <Field
            type="checkbox"
            name="notifyme"
            class="block"
            :value="true"
          />
          <label class="block text-blue-500" for="cbox2"
            >{{$t("sign-up.checkBox")}}</label
          >
        </div> -->
        </div>
        <div>
          <button class="p-2 bg-purple-900 text-white">
            {{ $t("sign-up.submit") }}
          </button>
        </div>

        <router-link to="/login" class="underline text-purple-900">{{
          $t("sign-up.already-have-acount")
        }}</router-link>
        <!-- <ButoomCustomVue class="bg-myOrange" @click="toogleShowModalPayment">{{$t("input.joinWhitelist")}}</ButoomCustomVue> -->
      </Form>
    </div>
    </div>
  </div>
  <PaymentModalVue
    :showModal="showModalPayment"
    @toogleShowModal="toogleShowModalPayment"
  ></PaymentModalVue>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import { Form, Field, ErrorMessage } from "vee-validate";
import { mapActions, mapState } from "vuex";
import Swall from "sweetalert2";
import countries from "@/assets/countryList.json";
import badges from "../../../utils/badgeList";
import PaymentModalVue from "../../../components/PaymentModal.vue";
// import ButoomCustomVue from '../../../components/ButoomCustom.vue';

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
    PaymentModalVue,
    FontAwesomeIcon,
    // ButoomCustomVue,
  },
  data() {
    return {
      countryList: countries,
      badgeList: badges,
      showModalPayment: false,
      InfoCircle: faInfoCircle,
    };
  },
  computed: {
    ...mapState("auth", ["isAuthenticated"]),
  },
  methods: {
    ...mapActions("auth", ["signUp", "logout"]),
    toogleShowModalPayment() {
      this.showModalPayment = !this.showModalPayment;
    },
    async submitSignUp(data) {
      let revisedData = {
        firstname: data.firstName,
        lastname: data.LastName,
        email: data.email,
        password: data.password,
        country: data.country,
        notify: data.notifyme,
        listing_badge: data.listing_badge,
        newsletter: data.newsletter,
        pre_launch: data.pre_launch,
      };
      if (!revisedData.notify) {
        revisedData.notify = false;
      }
      if (!revisedData.pre_launch) {
        revisedData.pre_launch = false;
      }
      if (!revisedData.newsletter) {
        revisedData.newsletter = false;
      }
      console.log(revisedData);
      try {
        const response = await this.signUp(revisedData);
        if (this.isAuthenticated) {
          console.log("success");
          console.log(response);
          console.log(response.data);
          // console.log(response.data.data)
          // console.log(response.data.data.token)
          // console.log(response.data.data.user)

          // search in data.badgeList for object with name revisedData.listing_badge
          // let badge = this.badgeList.find(badge => badge.name === revisedData.listing_badge);
          // const listItems = []

          //   if (badge.stripe_price !== "") {
          //     listItems.push({
          //       price: badge.stripe_price,
          //       quantity: 1,
          //     });
          //   }

          //   if (revisedData.pre_launch) {
          //     listItems.push({
          //       price: process.env.VUE_APP_STRIPE_PRE_LAUNCH,
          //       quantity:1
          //     })
          //   }
          //   console.log(listItems)
          //   console.log("pre payment")
          //   if (listItems.length > 0) {
          //     this.stripe.redirectToCheckout({
          //       successUrl: `${window.location.origin}/success_payment`,
          //       cancelUrl: `${window.location.origin}/cancel_payment`,
          //       lineItems: [
          //         ...listItems
          //       ],
          //       mode: "payment"
          //     });
          //   } else {
          //     this.logout();
          //   }
          // this.showModalPayment =!this.showModalPayment;
          // this.$router.push({name:"WorkBookLayout"});
          console.log("dsasd");
          if (response.data.stripe_session) {
            console.log("stripe session");
            this.stripe.redirectToCheckout({
              sessionId: response.data.stripe_session.id,
            });
          } else {
            this.logout();
          }
        } else {
          Swall.fire({
            title: this.$t("swallAlertGeneral.error"),
            text: this.$t("swallAlertGeneral.try-again"),
            icon: "error",
          });
        }
      } catch (error) {
        Swall.fire({
          icon: "error",
          title: `${this.$t("swallAlertGeneral.error")}`,
          text: error.response.data.message,
        });
      }
    },
    loadStripe() {
      console.log("loadStripe");
      /* global Stripe */
      this.stripe = Stripe(process.env.VUE_APP_STRIPE);
    },
  },
  mounted() {
    this.loadStripe();
  },
};
</script>