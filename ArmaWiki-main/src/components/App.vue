<template>
    <Page>
        <ActionBar title="Выберете эмблему" />
        <todo-item></todo-item>
    </Page>
</template>

<script >
import TodoItem from './CategoriesOfTheRussianArmy.vue';
  export default {
    components: { TodoItem }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }
</style>
