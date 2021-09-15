<template>
  <div class="container mx-auto">
    <!-- modal-->
    <transition name="fade">
      <div class="modal-overlay" v-if="showModal"></div
    ></transition>
    <transition name="fade">
      <div class="modal" v-if="showModal">
        <div>
          <Form @submit="sendReport" class=" text-center  container mx-auto">
            <div class="my-4">
              <p class="text-gray-600">Type of report</p>
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
              <p class="text-gray-600">Description</p>
              <Field
                type="text"
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
                class="bg-blue-800 p-3 text-white cursor-pointer"
                value="Send"
              />
            </div>
          </Form>
        </div>
        <button @click="showModal = false">cerrar modal</button>
      </div></transition
    >

    <!-- boton para abrir modal-->
    <button
      class="bg-paleLogo rounded-full p-3 border shadow-lg border-border m-10"
      @click="showModal = true"
    >
      🐞
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import { Form, Field, ErrorMessage } from "vee-validate";
import { useRoute } from "vue-router";

export default {
  name: "FeedbackButton",
  components: { Form, Field, ErrorMessage },
  data() {
    const route = useRoute();
    return {
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
  position: absolute;
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
