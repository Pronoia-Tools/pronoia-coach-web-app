<template>
  <div class="container mx-auto">
    <!-- modal-->
    <transition name="fade">
      <div
        @click="showModal = false"
        class="modal-overlay w-full h-full"
        v-if="showModal"
      ></div
    ></transition>
    <transition name="fade">
      <div class="modal p-10  rounded-xl " v-if="showModal">
        <div>
          <div class="flex justify-end">
            <button class="right-0" @click="showModal = false">x</button>
          </div>

          <Form @submit="sendReport" class="  text-center  container mx-auto">
            <div class="my-4">
              <p class="text-gray-600">{{$t("feedbackButton.report-type")}}</p>
              <Field
                type="text"
                class=" border border-gray-300 py-2"
                name="report"
                rules="required"
              />
              <br />
              <ErrorMessage class="text-red-400" name="report"></ErrorMessage>
            </div>
            <div class="my-4">
              <p class="text-gray-600">{{$t("feedbackButton.description")}}</p>
              <Field
                rows="8"
                as="textarea"
                class=" border border-gray-300 py-2"
                name="description"
                rules="required"
              />
              <br />
              <ErrorMessage
                class="text-red-400"
                name="description"
              ></ErrorMessage>
            </div>
            <div className="flex justify-center my-10">
              <input
                type="submit"
                class="bg-darkLogo  p-3 text-white cursor-pointer"
                :value="$t('feedbackButton.send')"
              />
            </div>
          </Form>
        </div></div
    ></transition>

    <!-- boton para abrir modal-->
    <div
      class=" cursor-pointer bg-myLightGreen  rounded-full p-3 border shadow-xl border-border m-10 fixed  bottom-0 left-0   z-10"
      @click="showModal = true"
    >
      <font-awesome-icon :icon="myBug" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import { Form, Field, ErrorMessage } from "vee-validate";
import { useRoute } from "vue-router";
import { faBug } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "FeedbackButton",
  components: { Form, Field, ErrorMessage, FontAwesomeIcon },
  data() {
    const route = useRoute();
    // console.log(route.name);
    return {
      myBug: faBug,
      showModal: false,
      report: "",
      description: "",
      route: route.name,
    };
  },
  setup() {},
  methods: {
    sendReport(e) {
      e.path = this.route;
      console.log(e);
      axios.post("http://solodata.es/auth", e).then((data) => {
        console.log(data);
      });
    },
  },
};
</script>

<style>
fade-enter {
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.4);
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  z-index: 101;
}
</style>
