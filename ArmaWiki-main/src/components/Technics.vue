<template>
    <Page>
        <ActionBar title="Техника" >
            <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="goBack" />
        </ActionBar>
        <ScrollView orientation="vertical">
            <StackLayout v-if="this.end_technics.length != 0">
                <FlexboxLayout v-for="(el, k) in end_technics" v-bind:key="k" flexDirection="column" height="250" @tap="nextPage(el.id)">
                    <Image :src="el.src" />
                    <Label :text="el.name" />
                </FlexboxLayout>
            </StackLayout>
            <StackLayout v-else>
                <Label text="Техники нету или она не добавлена" />
            </StackLayout>
        </ScrollView> 
    </Page>    
</template>
<script>
import technics from '../mocks/technics';
import emblems from '../mocks/emblems';
import technicType from '../mocks/technicType';
import vehicleChassis from '../mocks/vehicleChassis';
import airplainType from '../mocks/airplainType';
import Technic from './Technic.vue';
export default {
    props: {
        emblems_id: Number,
        technics_type_id: Number,
        first_airplane_type_id: Number,
        second_airplane_type_id: Number,
        chassis_type_id: Number
    },

    data:function(){
        return {
            end_technics: [],
            emblem_name: '',
            technics_type_name: '',
            first_airplane_type_name: '',
            second_airplane_type_name: '',
            chassis_type_name: ''
        }
    },

    computed: {
        technics() {
            return technics
        },
        emblems() {
            return emblems
        },
        technicType(){
            return technicType
        },
        vehicleChassis(){
            return vehicleChassis
        },
        airplainType(){
            return airplainType
        }
    },
    
    methods: {
        goBack(){
            this.$navigateBack()        
        },

        findTechnics(emblems_id, technics_type_id){
            this.emblem_name = emblems[this.emblems_id][2]
            this.technics_type_name = technicType[this.technics_type_id]
            if(technics_type_id == 0){
                airplainType[0].forEach(element => {
                    if(element.id == this.first_airplane_type_id)
                        this.first_airplane_type_name = element.name
                });
                airplainType[1].forEach(element => {
                    if(element.id == this.second_airplane_type_id)
                        this.second_airplane_type_name = element.name
                });
                for (let i = 0; i < technics.length; i++) {
                    if (technics[i].emblem == this.emblem_name && 
                                                    technics[i].technic_type == this.technics_type_name[1] &&
                                                    technics[i].first_airplain_type == this.first_airplane_type_name &&
                                                    technics[i].second_airplain_type == this.second_airplane_type_name) {
                        this.end_technics.push(technics[i])
                    }
                }
            } else if(technics_type_id == 1) {
                this.chassis_type_name = vehicleChassis[this.chassis_type_id][1]
                 for (let i = 0; i < technics.length; i++) {
                    if (technics[i].emblem == this.emblem_name && 
                                                    technics[i].technic_type == this.technics_type_name[1] &&
                                                    technics[i].vechicle_chassis == this.chassis_type_name)
                        this.end_technics.push(technics[i])
                }
            } else {
                for (let i = 0; i < technics.length; i++) {
                    if(technics[i].emblem == this.emblem_name && 
                                                    technics[i].technic_type == this.technics_type_name[1])
                        this.end_technics.push(technics[i])
                }
            }
        },

        nextPage(key){
            this.$navigateTo(Technic, {props: {
                id: key
            }})
        }
    },

    mounted(){
        this.findTechnics(this.emblems_id, this.technics_type_id)
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