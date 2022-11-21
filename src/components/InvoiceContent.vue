<template>
  <div class="Mainholder">
    <div class="Sub1holder">
      <div class="row col-12">
        <q-select
          outlined
          :options="options"
          v-model="Select"
          label="Incurred Month"
          class="indi"
          dense
        />
        <q-input
          outlined
          v-model="DeliveryForm"
          label="Invoice Delivery Form"
          class="indi"
          dense
        />
        <q-input
          outlined
          v-model="DeliveryTo"
          label="Invoice Delivery To"
          class="indi"
          dense
        />
      </div>
    </div>

    <div class="Sub2holder">
      <div class="row col-12">
        <q-input outlined v-model="CoCode" label="CO Code" class="indi" dense />
        <q-input outlined v-model="CsCode" label="CS Code" class="indi" dense />
        <q-input
          outlined
          v-model="InvoiceNo"
          label="Invoice No."
          class="indi"
          dense
        />
        <q-input
          outlined
          v-model="ChitNo"
          label="Chit No."
          class="indi"
          dense
        />
        <div class="holder">
          <q-btn color="primary" icon="search" label="Search" class="button" />
        </div>
      </div>
    </div>
    <!-- <q-table :rows="rows" :columns="columns" row-key="name" class="table" /> -->
    <InvoicecontentTable />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "InvoiceContent",
  props: {
    msg: String,
  },
  data: () => {
    return {
      Data: rows,
    };
  },
  setup() {
    return {
      columns,
      rows,
      model: ref(null),
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
      DeliveryForm: ref(""),
      DeliveryTo: ref(""),
      CoCode: ref(""),
      CsCode: ref(""),
      ChitNo: ref(""),
      InvoiceNo: ref(""),
      Select: ref(""),
    };
  },
  methods: {
    submitForm() {
      console.log("Clicked");
    },
  },
  components: { InvoicecontentTable },
};

const columns = [
  {
    name: "Incurred Month",
    required: true,
    label: "Incurred Month",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
    onclick: () => {},
  },
  {
    name: "Invoice Delivery Date",
    align: "center",
    label: "Invoice Delivery Date",
    field: "InvoiceDate",
    sortable: true,
  },
  {
    name: "Invoice No.",
    label: "Invoice No.",
    field: "InvoiceNo",
    sortable: true,
  },
  { name: "CS code", label: "CS code", field: "CScode" },
  {
    name: "CO Code/Bill Other Code",
    label: "CO Code/Bill Other Code",
    field: "COCODE",
  },
  { name: "No of Chit", label: "No of Chit", field: "NOOFCHIT" },
  {
    name: "Action",
    label: "Invoice",
    field: "Action",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
];
const rows = [];

// @ is an alias to /src

import HomeHeader from "src/components/HomeHeader.vue";
import InvoicecontentTable from "./InvoicecontentTable.vue";
</script>

<style scoped>
.indi {
  width: 225px;
  margin-right: 20px;
  margin-top: 20px;
}
.holder {
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>
