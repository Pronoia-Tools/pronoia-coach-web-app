<template class="container mx-auto">
  <div class="container mx-auto">
    <h1 class="text-lgText">All workbooks</h1>

    <div class="border border-black h-60">
      <div class="border border-gray-800">
        <h2 class="text-lgText my-5">Filter</h2>
        <div class="flex md:flex-row flex-col justify-around ">
          <div class="flex flex-col">
            <div>
              <label>Title</label> <input class="border border-border" />
            </div>
            <div>
              <label>Author</label>
              <input class="border border-border" />
            </div>
          </div>
          <div class="flex flex-col">
            <div>
              <label>Language</label> <input class="border border-border" />
            </div>
            <div>
              <label>Category</label> <input class="border border-border" />
            </div>
          </div>
          <div class="flex flex-col">
            <div>
              <label>Price</label>
              <input class="border border-border" />
              <input class="border border-border" />
            </div>
            <div>
              <label>Arrange by</label> <input class="border border-border" />
            </div>
          </div>
        </div>
        <button class="">Cancel</button>
        <button>Apply filter</button>
      </div>
      <div class="grid grid-cols-4 container mx-auto flex justify-center">
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Login",
  components: {},
  data() {},
  methods: {},
};
</script>
