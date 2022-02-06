<template>
<div class="invoice-container" data-cy="invoice-container">
    <div class="table-container">
        <table>
        <tr>
            <th>No.</th>
            <th>Item</th>
            <th>Creación</th>
            <th>Vencimiento</th>
            <th>Cliente</th>
            <th>Vendedor</th>
            <th>Cantidad</th>
            <th>Total</th>
        </tr>
        <tr>
            <td>{{invoice.id}}</td>
            <td>{{invoice.items[0].name}}</td>
            <td>{{invoice.date}}</td>
            <td>{{invoice.dueDate}}</td>
            <td>{{ invoice.client.name }}</td>
            <td>{{ invoice.seller.name }}</td>
            <td>{{invoice.items[0].quantity}}</td>
            <td>{{invoice.total}}</td>
        </tr>
        </table>
    </div>
    <div class="anotation">
      <p>{{invoice.anotation}}</p>
    </div>
</div>

</template>

<script>
import {  computed  } from 'vue';
import { useStore } from 'vuex';


export default {
  setup(){
    const store = useStore()
    const invoice = computed(() => store.getters['invoiceCreated'])
    return {
        invoice
    }
  }
}
</script>

<style scoped>
.invoice-container {
  max-width: 100vw;
  font-family: 'Catamaran', sans-serif;
}
.table-container {
  max-width: 100%;
  overflow-x: auto;
}

.table-container td, .table-container th {
  border: 1px solid #ddd;
  padding: 8px;
}

.table-container tr:nth-child(even){background-color: #f2f2f2;}

.table-container tr:hover {background-color: #ddd;}

.table-container th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #ea4aaa;
  color: white;
}
</style>