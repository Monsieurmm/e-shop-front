<template>
  <v-data-iterator :items="products" :search="search" hide-default-footer>
    <template v-slot:header>
      <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>Products</v-toolbar-title>
      </v-toolbar>
    </template>

    <template v-slot:default="props">
      <v-row>
        <v-col cols="4">
          <v-select
            v-model="search"
            :items="products"
            item-text="category"
            item-value="category"
            label="Filter by category"
            clearable
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="item in props.items"
          :key="item._id"
          cols="12"
          sm="12"
          md="6"
          lg="6"
        >
          <v-card>
            <v-card-title class="subheading font-weight-bold">
              <template>
                <v-edit-dialog
                  :return-value.sync="item.title"
                  @save="save(item)"
                >
                  {{ item.title }}
                  <template v-slot:input>
                    <v-text-field
                      v-model="item.title"
                      label="Title"
                      single-line
                      counter
                    ></v-text-field>
                  </template>
                </v-edit-dialog>
              </template>
            </v-card-title>

            <img :src="item.image" />

            <v-divider></v-divider>

            <v-list dense>
              <v-list-item>
                <v-list-item-content>Src:</v-list-item-content>
                <v-list-item-content class="align-end">
                  <template>
                    <v-edit-dialog
                      :return-value.sync="item.image"
                      @save="save(item)"
                    >
                      {{ item.image }}
                      <template v-slot:input>
                        <v-text-field
                          v-model="item.image"
                          label="Image"
                          single-line
                          counter
                        ></v-text-field>
                      </template>
                    </v-edit-dialog>
                  </template>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>Price:</v-list-item-content>
                <v-list-item-content class="align-end">
                  <template>
                    <v-edit-dialog
                      :return-value.sync="item.price"
                      @save="save(item)"
                    >
                      {{ item.price }}
                      <template v-slot:input>
                        <v-text-field
                          v-model="item.price"
                          label="Price"
                          single-line
                          counter
                        ></v-text-field>
                      </template>
                    </v-edit-dialog>
                  </template>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-spacer></v-spacer>
                <v-btn color="red" text @click="deleteProduct(item._id)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </v-data-iterator>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data: () => ({
    dialog: false,
    search: "",
    headers: [
      {
        text: "Name",
        align: "start",
        sortable: true,
        value: "title"
      },
      { text: "Image", value: "image" },
      { text: "Price", value: "price", sortable: true },
      { text: "Rating", value: "rating", sortable: true },
      { text: "Actions", value: "actions" }
    ],
    editedIndex: -1,
    editedProduct: {
      title: "",
      image: "",
      price: 0,
      rating: 0
    },
    defaultItem: {
      title: "",
      image: "",
      price: 0,
      rating: 0
    }
  }),

  computed: {
    ...mapState("products", ["products"])
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  methods: {
    ...mapActions({
      CREATE_PRODUCT: "products/CREATE_PRODUCT",
      UPDATE_PRODUCT: "products/UPDATE_PRODUCT",
      DELETE_PRODUCT: "products/DELETE_PRODUCT"
    }),

    deleteProduct(id) {
      if (confirm("Are you sure you want to delete this product?") === true) {
        this.DELETE_PRODUCT(id);
        this.$emit(
          "showSnackbar",
          "Product has been deleted",
          "green",
          4000,
          "top"
        );
        return this.$store.state.products;
      }
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedProduct = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save(item) {
      this.editedIndex = this.products.indexOf(item);
      if (this.editedIndex > -1) {
        console.log(this.editedIndex);
        this.UPDATE_PRODUCT(item);
        console.log(item);
        return this.$store.state.products;
      }
    }
  }
};
</script>
