<template>
  <v-data-table
    :headers="headers"
    :items="products"
    :search="search"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>My Products</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on"
              >New Product</v-btn
            >
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                    <v-text-field
                      v-model="editedProduct.title"
                      label="Title"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                    <v-text-field
                      v-model="editedProduct.image"
                      label="Image"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" xs="12" sm="6" md="6">
                    <v-text-field
                      v-model="editedProduct.price"
                      label="Price"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" xs="12" sm="6" md="6">
                    <v-text-field
                      v-model="editedProduct.rating"
                      label="Rating"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save(editedProduct)"
                >Save</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">
        mdi-cogs
      </v-icon>
      <v-icon small @click="deleteProduct(item._id)">
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
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
    formTitle() {
      return this.editedIndex === -1 ? "New Product" : "Edit Product";
    },
    ...mapState("products", ["products"])
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.$store.dispatch("products/GET_PRODUCTS");
  },

  methods: {
    ...mapActions({
      CREATE_PRODUCT: "products/CREATE_PRODUCT",
      UPDATE_PRODUCT: "products/UPDATE_PRODUCT",
      DELETE_PRODUCT: "products/DELETE_PRODUCT"
    }),

    editItem(item) {
      this.editedIndex = this.products.indexOf(item);
      this.editedProduct = Object.assign({}, item);
      this.dialog = true;
    },

    deleteProduct(id) {
      if (confirm("Are you sure you want to delete this product?") === true) {
        this.DELETE_PRODUCT(id);
        this.$store.dispatch("products/GET_PRODUCTS");
      }
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedProduct = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save(editedProduct) {
      if (this.editedIndex > -1) {
        this.UPDATE_PRODUCT(editedProduct);
        this.dialog = false;
        this.$store.dispatch("products/GET_PRODUCTS");
        this.$emit(
          "showSnackbar",
          "Product has been updated",
          "green",
          4000,
          "top"
        );
      }
    }
  }
};
</script>
