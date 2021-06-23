<template>
    <Page>
        <ActionBar title="Выберите тип самолета:">
            <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="goBack" />
        </ActionBar>
        <ScrollView orientation="vertical">
            <StackLayout v-if="first_choose == true">
                <FlexboxLayout v-for="(el, k) in first_airplane_type" v-bind:key="k" flexDirection="column" height="250" @tap="nextChoose(el.id)">
                    <Image :src="el.src" />
                    <Label :text="el.name" />
                </FlexboxLayout>
            </StackLayout>
            <StackLayout v-if="first_choose == false">
                <FlexboxLayout v-for="(el, k) in second_airplane_type" v-bind:key="k" flexDirection="column" height="250" @tap="nextPage(el.id)">
                    <Image :src="el.src" />
                    <Label :text="el.name" />
                </FlexboxLayout>
            </StackLayout>
        </ScrollView>
    </Page>    
</template>
<script>
import Technics from './Technics';
import airplainType from '../mocks/airplainType';
export default {
    props: {
        emblems_id: Number,
        technics_type_id: Number,
    },
    data:function(){
        return {
            first_choose: true,
            first_airplane_type: [],
            second_airplane_type: [],
            first_airplane_type_id: 0,
        }
    },

    computed: {
        airplainType(){
            return airplainType
        }
    },

    methods: {
        goBack(){
            this.$navigateBack()        
        },

        nextChoose(key){
            this.first_airplane_type_id = key
            this.first_choose = false
        },

        nextPage(key){
            this.first_choose = true
            this.$navigateTo(Technics, {props: {
                emblems_id: this.emblems_id,
                technics_type_id: this.technics_type_id,
                first_airplane_type_id: this.first_airplane_type_id,
                second_airplane_type_id: key
            }})
        }
    },

    mounted(){
        this.first_choose = true
        airplainType[0].forEach(element => {
            this.first_airplane_type.push(element)
        });
        airplainType[1].forEach(element => {
            this.second_airplane_type.push(element)
        });
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