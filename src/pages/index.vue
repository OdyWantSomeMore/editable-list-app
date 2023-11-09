<script>
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import DefaultLayout from "@/layouts/default.vue";
import ModalComponent from "@/components/ModalComponent.vue";

export default {
  components: {
    DefaultLayout,
    ModalComponent,
  },
  data: () => ({
    users: [
      {
        id: 1,
        name: "Saffron",
        surname: "Davies",
        tenure: "3",
        age: "24",
        address: "Beruni 113/21",
      },
      {
        id: 2,
        name: "Sadia",
        surname: "Meza",
        tenure: "6",
        age: "33",
        address: "Derby 11A 11/3",
      },
      {
        id: 3,
        name: "Odilov",
        surname: "Abdugaffor",
        tenure: "1",
        age: "17",
        address: "Amir temur 13A",
      },
    ],
    isModalOpened: false,
    userToEdit: {},
    editedUserId: null,
  }),
  mounted() {
    $("#datatable").DataTable({
      columns: [null, null, null, null, null, { width: '0' }],
    });
  },
  methods: {
    openModal(index = null) {
      this.editedUserIndex = index;
      if (index !== null) {
        this.userToEdit = JSON.parse(JSON.stringify(this.users[index]));
      }
      this.isModalOpened = true;
    },
    closeModal() {
      this.isModalOpened = false;
      this.userToEdit = {};
    },
    save() {
      if (this.editedUserIndex !== null) {
        this.users[this.editedUserIndex] = JSON.parse(JSON.stringify(this.userToEdit));
      } else {
        this.users.push(this.userToEdit);
      }

      this.closeModal();
    },
    deleteUser(index) {
      if (index !== null && this.users[index]) {
        this.users.splice(index, 1);
      }
    },
  },
};
</script>

<template>
  <DefaultLayout>
    <div class="w-full justify-center bg-background">
      <div class="flex justify-between">
        <h1 class="mb-5 ml-12 mt-7 text-3xl font-black">
          Список сотрудников:
        </h1>
        <button
          class="my-5 mr-16 rounded-[10px] border-[none] bg-[#282828] px-[30px] py-[10px] text-[17px] text-[#fff] transition-all hover:bg-[#444444]"
          @click="openModal()"
        >
          Добавить +
        </button>
      </div>
      <div class="px-12 pb-7">
        <div class="mb-5 w-full rounded-lg bg-light-gray p-12">
          <table
            id="datatable"
            class="stripe table text-gray"
          >
            <thead>
              <tr>
                <th>Имя</th>
                <th>Фамилия</th>
                <th>Стаж</th>
                <th>Возраст</th>
                <th>Адрес</th>
                <th class="no-sort" />
              </tr>
            </thead>
            <tbody class="">
              <tr
                v-for="(item, i) in users"
                :key="item.id"
              >
                <td>{{ item.name }}</td>
                <td>{{ item.surname }}</td>
                <td>{{ item.tenure }}</td>
                <td>{{ item.age }}</td>
                <td>{{ item.address }}</td>
                <td>
                  <div class="flex">
                    <div>
                      <button
                        class="mr-2 rounded-lg bg-blue px-4 py-2 text-white duration-200 hover:bg-dark-blue"
                        @click="openModal(i)"
                      >
                        Изменить
                      </button>
                    </div>
                    <div>
                      <button
                        class="rounded-lg bg-red px-4 py-2 text-white duration-200 hover:bg-dark-red"
                        @click="deleteUser(i)"
                      >
                        Удалить
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <ModalComponent
      v-if="isModalOpened"
      @close="closeModal()"
    >
      <form
        class="mx-auto my-0 w-[50%]"
        @submit.prevent="save()"
      >
        <div class="mb-5 flex flex-col">
          <label for="name-input">Имя</label>
          <input
            id="name-input"
            v-model="userToEdit.name"
            type="text"
            class="rounded p-2"
          >
        </div>
        <div class="mb-5 flex flex-col">
          <label for="surname-input">Фамилия</label>
          <input
            id="surname-input"
            v-model="userToEdit.surname"
            type="text"
            class="rounded p-2"
          >
        </div>
        <div class="mb-5 flex flex-col">
          <label for="tenure-input">Стаж</label>
          <input
            id="tenure-input"
            v-model="userToEdit.tenure"
            type="text"
            class="rounded p-2"
          >
        </div>
        <div class="mb-5 flex flex-col">
          <label for="age-input">Возраст</label>
          <input
            id="age-input"
            v-model="userToEdit.age"
            type="text"
            class="rounded p-2"
          >
        </div>
        <div class="mb-5 flex flex-col">
          <label for="address-input">Адрес</label>
          <input
            id="address-input"
            v-model="userToEdit.address"
            type="text"
            class="rounded p-2"
          >
        </div>

        <button
          type="submit"
          class="rounded bg-black px-4 py-2 text-white"
        >
          Сохранить
        </button>
      </form>
    </ModalComponent>
  </DefaultLayout>
</template>

<style>
.no-sort::after {
  display: none !important;
}
.no-sort::before {
  display: none !important;
}
.no-sort {
  pointer-events: none !important;
  cursor: default !important;
}

.paginate_button {
  background: transparent !important;
  color: #2d3134;
  margin-top: 20px;
  margin-right: 10px;
  transition: all 0.5s;
}

.dataTables_info {
  margin-top: 20px;
}

.dataTables_filter {
  margin-bottom: 20px;
  border-radius: 50px;
}

.dataTables_wrapper .dataTables_paginate .paginate_button:hover {
  color: #2d3134 !important;
}
</style>
