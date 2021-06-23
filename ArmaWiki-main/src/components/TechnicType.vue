<template>
    <Page>
        <ActionBar title="Выберите тип техники">
            <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="goBack" />
        </ActionBar>
        <ScrollView orientation="vertical">
            <StackLayout>
                <FlexboxLayout v-for="(el, k) in technicType" v-bind:key="k" flexDirection="column" height="250" @tap="nextPage(k)">
                    <Image :src="el[0]" />
                    <Label :text="el[1]" />
                </FlexboxLayout>
            </StackLayout>
        </ScrollView>
    </Page>
</template>
<script>
import AviationType from './AviationType';
import VehicleChassisChoose from './VehicleChassisChoose.vue';
import Technics from './Technics.vue';
import technicType from '../mocks/technicType';
export default {
    props: {
        emblems_id: Number
    },

    computed: {
        technicType(){
            console.log(technicType)
            return technicType
        }
    },

    methods:{

        goBack(){
            this.$navigateBack()        
        },

        nextPage(key){
            if(key == 0){
                this.$navigateTo(AviationType, {props: {
                    emblems_id: this.emblems_id,
                    technics_type_id: 0
                }})
            } else if(key == 1){
                this.$navigateTo(VehicleChassisChoose, {props: {
                    emblems_id: this.emblems_id,
                    technics_type_id: 1
                }})
            } else {
                this.$navigateTo(Technics, {props: {
                    emblems_id: this.emblems_id,
                    technics_type_id: 2
                }})
            }

        }
    },
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