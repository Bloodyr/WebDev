<template>
    <ScrollView orientation="vertical">
        <StackLayout>
            <FlexboxLayout v-for="(el, k) in emblems" v-bind:key="k" flexDirection="column" height="250" @tap="nextPage(k)">
                <Image :src="el[0]" />
                <Label :text="el[1]" />
            </FlexboxLayout>
        </StackLayout>
    </ScrollView>
</template>
<script>
import TechnicType from './TechnicType.vue';
import emblems from '../mocks/emblems';
export default {
    computed:{
        emblems(){
            return emblems
        }
    },

    methods:{
        nextPage(key){
            this.$navigateTo(TechnicType, {props:{
                emblems_id: key
            }})
        }
    }
}
</script>
<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }
    
    FlexboxLayout {
        align-items: center;
        margin: 10, 0;
        border-bottom: 1 solid black;
    }

    Image {
        width: 200;
        height: 150;
    }

    Label {
        font-size: 16;
        font-weight: bold;
    }
</style>