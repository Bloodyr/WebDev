<template>
    <Page>
        <ActionBar :title="this.technic.name" />
        <ScrollView>
            <StackLayout>
                <FlexboxLayout flexDirection="column">
                    <Image :src="this.technic.src" />
                    <FlexboxLayout flexDirection="column" alignItems="flex-start">
                        <FlexboxLayout>
                            <Label text="Эмблема: " />
                            <Label :text="this.technic.emblem" />
                        </FlexboxLayout>
                        <FlexboxLayout>
                            <Label text="Тип техники: " />
                            <Label :text="this.technic.technic_type" />
                        </FlexboxLayout>
                    </FlexboxLayout>
                    <Label textWrap="true" width="100%"  :text="this.technic.information" />
                </FlexboxLayout>
            </StackLayout>
        </ScrollView>
    </Page>
</template>
<script>
import technics from '../mocks/technics';
export default {
    props: {
        id: Number
    },

    data: function(){
        return {
            technic: 0,
        }
    },

    computed: {
        technics(){
            return technics
        }
    },

    mounted(){
        technics.forEach(element => {
            if(element.id == this.id)
                this.technic = element
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
        width: 300;
        height: 150;
    }

    Label {
        font-size: 14;
        font-weight: bold;
    }
</style>