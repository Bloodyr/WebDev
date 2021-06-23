<template>
    <Page>
        <ActionBar title="Выберите тип шасси">
            <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="goBack" />
        </ACtionBar>
        <ScrollView orientation="vertical">
            <StackLayout>
                <FlexboxLayout v-for="(el, k) in vechnicType" v-bind:key="k" flexDirection="column" height="250" @tap="nextPage(k)">
                    <Image :src="el[0]" />
                    <Label :text="el[1]" />
                </FlexboxLayout>
            </StackLayout>
        </ScrollView> 
    </Page>    
</template>
<script>
import Technics from './Technics';
import vechnicType from '../mocks/vehicleChassis';
export default {
    props: {
        emblems_id: Number,
        technics_type_id: Number,
    },

    computed: {
        vechnicType(){
            return vechnicType
        }
    },
    
    methods:{
        goBack(){
            this.$navigateBack()        
        },
        
        nextPage(key){
            this.$navigateTo(Technics, {props: {
                emblems_id: this.emblems_id,
                technics_type_id: this.technics_type_id,
                chassis_type_id: key
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