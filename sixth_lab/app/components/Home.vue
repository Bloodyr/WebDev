<template>
    <Page>
        <ActionBar>
            <Label text="Погода"/>
        </ActionBar>

        <ListView for="item in cities" @itemTap="onItemTap($event)">
            <v-template>
                <Label class="info" :text="item" />
            </v-template>
        </ListView>
    </Page>
</template>

<script>
 import Details from './Details'

  export default {
    data() {
        return {
            meteoObj: null,
            cities: ["Москва","Санкт-Петербург","Тверь","Омск",
                     "Казань","Екатеринбург","Ханты-мансийск",
                     "Красноярск","Магадан", "Хабаровск"]
        };
    },

    methods:{
        onItemTap: function(event){
            this.$showModal(Details, {
                    fullscreen: true, 
                    props: {id: event.index}})
        }
    }
  };
</script>

<style scoped lang="scss">
    @import '@nativescript/theme/scss/variables/blue';

    .info {
        font-size: 18;
        color:darkslateblue;
    }

    .modalForm{
        margin-top: 100;
    }

    .city{
        font-weight: bold;
        font-size: 30;
        text-align: center;
    }

    .weatherTable{
        font-size: 16;
    }
</style>
