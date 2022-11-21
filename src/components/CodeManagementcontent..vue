<template>
  <div class="ddd">
    <div class="row col-12">
      <div class="row col-6">
        <q-input
          outlined
          label="CO Code (s)"
          class="indi"
          dense
          v-model="filter"
        />

        <q-input
          outlined
          v-model="CsCode"
          label="CS Code (s)"
          class="indi"
          dense
        />
        <q-input
          outlined
          v-model="Email"
          label="Email (s)"
          class="indi"
          dense
        />
        <div class="holder">
          <q-btn
            color="primary"
            icon="search"
            label="Search"
            class="button"
            @click="increment(1)"
          />
        </div>
      </div>
      <div class="btnhld">
        <q-btn
          color="primary"
          icon="folder"
          label="Group Update"
          class="button"
          @click="$refs.Group.show()"
        />

        <q-btn
          color="primary"
          icon="add"
          label="New"
          class="button"
          @click="$refs.New.show()"
        />
      </div>
    </div>

    <div>{{ count }}</div>
  </div>

  <q-table
    flat
    bordered
    class="statement-table"
    :rows="currencyData"
    :hide-header="grid"
    :columns="currencyColumns"
    row-key="__index"
    :grid="grid"
    :filter="filter"
    v-model:pagination="pagination"
    :rows-per-page-options="[6]"
    @focusin="activateNavigation"
    @focusout="deactivateNavigation"
    @keydown="onKey"
    tabindex="0"
    :loading="loading"
  >
    <template #body-cell-Email="props">
      <q-td :props="props">
        <a v-on:click="$refs.dialog.show()">
          {{ props.value }}
        </a>
      </q-td>
    </template>
    <template #body-cell-action="props">
      <q-td :props="props">
        <q-btn
          dense
          flat
          round
          color="blue"
          label="Edit"
          field="edit"
          @click="editItem(props.row)"
        ></q-btn>
      </q-td>
    </template>
  </q-table>
  <q-dialog v-model="show_dialog">
    <q-card style="width: 400px; max-width: 60vw; border-radius: 15px">
      <q-card-section>
        <q-btn
          round
          flat
          dense
          icon="close"
          class="float-right"
          color="grey-8"
          v-close-popup
        ></q-btn>
        <div class="editholder">
          <div class="Editheading">Edit Code</div>
        </div>
      </q-card-section>
      <q-separator inset></q-separator>
      <q-card-section class="q-pt-none">
        <q-form class="q-gutter-md">
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label class="q-pb-xs"
                  >CO Code / Bill Other Code</q-item-label
                >
                <q-input dense outlined v-model="editedItem.Cocode" />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label class="q-pb-xs">Cs Code</q-item-label>
                <q-input dense outlined v-model="editedItem.Cscode" />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label class="q-pb-xs">Email</q-item-label>
                <q-input outlined v-model="editedItem.Email" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-form>
      </q-card-section>
      <q-card-section>
        <q-card-actions>
          <q-btn
            color="white"
            text-color="primary"
            label="Cancel"
            dense
            v-close-popup
            size="12.5px"
            class="btnstyle"
          />

          <q-btn
            text-color="white"
            label="Save"
            dense
            color="primary"
            v-close-popup
            @click="updateRow"
            class="btnstyle"
          />
        </q-card-actions>
      </q-card-section>
    </q-card>
  </q-dialog>

  <q-dialog ref="Group">
    <q-card style="width: 400px; max-width: 60vw; border-radius: 15px">
      <q-card-section>
        <q-btn
          round
          flat
          dense
          icon="close"
          class="float-right"
          color="grey-8"
          v-close-popup
        ></q-btn>
        <div class="editholder">
          <div class="Editheading">Group Update</div>
        </div>
      </q-card-section>
      <q-separator inset></q-separator>
      <q-card-section class="q-pt-none"> </q-card-section>
      <q-card-section>
        <div class="mh">
          <p class="cardholder">Group Update email based on search result of</p>
          <div class="grouprow"><p class="innerheade">CO Code</p></div>

          <div class="grouprow">
            <p class="innerheade">CO Code</p>
            <p>ABC1;</p>
          </div>
        </div>
        <q-list>
          <q-item>
            <q-item-section>
              <q-item-label class="q-pb-xs">Email</q-item-label>
              <q-input dense outlined v-model="editedItem.Cocode" />
            </q-item-section>
          </q-item>
        </q-list>
        <q-card-actions>
          <q-btn
            color="white"
            text-color="primary"
            label="Cancel"
            dense
            v-close-popup
            size="12.5px"
            class="btnstyle"
          />

          <q-btn
            text-color="white"
            label="Update"
            dense
            color="primary"
            v-close-popup
            @click="updateRow"
            class="btnstyle"
          />
        </q-card-actions>
      </q-card-section>
    </q-card>
  </q-dialog>

  <q-dialog ref="dialog">
    <q-card style="width: 400px; max-width: 60vw; border-radius: 15px">
      <q-card-section>
        <q-btn
          round
          flat
          dense
          icon="close"
          class="float-right"
          color="grey-8"
          v-close-popup
        ></q-btn>
        <div class="editholder">
          <div class="Editheading">CSP Account</div>
        </div>
      </q-card-section>
      <q-separator inset></q-separator>
      <q-card-section class="q-pt-none">
        <q-form class="q-gutter-md">
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label class="q-pb-xs">Email</q-item-label>
                <q-input
                  dense
                  outlined
                  v-model="editedItem.Cocode"
                  placeholder="abc@gmail.com"
                />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label class="q-pb-xs">Username</q-item-label>
                <q-input
                  dense
                  outlined
                  v-model="editedItem.Cscode"
                  placeholder="ABC"
                />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label class="q-pb-xs">Status</q-item-label>
                <q-select
                  outlined
                  v-model="model"
                  :options="options"
                  dense
                  placeholder="Active"
                />
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section>
                <q-item-label class="q-pb-xs">2FA</q-item-label>
                <div class="radioholder">
                  <q-radio
                    dense
                    v-model="shape"
                    val="Enable"
                    label="Enable"
                    class="eachradio"
                  />
                  <q-radio
                    dense
                    v-model="shape"
                    val="Disable"
                    label="Disable"
                    class="q-ml-xs"
                  />
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </q-form>
      </q-card-section>
      <q-card-section>
        <q-card-actions>
          <q-btn
            color="white"
            text-color="primary"
            label="Cancel"
            dense
            v-close-popup
            size="12.5px"
            class="btnstyle"
          />

          <q-btn
            text-color="white"
            label="Save"
            dense
            color="primary"
            v-close-popup
            @click="updateRow"
            class="btnstyle"
          />
        </q-card-actions>
      </q-card-section>
    </q-card>
  </q-dialog>

  <q-dialog ref="New">
    <q-card style="width: 400px; max-width: 60vw; border-radius: 15px">
      <q-card-section>
        <q-btn
          round
          flat
          dense
          icon="close"
          class="float-right"
          color="grey-8"
          v-close-popup
        ></q-btn>
        <div class="editholder">
          <div class="Editheading">New Code</div>
        </div>
      </q-card-section>
      <q-separator inset></q-separator>
      <q-card-section class="q-pt-none">
        <q-form class="q-gutter-md">
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label class="q-pb-xs"
                  >CO Code / Bill Other Code</q-item-label
                >
                <q-input dense outlined v-model="editedItem.Cocode" />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label class="q-pb-xs">Cs Code</q-item-label>
                <q-input dense outlined v-model="editedItem.Cscode" />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label class="q-pb-xs">Email</q-item-label>
                <q-input outlined v-model="editedItem.Email" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-form>
      </q-card-section>
      <q-card-section>
        <q-card-actions>
          <q-btn
            color="white"
            text-color="primary"
            label="Cancel"
            dense
            v-close-popup
            size="12.5px"
            class="btnstyle"
          />

          <q-btn
            text-color="white"
            label="Save"
            dense
            color="primary"
            v-close-popup
            @click="updateRow"
            class="btnstyle"
          />
        </q-card-actions>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref, computed, reactive, toRefs, onMounted } from "vue";
import { useQuasar } from "Quasar";
import { red } from "bn.js";
const defaultItem = {
  Cocode: "",
  Cscode: "",
  Email: "",
  action: "",
};
const statuses = ["Active", "Inactive"];
const currencyColumns = [
  {
    name: "Cocode",
    align: "left",
    label: "Co Code / Bill Other Code",
    field: "Cocode",
    sortable: true,

    classes: "text-black",
  },
  {
    name: "Cscode",
    align: "center",
    label: "Cs Code",
    field: "Cscode",
    sortable: true,
    classes: "text-black",
  },
  {
    name: "Email",
    align: "left",
    label: "Email (s)",
    field: "Email",
    sortable: true,
    classes: "text-black",
    onclick: () => {
      console.log("object");
    },
  },
  {
    name: "action",
    align: "center",
    label: "Action",
    field: "action",
    classes: "text-blue",
  },
];
const currencies = [
  {
    Cocode: "ABC",
    Cscode: "ABC1",
    Email: "abc@gmail.com",

    action: "Edit",

    status: "Active",
  },
  {
    Cocode: "ABC",
    Cscode: "ABC1",
    Email: "abc@gmail.com",

    action: "Edit",

    status: "Active",
  },
  {
    Cocode: "ABC",
    Cscode: "ABC1",
    Email: "abc@gmail.com",
    action: "Edit",

    status: "Active",
  },
  {
    Cocode: "ABC",
    Cscode: "ABC1",
    Email: "abc@gmail.com",
    action: "Edit",

    status: "Active",
  },
  {
    Cocode: "ABC",
    Cscode: "ABC1",
    Email: "abc@gmail.com",
    action: "Edit",

    status: "Active",
  },
  {
    Cocode: "ABC",
    Cscode: "ABC1",
    Email: "abc@gmail.com",
    action: "Edit",

    status: "Active",
  },

  {
    Cocode: "ABC",
    Cscode: "ABC1",
    Email: "abc@gmail.com",
    action: "Edit",

    status: "Active",
  },
  {
    Cocode: "ABC",
    Cscode: "ABC1",
    Email: "abc@gmail.com",
    action: "Edit",

    status: "Active",
  },
  {
    Cocode: "ABC",
    Cscode: "ABC1",
    Email: "abc@gmail.com",
    action: "Edit",

    status: "Active",
  },
  {
    Cocode: "ABC",
    Cscode: "ABC1",
    Email: "abc@gmail.com",
    action: "Edit",

    status: "Active",
  },
  {
    Cocode: "ABC",
    Cscode: "ABC1",
    Email: "abc@gmail.com",
    action: "Edit",

    status: "Active",
  },
  {
    Cocode: "ABC",
    Cscode: "ABC1",
    Email: "abc@gmail.com",
    action: "Edit",

    status: "Active",
  },
  {
    Cocode: "ABC",
    Cscode: "ABC1",
    Email: "abc@gmail.com",
    action: "Edit",

    status: "Active",
  },
  {
    Cocode: "ABC",
    Cscode: "ABC1",
    Email: "abc@gmail.com",
    action: "Edit",

    status: "Active",
  },
  {
    Cocode: "ABC",
    Cscode: "ABC1",
    Email: "abc@gmail.com",
    action: "Edit",

    status: "Active",
  },
];

const GroupState = ref(true);

export default {
  name: "CodeManagement",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment(i) {
      this.count === i;
    },
  },

  setup() {
    const q$ = useQuasar();

    const fd = reactive({
      shape: ref("Enable"),
      grid: false,
      CoCode: ref(""),
      CsCode: ref(""),
      Email: ref(""),
      CsCode: ref(""),
      ChitNo: ref(""),
      InvoiceNo: ref(""),
      Select: ref(""),
      selected: [],
      statusOpts: statuses,
      inFs: false,
      btndta: false,
      model: ref(null),
      options: ["Active", "Inactive"],
      noti: () => {},
      show_dialog: false,
      editedIndex: -1,
      editedItem: defaultItem,
      filter: "",
      currencyColumns: currencyColumns,
      currencyData: currencies,
      pagination: {
        page: 1,
      },
      page: 1,
      totalRecord: 0,
      pageCount: 1,
    });

    function editRow(props) {
      fd.noti();
      // do something
      fd.noti = q$.notify({
        type: "info",
        textColor: "grey-10",
        multiLine: true,
        message: `I'll edit row data => ${JSON.stringify(props.row)
          .split(",")
          .join(", ")}`,
        timeout: 2000,
      });
    }
    const GroupState = (i) => {
      GroupState.value = i;
    };
    function editRow(props) {
      fd.noti();
      // do something
      fd.noti = q$.notify({
        type: "info",
        textColor: "grey-10",
        multiLine: true,
        message: `I'll edit row data => ${JSON.stringify(props.row)
          .split(",")
          .join(", ")}`,
        timeout: 2000,
      });
    }

    function deleteRow(props) {
      fd.noti();
      // do something
      fd.noti = q$.notify({
        type: "negative",
        multiline: true,
        message: `I'll delete row data => ${JSON.stringify(props.row)
          .split(",")
          .join(", ")}`,
        timeout: 2000,
      });
    }

    function addRow() {
      if (fd.editedIndex > -1) {
        Object.assign(fd.currencyData[fd.editedIndex], fd.editedItem);
      } else {
        fd.currencyData.push(fd.editedItem);
      }
      fd.close();
    }

    function deleteItem(item) {
      const index = fd.currencyData.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        fd.currencyData.splice(index, 1);
    }

    function editItem(item) {
      fd.editedIndex = fd.currencyData.findIndex(
        (v, i) => v.__index === item.__index
      );
      fd.editedItem = Object.assign({}, item);
      fd.show_dialog = true;
    }

    function editModal(item) {}

    function close() {
      fd.show_dialog = false;
      setTimeout(() => {
        fd.editedItem = defaultItem;
        fd.editedIndex = -1;
      }, 300);
    }

    function setFs(props) {
      props.toggleFullscreen();
      fd.inFs = props.inFullscreen;
    }

    function updateRow() {
      fd.currencyData.splice(fd.editedIndex, 1, fd.editedItem);
      q$.notify({
        type: "positive",
        message: `Item '${fd.editedItem.name}' updated.`,
        timeout: 500,
      });
    }

    onMounted(() => {
      // add indices
      fd.currencyData = fd.currencyData.map((v, i) => ({ ...v, __index: i }));
    });

    return {
      ...toRefs(fd),
      editRow,
      deleteRow,
      addRow,
      deleteItem,
      editItem,
      close,
      setFs,
      updateRow,
      editModal,
      GroupState,
    };
  },
};
</script>

<style scoped>
.Editheading {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  color: #363636;
  text-align: center;
}
.editholder {
  justify-content: center;
  align-items: center;
  display: flex;
}
.btnstyle {
  width: 155px;
  padding: 5px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
}
.indi {
  width: 225px;
  margin-right: 20px;
  margin-top: 20px;
}
.holder {
  margin-bottom: 20px;
  margin-top: 20px;
}
.secondrow {
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.button {
  margin-right: 10px;
  margin-bottom: 20px;
}

.indis {
  width: 470px;
  margin-right: 20px;
  margin-top: -12.5px;
  margin-bottom: 20px;
}
.btnhld {
  margin-top: 20px;
}
.cardholder {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #363636;
}
.mh {
  margin-left: 10px;
  margin-right: 10px;
}
.innerheade {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #363636;
  margin-right: 40px;
}
.grouprow {
  display: flex;
  flex-direction: row;
}
.radioholder {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}
.eachradio {
  margin-right: 100px;
}
</style>
